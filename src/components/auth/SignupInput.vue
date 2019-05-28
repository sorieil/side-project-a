<template>
  <div class="signup-input">
    <div class="box">
      <img class="logo" src="../../assets/login-logo@2x.png"/>
      <div class="head-line"></div>
      <h2>회원정보 입력</h2>
      <div class="input-form">
        <form v-on:submit.prevent="submit">
          <ul>
            <li v-if="infoType == 'email'">
              <div class="title">패스워드</div>
              <input v-model="password" type="password" maxlength="20" style="width: 200px; height: 25.8px;" required>
              <div class="title" style="width: 51px">확인</div>
              <input v-model="passwordConfirm" type="password" maxlength="20" style="width: 200px; height: 25.8px;"
                     required>
            </li>
            <li>
              <div class="title">이름</div>
              <input v-model="form.name" type="text" style="	width: 246.9px; height: 25.8px;" required>
              <div class="title" style="width: 66px">성별</div>
              <dropdown-box-gender
                :data="gender"
                :index="form.gender"
                v-on:model="(v) => form.gender = v"
                :required="true"/>
            </li>
            <li>
              <div class="title">생년월일</div>
              <input type="date" v-model="form.birthday" required>
            </li>
            <li>
              <div class="title">집 주소</div>
              <input type="text" v-model="form.address" required></li>
            <li>
              <div class="title">메일주소</div>
              <input type="email" v-model="form.email" required v-bind:readonly="emailReadonly"></li>
            <li>
              <div class="title">전화번호</div>
              <input type="number" v-model="form.tel" required></li>
          </ul>
          <div class="signup-submit-box">
            <button type="submit">회원가입</button>
          </div>
        </form>
      </div>
      <img class="bg-img" src="../../assets/signup-welcome@2x.png">
    </div>
  </div>

</template>

