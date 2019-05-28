<template>
  <div class="top-menu">
    <div class="guide">
      <menu-under-bar :menu="menu"></menu-under-bar>
      <div class="logo" @click="goToMain">
      </div>
      <login-status></login-status>
    </div>
  </div>
</template>

<script>
  import MenuUnderBar from '@/components/common/MenuUnderBar.vue'
  import LoginStatus from '@/components/common/LoginStatus'

  export default {
    components: {
      LoginStatus,
      MenuUnderBar
    },
    name: 'top-menu',
    data() {
      return {
        menu: {
          0: {
            title: '브랜드소개',
            name: 'about',
            width: '100px'
          },
          1: {
            title: '제품구매',
            name: 'shop',
            width: '80px'
          },
          2: {
            title: '고객후기',
            name: 'review',
            width: '80px'
          },
          3: {
            title: '고객상담',
            name: 'customer',
            width: '80px'
          }
        }
      }
    },
    methods: {
      goToMain() {
        this.$router.push({path: '/'})
      }
    }

  }
</script>

<style lang="scss" scoped>
  .top-menu {
    z-index: 1;
    /*border-bottom: 1px solid gray;*/
    position: relative;
    margin: auto;
    width: 100%;
    height: 121px;
    box-shadow: 0 5px 20px rgba(205, 201, 205, 0.3);
    background-color: #FFF;

    .guide {
      width: 1024px;
      min-width: 1024px;
      position: relative;
      margin: auto;
      height: 121px;
      .menu-under-bar {
        /*margin: 0 0 0;*/
        position: absolute;
        /*border: 1px solid red;*/
        bottom: 38px;
        left: 0;
      }

      .login-status {
        position: absolute;
        bottom: 38px;
        right: 0;
      }

      .logo {
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: url("../../assets/logo@2x.png") no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        display: block;
        width: 140px;
        height: 50px;
      }
    }
  }

</style>
