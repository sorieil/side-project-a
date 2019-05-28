<template>
  <div class="b-footer">
    <div class="box">
      <div class="info-box">
        <table>
          <tr>
            <td>회사명</td>
            <td>(주)올리포유 (Only For You)</td>
          </tr>
          <tr>
            <td>대표</td>
            <td>정구현</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>서울특별시 성동구 왕십리로 222 한양대학교 HIT</td>
          </tr>
          <tr>
            <td>사업자등록번호</td>
            <td>672-81-00857</td>
          </tr>
        </table>
      </div>
      <div class="sns-box">
        <ul>
          <li>
            Side project A SNS
          </li>
          <li>
            Side project A의 최신소식을 가까이서 만나보세요.
          </li>
        </ul>
        <div class="image-box">
          <div class="kakao">
            <img src="../../assets/images/footer/kakaolink_btn_small_ov.png"/>
            <span>카카오톡 플러스친구</span>
          </div>
          <div class="facebook">
            <img @click="facebook" src="../../assets/images/footer/FB-f-Logo__blue_29.png"/>
            <span>페이스북 페이지</span>
          </div>
        </div>
      </div>
      <div class="contact-box">
        <ul>
          <li>
            Contact Us
          </li>
          <li>
            언제든지 신속히 답변해드리겠습니다.
          </li>
        </ul>
        <div class="link-box">
          <div class="image-box">
            <table class="info-box">
              <tr>
                <td>카카오톡 ID</td>
                <td>@SKIN.Side project</td>
              </tr>
              <tr>
                <td>카카오톡 운영시간</td>
                <td>09:00-18:00 <span class="lunch-time">(점심시간 12:00-13:00)</span></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'b-footer',
    methods: {
      facebook() {
        const openNewWindow = window.open('about:blank')
        openNewWindow.location.href = 'https://www.facebook.com/SKIN.Side project/'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .b-footer {
    background-color: rgb(246, 246, 246);
    color: #8d8d8d;
    margin: 60px 0 0 0;
    position: relative;
    height: 378px;
    left: 0;
    right: 0;
    bottom: 0;
    border-spacing: 0;
    font-size: 11px;
    font-weight: 400;
    line-height: 1.89;
    letter-spacing: 0.4px;
    display: flex;
    align-items: flex-start;

    .box {
      /*border: 1px solid red;*/
      margin: 20px auto;
      width: 1024px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .info-box {
        width: 329px;
        margin: 0 0 0 20px;
        table > tr {
          height: 30px;
          td:nth-child(1) {
            padding: 0 5px 0 0;
            line-height: 20px;
            font-family: SpoqaHanSans;
            font-size: 11px;
            font-weight: 300;
            letter-spacing: 0.3px;
            text-align: right;
            color: #595353;
            width: 90px;

            &:nth-child(2) {
              font-size: 11px;
              letter-spacing: 0.3px;
              text-align: left;
              color: #6d6969;
            }
          }
        }
      }
      .sns-box {
        width: 282px;
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          li:nth-child(1) {
            font-size: 11px;
            letter-spacing: 0.3px;

            &:nth-child(2) {
              border: 1px solid green;
              font-family: SpoqaHanSans;
              font-size: 11px;
              font-weight: 300;
              letter-spacing: 0.3px;

            }
          }
        }

        .image-box {
          width: 282px;
          height: 75px;
          margin: 10px 0 0 0;
          background-color: #dedede;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          .kakao {
            width: 138px;
            position: relative;
            height: 30px;
            span {

            }

            img {
              width: 30px;
              height: 31px;
            }
          }

          .facebook {
            width: 120px;

            height: 29px;
            position: relative;
            span {

            }
            img {
              width: 29px;
              height: 29px;
            }
          }
        }

      }
      .contact-box {
        width: 282px;
        margin: 0 20px 0 0;
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .link-box {
          margin: 10px 0 0 0;
          width: 282px;
          height: 75px;
          position: relative;
          background-color: #dedede;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.2px;
          display: flex;
          table.info-box {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 100%;
            height: 50px;
            /*overflow: hidden;*/
            tr {
              .lunch-time {
                font-size: 9px;
              }
              td:nth-child(1) {
                text-align: right;
                padding: 0 5px 0 0;
              }
            }
          }
        }
      }
    }
  }

</style>