<script>
  /* eslint-disable no-undef */
  import {defaultAuth, firebase} from '@/library/firebase'
  import * as types from '@/store/mutation-types'
  import DropdownBoxGender from '@/components/common/DropdownBoxGender'

  export default {
    components: {DropdownBoxGender},
    name: 'signup-input',
    data() {
      return {
        gender: {
          'm': {
            title: '남자',
            sort: 0
          },
          'f': {
            title: '여자',
            sort: 1
          }
        },
        form: {
          name: '',
          gender: '',
          birthday: '',
          address: '',
          tel: '',
          email: ''
        },
        password: '',
        passwordConfirm: '',
        submitForm: {
          email: ''
        },
        submitUID: '',
        infoType: ''
      }
    },
    created() {
      this.infoType = this.$route.query.type
      const userDefaultInfo = this.$route.query.data
      console.log(userDefaultInfo)
      switch (this.infoType) {
        case 'facebook':
          const token = userDefaultInfo.credential.accessToken
          const user = userDefaultInfo.additionalUserInfo.profile
          this.form.name = user.name
          this.form.gender = user.gender.split('')[0]
          this.form.email = user.email
          this.submitUID = userDefaultInfo.user.uid
          this.submitForm = {
            providerUID: user.id,
            gender: '',
            name: user.name,
            birthday: user.birthday,
            email: this.form.email,
            emailVerified: userDefaultInfo.user.emailVerified,
            creationTime: new Date(userDefaultInfo.user.metadata.creationTime),
            lastSignInTime: new Date(userDefaultInfo.user.metadata.lastSignInTime),
            photoUrl: user.picture.data.url,
            provider: this.infoType,
            extendsInfo: {
              firstName: user.first_name,
              lastName: user.last_name,
              facebookLink: user.link,
              locale: user.locale,
              facebookAccessToken: token,
              ageRangeMin: user.age_range.min,
              timezone: user.timezone,
              facebookVerified: user.verified,
              providerId: userDefaultInfo.additionalUserInfo.providerId
            }
          }
          console.log(this.submitForm, this.form)
          break
        case 'kakao':
          Kakao.Auth.getStatus((kakaoInfo) => {
            console.log(kakaoInfo)
            this.form.name = kakaoInfo.user.properties.nickname
            this.form.email = kakaoInfo.user.kaccount_email
            this.password = kakaoInfo.user.id
            this.passwordConfirm = kakaoInfo.user.id
            this.submitForm = {
              providerUID: kakaoInfo.user.id,
              gender: '',
              name: kakaoInfo.user.properties.nickname,
              birthday: this.form.birthday,
              email: this.form.email,
              emailVerified: kakaoInfo.user.kaccount_email_verified,
              creationTime: firebase.firestore.FieldValue.serverTimestamp(),
              lastSignInTime: firebase.firestore.FieldValue.serverTimestamp(),
              photoUrl: kakaoInfo.user.properties.profile_image,
              provider: this.infoType,
              extendsInfo: {
                AccessToken: userDefaultInfo.access_token,
                thumbnailImage: kakaoInfo.user.properties.thumbnail_image,
                nickname: kakaoInfo.user.properties.nickname
              }
            }
          })
          break
        default:
          console.log('이메일 로그인')
          this.submitForm = {
            gender: this.form.gender,
            name: this.form.name,
            email: this.form.email,
            emailVerified: false,
            creationTime: firebase.firestore.FieldValue.serverTimestamp(),
            lastSignInTime: firebase.firestore.FieldValue.serverTimestamp(),
            photoUrl: '',
            provider: this.infoType
          }
          break
      }
    },
    methods: {
      submit() {
        this.submitForm.gender = this.form.gender
        this.submitForm.name = this.form.name
        this.submitForm.email = this.form.email
        this.submitForm.birthday = this.form.birthday
        // console.log(this.submitForm)
        console.log(this.infoType)
        if (this.infoType !== 'facebook') {
          if (this.password === this.passwordConfirm) {
            defaultAuth.createUserWithEmailAndPassword(this.form.email, this.password.toString()).then((result) => {
              console.log(result)
              this.$store.dispatch(types.SET_SIGNUP, {data: this.submitForm, uid: result.uid}).then(() => {
                alert('계정 생성 완료')
                this.$router.push({path: 'signup-completed', query: {name: this.submitForm.name}})
              })
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code
              const errorMessage = error.message
              console.log(errorCode + '\n' + errorMessage)
              alert(errorMessage)
            })
          } else {
            alert('패스워드가 일치 하지 않습니다.')
          }
        } else {
          console.log(this.submitForm, this.submitUID)
          this.$store.dispatch(types.SET_SIGNUP, {data: this.submitForm, uid: this.submitUID}).then(() => {
            alert('계정 생성 완료')
            this.$router.push({path: 'signup-completed', query: {name: this.submitForm.name}})
          })
        }
      }
    },
    computed: {
      emailReadonly: function() {
        if (this.submitForm.email === '' || typeof this.submitForm.email === 'undefined') {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .signup-input {
    height: 1100px;
    position: relative;
    .box {
      background-color: #FFF;
      width: 1525px;
      height: 900px;
      position: absolute;
      margin: 0 auto;
      top: 100px;
      left: 0;
      right: 0;
      box-shadow: 0px 0px 20px 14px rgba(205, 201, 205, 0.3);
      .logo {
        display: block;
        position: relative;
        margin: 96px auto 32px auto;
        width: 163px;
        height: 54px;
      }
      .head-line {
        width: 1361px;
        height: 2px;
        opacity: 0.6;
        position: relative;
        display: block;
        margin: auto;
        border-bottom: solid 2px rgb(151, 151, 151);
      }
      h2 {
        width: 309px;
        height: 33px;
        opacity: 0.7;
        text-align: center;
        position: relative;
        margin: 25px auto auto auto;
        font-size: 23px;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.5px;
        color: rgb(103, 101, 101);
      }
      .input-form {
        position: relative;
        margin: 30px auto auto auto;
        width: 730px;
        /*border: 1px solid gold;*/
        font-size: 23px;
        font-weight: 300;
        ul li {
          position: inherit;
          padding: 15px 0;
          /*border: 1px solid red;*/

          .title {
            width: 100px;
            /*border: 1px solid red;*/
            display: inline-block;
            text-align: right;
            margin: 0 35px 0 0;
          }
          input {
            display: inline;
            color: rgb(103, 101, 101);
            font-size: 23px;
            font-weight: 300;
            padding: 10px;
            border: 0;
            background-color: rgba(244, 242, 242, 0.55);
            width: 521.9px;
            height: 25.8px;
          }
          .dropdown-box-gender {
            display: inline-block;
            /*border: 1px solid red;*/

          }
        }
        .signup-submit-box {
          position: relative;
          margin: 30px auto auto auto;
          border: 0;
          width: 311px;
          height: 60px;
          button {
            border: 0;
            font-size: 23px;
            font-weight: 300;
            width: 311px;
            height: 60px;
            background-color: rgb(242, 199, 181);
          }
        }
      }
      .bg-img {
        position: absolute;
        right: 0;
        bottom: 20px;
        width: 466px;
        height: 155px;
      }
    }
  }
</style>
