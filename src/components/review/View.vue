<template>
  <div class="view">
    <img src="../../assets/images/review/review-view.png"/>
    <button class="lists" @click="go('/review/')">목록으로 가기</button>
  </div>

</template>

<script>
  export default {
    name: 'view',
    methods: {
      go(path) {
        this.$router.push(({path: path}))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .view {
    img {
      position: relative;
      margin: 50px auto;
      display: block;
    }

    .lists {
      border: 0;
      margin: 50px auto;
      position: relative;
      display: block;
      width: 299px;
      height: 71px;
      background-color: rgb(242, 199, 181);
      opacity: 0.8;
      font-size: 25px;
      line-height: 1.32;
      letter-spacing: 0.5px;
      text-align: center;
      color: rgb(103, 101, 101);

    }
  }

</style>
