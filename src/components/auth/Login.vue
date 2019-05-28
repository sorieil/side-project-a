<template>
  <div class="login">
    <div class="box">
      <img class="side-img" src="../../assets/login-side-image-1@2x.png"/>
      <div class="right-box">
        <div class="box-1">
          <img src="../../assets/login-logo@2x.png"/>
        </div>
        <div class="box-2">
          <div class="description">
            로그인을 하시면 더욱 다양한 서비스 이용하실 수 있습니다.
          </div>
          <div class="form-box">
            <form @submit.prevent="login">
              <div class="input-box">
                <input type="email" v-model="form.email" placeholder="아이디를 입력해주세요" required>
                <input type="password" v-model="form.password" placeholder="비밀번호를 입력해주세요." required>
              </div>
              <div class="login-button-box">
                <button type="submit">로그인</button>
              </div>
            </form>
            <div class="etc-box">
              <button @click.stop="forgetPassword">ID/PW 찾기</button>
              <button @click.stop="go('signup')">회원가입</button>
            </div>

          </div>
        </div>
        <div class="box-3">
          <div class="description">
            SNS 계정으로 간편하게 로그인해보세요!
          </div>
          <div class="sns-button-box">
            <img @click.stop="facebook" class="facebook" src="../../assets/facebook-login-button@2x.png">
            <img @click.stop="kakao" class="kakao" src="../../assets/kakao-login-button@2x.png">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  /* eslint-disable no-undef */
  import {defaultAuth, firebase} from '@/library/firebase'
  import * as types from '@/store/mutation-types'

  export default {
    name: 'login',
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      go(path) {
        this.$router.push({path: path})
      },
      forgetPassword() {
        let email = prompt('Email', '') // <-- for IE
        if (email) {
          console.log(email)
          defaultAuth.sendPasswordResetEmail(email).then(() => {
            // Email sent.
            alert('success')
          }).catch((error) => {
            // An error happened.
            alert(error)
          })
        }
      },
      login() {
        if (this.form.email !== '' && this.form.password !== '') {
          defaultAuth.signInWithEmailAndPassword(this.form.email, this.form.password).then((snapshot) => {
            snapshot.getIdToken().then((token) => {
              const user = snapshot
              const uid = snapshot.uid
              const userForm = {
                emailVerified: user.emailVerified,
                lastSignInTime: firebase.firestore.FieldValue.serverTimestamp()
              }
              this.$store.dispatch(types.UPDATE_USERINFO, {data: userForm, uid: uid}).then(() => {
                // 여기에서 다시 유저 정보를 가져오는 이유는 유저의 타입을 가져오기 위함이다.
                this.$store.dispatch(types.GET_USERINFO, {uid: uid, token: token}).then(this.go('/'))
              })
            })
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code
            const errorMessage = error.message
            alert(errorMessage)
            console.log(errorCode)
          })
        } else {
          alert('You have to input your email/password.')
        }
      },
      kakao() {
        Kakao.Auth.login({
          success: (authObj) => {
            console.log(authObj)
            Kakao.Auth.getStatus((kakaoInfo) => {
              console.log(kakaoInfo)
              this.form.email = kakaoInfo.user.kaccount_email
              this.form.password = kakaoInfo.user.id.toString()
              this.login()
            })
          },
          fail: () => {
            this.loginResultFails()
          }
        })
      },
      facebook() {
        const provider = new firebase.auth.FacebookAuthProvider()
        defaultAuth.signInWithPopup(provider).then((result) => {
          const uid = result.user.uid
          if (result.additionalUserInfo.isNewUser) {
            this.loginResultFails()
          } else {
            this.$store.dispatch(types.GET_USERINFO, {uid: uid}).then((exist) => {
              if (exist) {
                this.submitUID = result.user.uid
                const userForm = {
                  lastSignInTime: firebase.firestore.FieldValue.serverTimestamp()
                }
                this.$store.dispatch(types.UPDATE_USERINFO, {data: userForm, uid: uid}).then(() => {
                  // 여기에서 다시 유저 정보를 가져오는 이유는 유저의 타입을 가져오기 위함이다.
                  this.$store.dispatch(types.GET_USERINFO, {uid: uid}).then(this.go('/'))
                })
              } else {
                this.loginResultFails()
              }
            })
          }
        })
      },
      loginResultFails() {
        alert('회원이 아닙니다. 회원가입후 다시 해주세요.')
        this.$router.push({path: 'signup'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    height: 1000px;
    position: relative;
    .box {
      width: 1523px;
      height: 776.3px;
      position: absolute;
      margin: 0 auto;
      top: 100px;
      left: 0;
      right: 0;
      bottom: 0;
      /*border: 1px solid red;*/
      box-shadow: 0px 0px 20px 14px rgba(205, 201, 205, 0.3);
      display: flex;
      .side-img {
        width: 522.1px;
        height: 777px;
      }
      .right-box {
        width: 1000px;
        /*border: 1px solid blue;*/
        background-color: #FFF;
        .box-1 {
          width: 759px;
          height: 140px;
          border-bottom: 2px solid #979797;
          opacity: 0.6;
          position: relative;
          margin: auto;
          img {
            position: absolute;
            margin: auto auto 24px auto;
            top: 66px;
            left: 0;
            right: 0;
            bottom: 0;
            width: 163px;
            height: 54px;
          }

        }
        .box-2 {
          width: 759px;
          height: 240px;
          border-bottom: 2px solid #979797;
          opacity: 0.6;
          position: relative;
          margin: auto;
          .description {
            position: relative;
            margin: 36px auto auto auto;
            width: 390px;
            text-align: center;
          }
          .form-box {
            top: 29px;
            position: relative;
            width: 100%;
            left: 0;
            .input-box {
              display: inline;
              margin: 0 0 0 1px;
              float: left;
              width: 387px;
              /*border: 1px dotted red;*/
              input {
                padding: 0 0 0 10px;
                font-size: 17px;
                line-height: 1.94;
                letter-spacing: 0.4px;
                text-align: left;
                color: rgb(103, 101, 101);
                width: 377px;
                height: 57px;
                background-color: rgba(244, 242, 242, 0.55);
                margin: 0 0 26px 0;
                border: 0;
                outline: none;
                &:nth-child(2) {
                  margin-bottom: 0;
                }
              }
            }

            .login-button-box {
              margin: 0 0 0 26px;
              display: inline;
              float: left;
              /*border: 1px solid red;*/
              width: 112px;
              height: 140.1px;

              button {
                font-size: 20px;
                line-height: 1.65;
                letter-spacing: 0.5px;
                color: rgb(103, 101, 101);
                border: 0;
                width: 112px;
                height: 140.1px;
                background-color: rgb(242, 199, 181);
              }
            }

            .etc-box {
              float: right;

              button {
                margin: 10px 0 0 0;
                display: block;
                width: 216px;
                height: 55px;
                background-color: rgba(227, 226, 226, 0.55);
                font-size: 18px;
                line-height: 1.39;
                letter-spacing: 0.4px;
                color: rgb(144, 144, 144);
                border: 0;
              }
            }
          }

        }
        .box-3 {
          width: 759px;
          height: 240px;
          /*border: 1px solid green;*/
          position: relative;
          margin: 43px auto 0 auto;
          /*display: block;*/

          .description {
            position: relative;
            margin: 0 auto;
            width: 390px;
            text-align: center;
            opacity: 0.7;
            font-size: 17px;
            line-height: 1.94;
            letter-spacing: 0.4px;
            color: rgb(103, 101, 101);
          }
          .sns-button-box {
            position: relative;
            margin: 30px auto auto auto;
            /*border: 1px solid red;*/
            width: 586px;
            /*width: 100%;*/
            height: 110px;
            .facebook {
              float: left;
              left: 0;
              width: 273px;
              height: 110px;
            }

            .kakao {
              float: right;
              right: 0;
              width: 273px;
              height: 110px;
            }
          }

        }
      }
    }
  }

</style>
