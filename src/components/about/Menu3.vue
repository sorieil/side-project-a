<template>
  <div class="menu3">
    <div class="box">
      <img class="title" src="../../assets/images/about/title@2x.png">
      <div class="menu-box">
        <div class="menu" v-for="(value, index) in tabMenuLists" :class="{'active': targetMenu == index}"
        @click="selectMenuTab(index)">{{value}}</div>
      </div>
      <div class="image-box">
        <img :src="targetImage" />
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'menu3',
    data() {
      return {
        tabMenuLists: ['이미지 분석', '생활습관 분석', '솔루셔 선택', '커스트마이징'],
        tabMenuImageLists: [
          require('../../assets/images/about/about-menu-3-tab-1.png'),
          require('../../assets/images/about/about-menu-3-tab-2.png'),
          require('../../assets/images/about/about-menu-3-tab-3.png'),
          require('../../assets/images/about/about-menu-3-tap-4.png')
        ],
        targetImage: require('../../assets/images/about/about-menu-3-tab-1.png'),
        targetMenu: 0
      }
    },
    methods: {
      selectMenuTab(index) {
        this.targetMenu = index
        this.targetImage = this.tabMenuImageLists[index]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu3 {
    .box {
      margin: auto;
      position: relative;
      width: 900px;
      .title {
        width: 466px;
        height: 60px;
        margin: 60px auto auto auto;
        display: block;
        position: relative;
        object-fit: contain;
        /*border: 1px solid red;*/
      }
      .menu-box {
        margin: 30px 0 0 0;
        width: inherit;
        display: flex;
        justify-content: center;
        .menu {
          text-align: center;
          line-height: 40px;
          margin: 0 10px;
          width:  172px;
          height: 40px;
          /*border: 1px solid red;*/
          background-color: #e4e4e4;

          &.active {
            background-color: #F2DBD1;
          }
        }


      }
      .image-box {
        margin: auto;
        position: relative;
        width: 796px;
        height: auto;
        img {
          width: inherit;
          height: auto;
          object-fit: contain;
        }
      }
    }

  }

</style>
