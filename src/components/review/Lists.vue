<template>
  <div class="lists">
    <div class="box">
      <div class="item" @click.stop="go('/review/view')" v-for="(item, index) in reviewLists" v-bind:key="index">
        <div class="header active">{{item.title}}</div>
        <div class="name">{{item.name}} 메이트님</div>
        <div class="status">
          <ul class="child">
            <li class="child-item">로션 하</li>
            <li class="child-item">수분 중</li>
            <li class="child-item">홍조 중</li>
            <li class="child-item">각질 상</li>
          </ul>
          <div class="image-box">
            <img src="../../assets/images/review/review-sample-user-image.jpg"/>
          </div>
          <div class="content" v-text="item.text.slice(0,30) + '...'">
          </div>
        </div>
      </div>
    </div>
    <div class="footer-box">
      <ul class="pages">
        <li class="page">1</li>
        <li class="page">2</li>
        <li class="page">3</li>
        <li class="page">4</li>
      </ul>
      <button class="write-button" @click="go('/review/write')">후기 작성하기</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lists',
    data() {
      return {
        reviewLists: [
          {
            title: '벌써 2통째 사용하고 있어요. 너무 좋네요~',
            name: '지혜린',
            lo: 1,
            wa: 2,
            ho: 3,
            kak: 4,
            photoUrl: require('../../assets/images/review/review-sample-user-image.jpg'),
            text: '안녕하세요 \n 벌써 두통째 사용하고 있는데 너무 좋아서 다시 다음달에 또 주문하려고 합니다.'
          },
          {
            title: '벌써 2통째 사용하고 있어요. 너무 좋네요~',
            name: '지혜린',
            lo: 1,
            wa: 2,
            ho: 3,
            kak: 4,
            photoUrl: require('../../assets/images/review/review-sample-user-image.jpg'),
            text: '안녕하세요 \n 벌써 두통째 사용하고 있는데 너무 좋아서 다시 다음달에 또 주문하려고 합니다.'
          },
          {
            title: '벌써 2통째 사용하고 있어요. 너무 좋네요~',
            name: '지혜린',
            lo: 1,
            wa: 2,
            ho: 3,
            kak: 4,
            photoUrl: require('../../assets/images/review/review-sample-1-user-image.jpg'),
            text: '안녕하세요 \n 벌써 두통째 사용하고 있는데 너무 좋아서 다시 다음달에 또 주문하려고 합니다.'
          },
          {
            title: '벌써 2통째 사용하고 있어요. 너무 좋네요~',
            name: '지혜린',
            lo: 1,
            wa: 2,
            ho: 3,
            kak: 4,
            photoUrl: require('../../assets/images/review/review-sample-user-image.jpg'),
            text: '안녕하세요 \n 벌써 두통째 사용하고 있는데 너무 좋아서 다시 다음달에 또 주문하려고 합니다.'
          },
          {
            title: '벌써 2통째 사용하고 있어요. 너무 좋네요~',
            name: '지혜린',
            lo: 1,
            wa: 2,
            ho: 3,
            kak: 4,
            photoUrl: require('../../assets/images/review/review-sample-user-image.jpg'),
            text: '안녕하세요 \n 벌써 두통째 사용하고 있는데 너무 좋아서 다시 다음달에 또 주문하려고 합니다.'
          },
          {
            title: '벌써 2통째 사용하고 있어요. 너무 좋네요~',
            name: '지혜린',
            lo: 1,
            wa: 2,
            ho: 3,
            kak: 4,
            photoUrl: require('../../assets/images/review/review-sample-user-image.jpg'),
            text: '안녕하세요 \n 벌써 두통째 사용하고 있는데 너무 좋아서 다시 다음달에 또 주문하려고 합니다.'
          },
          {
            title: '벌써 2통째 사용하고 있어요. 너무 좋네요~',
            name: '지혜린',
            lo: 1,
            wa: 2,
            ho: 3,
            kak: 4,
            photoUrl: require('../../assets/images/review/review-sample-1-user-image.jpg'),
            text: '안녕하세요 \n 벌써 두통째 사용하고 있는데 너무 좋아서 다시 다음달에 또 주문하려고 합니다.'
          },
          {
            title: '벌써 2통째 사용하고 있어요. 너무 좋네요~',
            name: '지혜린',
            lo: 1,
            wa: 2,
            ho: 3,
            kak: 4,
            photoUrl: require('../../assets/images/review/review-sample-user-image.jpg'),
            text: '안녕하세요 \n 벌써 두통째 사용하고 있는데 너무 좋아서 다시 다음달에 또 주문하려고 합니다.'
          }
        ]
      }
    },
    methods: {
      go(path) {
        this.$router.push(({path: path}))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lists {
    width: 1024px;
    margin: auto;
    position: relative;
    overflow: hidden;
    .box {
      width: 1000px;
      position: relative;
      margin: auto;
      /*border: 1px solid red;*/
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      /*align-content: space-between;*/
      .item {
        cursor: pointer;
        position: relative;
        margin: 0 15px 50px 15px;
        color: white;
        text-align: center;
        font-size: 12px;
        width: 200px;
        height: 280px;
        background-color: rgb(250, 250, 250);
        border: solid 1px rgb(151, 151, 151);
        .header {
          width: 190px;
          height: 30px;
          padding: 0 5px 0 5px;
          line-height: 30px;
          font-size: 12px;
          background-color: rgb(235, 234, 234);
          border-bottom: solid 1px rgb(151, 151, 151);
          display: block;
          text-align: center;
          color: rgb(88, 88, 88);
          font-weight: 300;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .active {
          background-color: rgb(242, 199, 181);
        }

        .name {
          width: 134px;
          height: 20px;
          font-weight: 300;
          text-align: center;
          color: rgb(88, 88, 88);
          /*border: 1px solid red;*/
          position: relative;
          margin: 10px auto auto auto;
        }

        .default-msg {
          position: absolute;
          margin: auto;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 120px;
          height: 37px;
          font-weight: 300;
          text-align: left;
          color: rgb(88, 88, 88);
        }

        .status {
          width: 90%;
          height: 30px;
          background-color: rgb(255, 255, 255);
          border: solid 1px rgb(221, 221, 221);
          position: relative;
          margin: 0 auto auto auto;
          .child {
            display: flex;
            .child-item {
              line-height: 30px;
              text-align: center;
              color: rgb(88, 88, 88);
              width: 100%;
              font-weight: 400;
              display: inline-block;
            }
          }
        }
        .image-box {
          overflow: hidden;
          position: relative;
          display: inline-block;
          margin: 21px auto;
          width: 180px;
          height: 100px;
          background-color: rgb(235, 234, 234);
          img {
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 180px;
            object-fit: contain;
            transition: all 0.3s ease-in-out;
          }

          &:hover img {
            transform: scale(0.3, 0.3);
          }
        }

        .content {
          text-align: center;
          line-height: 1.55;
          color: rgb(135, 135, 135);
        }
      }
    }
    .footer-box {
      width: 1000px;
      /*border: 1px solid red;*/
      position: relative;
      margin: auto;
      .pages {
        width: 60%;
        /*border: 1px solid red;*/
        text-align: center;
        position: relative;
        margin: auto;
        .page {
          cursor: pointer;
          display: inline-block;
          padding: 0 20px;
          width: 24px;
          text-align: left;
          color: rgb(202, 202, 202);
          /*border: 1px solid red;*/
          font-weight: 300;
          &:nth-child(1) {
            color: rgb(124, 124, 124);
          }
        }
      }

      .write-button {
        /*border: 1px solid red;*/
        cursor: pointer;
        border: 0;
        outline: none;
        margin: 50px auto auto auto;
        position: relative;
        display: block;
        width: 200px;
        height: 40px;
        font-size: 14px;
        background-color: rgb(242, 199, 181);
        opacity: 0.8;
        line-height: 1.32;
        letter-spacing: 0.5px;
        text-align: center;
        color: rgb(103, 101, 101);

      }

    }
  }

</style>
