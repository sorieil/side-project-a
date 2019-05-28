<template>
  <div class="intro">
    <div v-if="user.status" class="box">
      <div class="name">{{user.name}}</div>
      <img @click="go('/shop/survey')" src="../../assets/images/shop/product-intro-start.png"/>
    </div>
    <div class="box" v-else>
      <img @click="go('/login')" src="../../assets/images/shop/product-intro-need-login-image.png"/>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'intro',
    methods: {
      go(path) {
        this.$router.push({path: path})
      }
    },
    computed: {
      user() {
        return this.$store.getters.userInfo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .intro {
    position: relative;
    margin: 50px 0 0 0;
    .box {
      width: 1008px;
      position: relative;
      margin: auto;
      display: block;
      .name {
        position: relative;
        left: 0;
        top: 25px;
        width: 420px;
        /*border: 1px solid red;*/
        float: left;
        text-align: right;
        font-size: 25px;
        color: #7e7e7e;
      }
      img {
        position: relative;
        margin: auto;
        display: block;
        cursor:pointer;
      }
    }
  }

</style>
