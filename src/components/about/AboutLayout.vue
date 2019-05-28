<template>
  <div class="about-layout">
    <keep-alive>
      <transition appear name="slide-fade" mode="out-in">
        <router-view/>
      </transition>
    </keep-alive>
    <side-menu></side-menu>
  </div>

</template>

<script>
  import SideMenu from '@/components/about/SideMenu'

  export default {
    components: {SideMenu},
    name: 'about-layout'
  }
</script>
<style lang="scss" scoped>
  .about-layout {
    /*border: 1px solid red;*/
    .side-menu {
      position: absolute;
      margin: 0 0 auto 0;
      top: 400px;
      bottom: 0;
      right: 0;
      min-height: 400px;
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
    .slide-fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active below version 2.1.8 */
    {
      /*position: absolute;*/
      /*transform: translateX(10px);*/
      opacity: 0;
      /*height: 1000px;*/
    }

  }

</style>
