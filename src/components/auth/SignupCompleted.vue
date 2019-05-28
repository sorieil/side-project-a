<template>
  <div class="signup-compted">
    <div class="box">
      <img class="logo" src="../../assets/login-logo@2x.png"/>
      <img class="completed-img" src="../../assets/signup-completed-img@2x.png"/>
      <div class="completed-text">
        {{name}}님만의 Skin Side project를 만들어보세요.
      </div>
      <div class="signup-login-box">
        <button @click.stop="go('login')">로그인 하러가기</button>
      </div>
      <img class="bg-img" src="../../assets/signup-welcome@2x.png">

    </div>
  </div>

</template>

<script>
  /* eslint-disable no-undef */
  export default {
    name: 'signup-compted',
    data() {
      return {
        name: ''
      }
    },
    created() {
      this.name = this.$route.query.name
    },
    methods: {
      go(path) {
        this.$router.push({path: path})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .signup-compted {
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
      .completed-img {
        margin: 132px auto auto auto;
        display: block;
        width: 278px;
        height: 255px;
        position: relative;
      }
      .completed-text {
        display: block;
        position: relative;
        margin: 13px auto auto auto;
        width: 384px;
        height: 35px;
        opacity: 0.7;
        font-size: 20px;
        line-height: 1.75;
        letter-spacing: 0.5px;
        text-align: center;
        color: rgb(103, 101, 101);
      }
      .signup-login-box {
        position: relative;
        margin: 78px auto auto auto;
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
