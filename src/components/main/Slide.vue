<template>
  <div class="slide">
    <div class="image-box" :id="imageBoxId">
      <img class="item" src="../../assets/images/main/slide/main-slide-1.png"/>
      <button @click="nextSlide" class="start-button">시작하기</button>
    </div>
    <img class="next-slide-img" :src="slideLists[targetSlide]"/>
  </div>

</template>

<script>
  export default {
    name: 'slide',
    data() {
      return {
        imageBoxId: new Date().getTime().toString() + 'Slide',
        slideLists: [
          require('../../assets/images/main/slide/main-slide-1.png'),
          require('../../assets/images/main/slide/main-slide-2.png')
        ],
        targetSlide: 0
      }
    },
    methods: {
      nextSlide() {
        let slide = window.document.getElementById(this.imageBoxId)
        slide.className = 'item next-slide'
        slide.children[0].src = this.slideLists[this.targetSlide]
        console.log(slide[0])
        this.targetSlide += 1
        console.log(this.targetSlide)
      },
      prevSlide() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .slide {
    min-width: 1024px;
    width: 100%;
    height: 600px;
    position: relative;
    /*border: 1px dotted red;*/
    margin: auto;
    overflow: hidden;
    .image-box {
      margin: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 688px;
      height: 362px;
      /*border: 1px solid red;*/
      img.item {
        width: 688px;
        height: 362px;
        object-fit: contain;
        position: relative;
        /*transition: width 1s ease-in-out;*/
      }



      button.start-button {
        background-color: #F2C7B5;
        width: 186px;
        height: 36px;
        border: 0;
        position: absolute;
        right: 40px;
        bottom: 0;
        outline: none;
        cursor: pointer;
      }
    }

    img.next-slide-img {
      width: 52.8px;
      height: 261.1px;
      object-fit: contain;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    .next-slide {
      animation: prev-slide 1s ease-in-out;
      animation-direction: alternate, reverse, normal;
    }

    @keyframes next-slide {
      0% {
        left: 0;
      }

      50% {
        left: 500px;
        opacity: 0.5;
      }

      100% {
        left: 2000px;
        opacity: 0;
      }
    }

    @keyframes prev-slide {
      0% {
        right: 0;
      }

      50% {
        right: -500px;
        opacity: 0.5;
      }

      100% {
        right: 2000px;
        opacity: 0;
      }
    }

  }

</style>
