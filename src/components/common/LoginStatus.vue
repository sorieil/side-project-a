<template>
  <div class="login-status" id="loginStatus">
    <div class="in-login" v-if="userInfo.status" @click.stop="dropdownMenu">
      <ul class="user-info">
        <li>
          <div class="user-name">{{userInfo.name}}</div>
          고객님
        </li>
        <li>
          <div class="profile-img">
            <img
              :src="userInfo.photoUrl == null ? 'http://voice4thought.org/wp-content/uploads/2016/08/default1.jpg': userInfo.photoUrl">
          </div></li>
      </ul>
      <ul class="dropdown-box" id="userMenu">
        <li @click="logout">로그아웃</li>
      </ul>
    </div>
    <div class="not-login" v-else>
      <div class="item" @click.stop="signup" id="signup" :class="{'active': currentPath == '/signup'}">
        회원가입
      </div>
      <div class="item" @click.stop="login" id="login" :class="{'active': currentPath == '/login'}">
        로그인
      </div>
    </div>
  </div>

</template>

<script>
  /* eslint-disable no-undef */
  import * as types from '@/store/mutation-types'

  export default {
    name: 'login-status',
    data() {
      return {}
    },
    created() {
      console.log('login status', this.userInfo.photoUrl)
    },
    methods: {
      signup() {
        this.$router.push({path: 'signup'})
      },
      login() {
        this.$router.push({path: 'login'})
      },
      dropdownMenu() {
        $('#userMenu').addClass('active')
      },
      logout() {
        this.$store.dispatch(types.LOGIN_OUT).then(() => {
          this.$router.push({path: '/'})
        })
      }
    },
    computed: {
      currentPath() {
        return this.$route.path
      },
      userInfo() {
        return this.$store.getters.userInfo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-status {
    position: relative;
    width: 350px;
    height: 30px;
    /*border: 1px solid red;*/
    .not-login {
      width: 200px;
      height: 30px;
      /*border: 1px solid blue;*/
      position: relative;
      float: right;
      .item {
        position: absolute;
        cursor: pointer;
        display: block;
        text-align: center;
        font-size: 14px;
        letter-spacing: 1.4px;
        color: #6c6c6c;

        &:nth-child(2) {
          width: 100px;
          /*margin: 0 20px 0 0;*/
        }

        &:nth-child(1) {
          width: 100px;
          right: 0;
        }

        /*&:hover {*/
        /*font-size: 23px;*/
        /*font-weight: bold;*/
        /*letter-spacing: 1.6px;*/
        /*color: #f2c7b5;*/
        /*}*/
      }

      .active {
        width: 110px;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.6px;
        color: #f2c7b5;
      }
    }

    .in-login {
      cursor: pointer;
      float: right;
      .user-info > li {
        display: inline-block;
        &:nth-child(1) {
          /*border: 1px solid red;*/
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 1.6px;
          text-align: justify;
          color: rgb(108, 108, 108);
          max-width: 220px;
          margin: 0 20px 0 0;
          .user-name {
            margin: 0 0 -3px 0;
            display: inline-block;
            max-width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        &:nth-child(2) {
          width: 80px;
          float: right
        }
        .profile-img {
          width: 66px;
          height: 66px;
          position: absolute;
          border-radius: 33px;
          overflow: hidden;
          /*border: 1px solid red;*/
          top: -21px;
          img {
            max-width: 66px;
            max-height: 66px;
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
      }
      .dropdown-box {
        visibility: hidden;
        opacity: 0;
        top: 62px;
        right: 0;
        position: absolute;
        /*border: 1px solid red;*/
        width: 268px;
        background-color: rgb(240, 238, 237);
        li {
          height: 68.1px;
          background-color: rgb(224, 222, 222);
          text-align: center;
          line-height: 68px;
          font-size: 20px;
          color: rgb(88, 88, 88);
        }

        -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
        -webkit-transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-in-out;

        -moz-transition-property: width height background-color font-size left top transform -moz-transform color;
        -moz-transition-duration: 0.5s;
        -moz-transition-timing-function: ease-in-out;

        -ms-transition-property: width height background-color font-size left top transform -ms-transform color;
        -ms-transition-duration: 0.5s;
        -ms-transition-timing-function: ease-in-out;

        -o-transition-property: width height background-color font-size left top transform -o-transform color;
        -o-transition-duration: 0.5s;
        -o-transition-timing-function: ease-in-out;

        transition-property: width height background-color font-size left top transform transform color;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;

      }

      .active {
        opacity: 1;
        visibility: visible;

        -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
        -webkit-transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-in-out;

        -moz-transition-property: width height background-color font-size left top transform -moz-transform color;
        -moz-transition-duration: 0.5s;
        -moz-transition-timing-function: ease-in-out;

        -ms-transition-property: width height background-color font-size left top transform -ms-transform color;
        -ms-transition-duration: 0.5s;
        -ms-transition-timing-function: ease-in-out;

        -o-transition-property: width height background-color font-size left top transform -o-transform color;
        -o-transition-duration: 0.5s;
        -o-transition-timing-function: ease-in-out;

        transition-property: width height background-color font-size left top transform transform color;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
      }
    }
  }

</style>
