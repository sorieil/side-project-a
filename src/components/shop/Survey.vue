<template>
  <div class="survey">
    <div v-if="user.status" class="box">
      <div class="name">{{user.name}}</div>
      <img src="../../assets/images/shop/order-nametag.png"/>
      <img class="image-box" @click="nextImage" :src="showImage.name"/>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'survey',
    data() {
      return {
        imageLists: {
          1: {name: require('../../assets/images/shop/img-1.png')},
          2: {name: require('../../assets/images/shop/img-2.png')},
          3: {name: require('../../assets/images/shop/img-3.png')},
          4: {name: require('../../assets/images/shop/img-4.png')},
          5: {name: require('../../assets/images/shop/img-5.png')},
          6: {name: require('../../assets/images/shop/img-6.png')},
          7: {name: require('../../assets/images/shop/img-7.png')},
          8: {name: require('../../assets/images/shop/img-8.png')},
          9: {name: require('../../assets/images/shop/img-9.png')},
          10: {name: require('../../assets/images/shop/img-10.png')},
          11: {name: require('../../assets/images/shop/img-11.png')},
          12: {name: require('../../assets/images/shop/img-12.png')},
          13: {name: require('../../assets/images/shop/img-13.png')},
          14: {name: require('../../assets/images/shop/img-14.png')},
          15: {name: require('../../assets/images/shop/img-15.png')},
          16: {name: require('../../assets/images/shop/img-16.png')},
          17: {name: require('../../assets/images/shop/img-17.png')}
        },
        count: 1
      }
    },
    created() {
      console.log(this.imageLists)
    },
    methods: {
      nextImage() {
        this.count++
        if (this.count > 17) {
          this.count = 1
        }
      }
    },
    computed: {
      user() {
        return this.$store.getters.userInfo
      },
      showImage() {
        return this.imageLists[this.count]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .survey {
    position: relative;
    margin: 50px 0 0 0;
    .box {
      width: 90%;
      position: relative;
      margin: auto;
      display: block;
      .name {
        z-index: 1;
        position: absolute;
        left: 25%;
        top: 43px;
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
      }

      .image-box {
        cursor: pointer;
      }
    }
  }

</style>
