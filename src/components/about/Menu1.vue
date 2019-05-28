<template>
  <div class="menu1">
    <img class="title" src="../../assets/images/about/about-menu-1-title@2x.png"/>
    <div class="box">
      <div class="thumbnail-box">
        <div class="item-box" v-for="(item, index) in thumbnailList" @click="setImage(index)">
          <img class="item" :src="item.thumbnail"/>
        </div>
      </div>
      <img class="main-image" :src="mainImage"/>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'menu1',
    data() {
      return {
        thumbnailList: {
          'a': {
            thumbnail: require('../../assets/images/about/thumbnail-1@2x.png'),
            main: require('../../assets/images/about/about-main-image-1@2x.png')
          },
          'b': {
            thumbnail: require('../../assets/images/about/thumbnail-2@2x.png'),
            main: require('../../assets/images/about/about-main-image-2@2x.png')
          },
          'c': {
            thumbnail: require('../../assets/images/about/thumbnail-3@2x.png'),
            main: require('../../assets/images/about/about-main-image-3@2x.png')
          },
          'd': {
            thumbnail: require('../../assets/images/about/thumbnail-4@2x.png'),
            main: require('../../assets/images/about/about-main-image-4@2x.png')
          }
        },
        mainImage: require('../../assets/images/about/about-main-image-1@2x.png')
      }
    },
    methods: {
      setImage(index) {
        console.log(index)
        this.mainImage = this.thumbnailList[index].main
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu1 {
    .title {
      width: 566px;
      height: 91px;
      margin: 60px auto auto auto;
      position: relative;
      display: block;
      object-fit: contain;
    }

    .box {
      position: relative;
      display: block;
      width: 1000px;
      height: 487px;
      /*border: 1px solid red;*/
      margin: 22px auto auto auto;
      /*background-color: rgb(251, 250, 249);*/
      .thumbnail-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 124px;
        height: 487px;
        background-color: rgb(251, 250, 249);
        position: relative;
        left: 0;
        /*border: 1px solid red;*/
        .item-box {
          margin: 10px auto;
          position: relative;
          cursor: pointer;
          .item {
            width: 70px;
            height: 70px;
            object-fit: contain;
          }

          &::before {
            position: absolute;
            width: 69px;
            height: 69px;
            content: '';
          }
          &:hover::before {
            border: 1px solid red;
          }
        }
      }
      .main-image {
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        /*border: 1px solid red;*/
        width: 500px;
        height: 522px;
        object-fit: contain;
        animation-name: mainImageShow;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        animation-duration: 1s;
        animation-direction: alternate;
      }

      @keyframes mainImageShow {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }

      }
    }
  }

</style>
