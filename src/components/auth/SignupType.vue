<template>
  <div class="signup-type">
    <div class="box">
      <img class="logo" src="../../assets/login-logo@2x.png"/>
      <h2>SNS 계정으로 간편하게 회원가입해보세요!</h2>
      <div class="sns-button-box">
        <img @click.stop="facebook" class="facebook" src="../../assets/signup-facebook-box@2x.png"/>
        <img class="kakao" @click.stop="kakao" src="../../assets/signup-kakaotalk-box@2x.png"/>
      </div>
      <img class="separate" src="../../assets/seperate-or-line@2x.png">
      <img class="email-button" @click.stop="go('signup-input')" src="../../assets/signup-emailbox-box@2x.png"/>
      <img class="bg-img" src="../../assets/signup-welcome@2x.png">
    </div>
  </div>

</template>

<script>
  import {defaultAuth, firebase} from '@/library/firebase'
  /* eslint-disable no-undef */
  export default {
    name: 'signup-type',
    mounted() {

    },
    methods: {
      go(path) {
        // 이메일 계정 생성
        this.$router.push({path: path, query: {data: '', type: 'email'}})
      },
      kakao() {
        Kakao.Auth.login({
          success: (authObj) => {
            console.log(authObj)
            // alert(JSON.stringify(authObj))
            this.$router.push({path: 'signup-input', query: {data: authObj, type: 'kakao'}})
          },
          fail: (err) => {
            // console.log(err)
            alert(JSON.stringify(err))
          }
        })
      },
      facebook() {
        const provider = new firebase.auth.FacebookAuthProvider()
        defaultAuth.signInWithPopup(provider).then((result) => {
          this.$router.push({path: 'signup-input', query: {data: result, type: 'facebook'}})
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .signup-type {
    height: 1100px;
    position: relative;
    .box {
      background-color: #FFF;
      width: 1523px;
      height: 800px;
      position: absolute;
      margin: 0 auto;
      top: 100px;
      left: 0;
      right: 0;
      /*bottom: 0;*/
      /*border: 1px solid red;*/
      box-shadow: 0px 0px 20px 14px rgba(205, 201, 205, 0.3);
      .logo {
        display: block;
        position: relative;
        margin: 96px auto;
        /*top: 96px;*/
        width: 163px;
        height: 54px;
      }
      h2 {
        width: 319px;
        height: 33px;
        opacity: 0.7;
        font-size: 17px;
        line-height: 1.94;
        letter-spacing: 0.4px;
        text-align: center;
        color: rgb(103, 101, 101);
        position: relative;
        margin: auto;
      }
      .sns-button-box {
        position: relative;
        margin: 20px auto;
        width: 362px;
        /*border: 1px solid red;*/
        img {
          display: block;
          &:nth-child(1) {
            margin-bottom: 20px;
          }
        }
        .facebook {
          cursor: pointer;
          width: 362px;
          height: 64px;
        }
        .kakao {
          cursor: pointer;
          width: 362px;
          height: 64px;
        }
      }
      .separate {
        width: 465px;
        height: 27px;
        display: block;
        position: relative;
        margin: auto;
      }
      .email-button {
        cursor: pointer;
        width: 362px;
        height: 64px;
        display: block;
        position: relative;
        margin: 20px auto;
      }
      .bg-img {
        position: absolute;
        right: 0;
        bottom: 50px;
        width: 466px;
        height: 155px;
      }
    }
  }

</style>
