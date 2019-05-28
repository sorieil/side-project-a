<template>
  <div class="main-layout">
    <top-menu></top-menu>
    <div class="container">
      <keep-alive>
        <transition name="slide-fade" appear mode="out-in">
          <router-view/>
        </transition>
      </keep-alive>
    </div>
    <b-footer></b-footer>
  </div>
</template>

<script>
  import TopMenu from '@/components/common/TopMenu'
  import BFooter from '@/components/common/BFooter'

  export default {
    components: {TopMenu, BFooter},
    name: 'main-layout',
    created() {
      console.log('load')
    }
  }
</script>

<style lang="scss" scoped>
  .main-layout {
    width: 100%;
    /*border: 1px solid red;*/
    overflow-y: hidden;
    margin: auto;
    position: relative;
    .container {
      overflow: hidden;
      /*border: 1px dotted red;*/
      /*position: absolute;*/
      /*margin: auto 76px auto 76px;*/
      display: block;
    }



    .bounce-enter-active {
      overflow: hidden;
      position: fixed;
      margin: auto;
      left: 0;
      right: 0;
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }

    .slide-fade-enter-active {
      /*position: absolute;*/
      transition: all .5s ease;
      /*height: 1000px;*/
      //transform: translateX(-100px);
    }
    .slide-fade-leave-active {
      /*position: absolute;*/
      transition: all .3s ease;
      /*height: 1000px;*/
      /*transform: translateX(2000px);*/
    }
    .slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active below version 2.1.8 */
    {
      /*position: absolute;*/
      /*transform: translateX(10px);*/
      opacity: 0;
      /*height: 1000px;*/
    }

    @keyframes bounce-in {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.2;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

  }


</style>
