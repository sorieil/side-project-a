<template>
  <div class="review-layout">
    <img class="header-image" src="../../assets/images/review/review-title.png"/>
    <keep-alive>
      <transition appear name="slide-fade" mode="out-in">
        <router-view/>
      </transition>
    </keep-alive>
    <div class="footer-margin"></div>
  </div>

</template>

<script>
  import Lists from '@/components/review/Lists'
  import Write from '@/components/review/Write'

  export default {
    components: {
      Write,
      Lists
    },
    name: 'review-layout',
    data() {
      return {
        menu: 'write'
      }
    },
    created() {
    }

  }
</script>

<style lang="scss" scoped>
  .review-layout {
    min-height: 1000px;
    .header-image {
      width: 600px;
      height: 173px;
      position: relative;
      margin: 60px auto;
      display: block;
      object-fit: contain;
    }

    .footer-margin {
      display: block;
      height: 50px;
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
