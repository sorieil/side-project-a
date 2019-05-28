<template>
  <div class="faq">
    <div class="faq-main-title">
      <img src="../../assets/images/customer/qna-main-title.png">
      <button class="qna-kakao-button">카카오톡으로 질문하기</button>
    </div>
    <div class="faq-list">
      <ul>
        <li v-for="(item, index) in faqList" :key="index" class="faq-item" :class="{active: item.active}">
          <div class="info" @click.stop="showFaqItem(index)">
            <span class="category">{{item.category}}</span>
            <h3 class="title">{{item.title}}</h3>
          </div>
          <div class="content" v-html="item.content"></div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'faq',
    data() {
      return {
        faqList: [
          {
            category: '제품',
            title: '방부제가 들어 있지 않아 제품이 변질될까 우려됩니다.',
            content: '저희 Side project A는 체내 농축으로 인한 호르몬의 불균형 등 해로운 요인이 발생할 수 있어 방부제를 넣지 않습니다. <br />' +
            '대신 제품 자체의 보존을 위해 기능성 원료를 사용하여 보존효과를 발휘하고 있습니다.<br />' +
            '보존 효과를 내는 기본적인 구성으로 PH를 조절하여 보존하는 법과 화장품 내의 영양 요소를 조절하여 내는 2가지 형태로 구성하고 있습니다.<br />' +
            '또한, 주문 즉시 제조되어 가장 신선한 상태로 제공되기 때문에 방부제와 보존재를 투입하지 않아도 안전합니다.',
            active: false
          },
          {
            category: '제품',
            title: '에멀전과 로션을 사용하는데 바른 즉시 하얗게 일어나는 증상이 있습니다.',
            content: '질문과 같은 증상이 나타나는 경우는 크게 네 가지 입니다.<br /><br />' +
            '첫째, 피부가 필요로 하는 보습 한도를 초과했기 때문입니다. 이는 조금 더 두드리거나 문질러 주시면 완전히 흡수됩니다. <br />' +
            '다음달 구매 시 솔루션의 수분(보습) 강도를 낮추는 것을 추천해 드립니다.<br /><br />' +
            '둘째, 피부가 흡수할 수 있는 최대 유분치를 초과했기 때문입니다. 조금 더 적은양을 덜어 천천히, 지속적으로 문질러 주면서 흡수 시키시면 됩니다.<br /><br />' +
            '셋째,  배송 중 차가운 환경에 노출되었기 때문입니다. 저희 Side project A는 안정 및 보존, 그리고 항생제를 넣지 않기 때문에<br />' +
            '공기가 차가워지면 원료의 일부가 얼었다가 다시 녹을 수 있습니다. 조금 더 오랜 시간동안 손으로 문질러 주시면 열에 의해 녹아 흡수 됩니다.<br /><br />' +
            '넷째,  피부의 각질 때문일수 있습니다. 몸을 물에 불리면 각질[때]이 나오듯, 많은 보습력으로 인해 피부위에<br />' +
            '떠있던 각질들이 일어나 때처럼 밀리는 경우가 있습니다. 이경우 바르시는 초기에만 그럴 경우가 높으며 지속적으로<br />' +
            '일어날 경우 추가적인 각질제거를 부탁드리겠습니다.',
            active: false
          },
          {
            category: '제품',
            title: '커스터마이징 중 향을 미리 맡아볼 수 있나요?',
            content: '저희 Side project A는 불필요한 화학물을 없앤 無방부제 상품으로 신선한 제품을 전달하기 위해 주문 완료 시점에 바로 제작합니다.<br />' +
            '따라서 미리 시향은 불가능합니다.<br />' +
            '저희가 사용하는 원료는 현재 시중에 판매되고 있는 향수와 동일하니 참고해주세요.<br /><br />' +
            '또한, 저희 제품을 사용한  ‘Side project A 메이트’들의  ‘향 평가’를 전달해드립니다.<br />' +
            '<span style="font-size: 18px; color: \'#494646;\'">( 향은 주관적이며 개인 기호에 따라 달라질 수 있습니다. )</span>' +
            '<img src="' + require('../../assets/images/customer/flower-image-lists.png') + '">',
            active: false
          },
          {
            category: '서비스',
            title: '‘Side project (Side project A)’는 어떤 서비스 인가요?',
            content: 'Side project는 공학자가 직접 설계하여 제작하는 안전한 스킨케어 구독서비스입니다. <br />' +
            '고객님의 피부 유형과 피부 고민, 개인 기호에 따라 커스터마이징이 가능한 세상에 단 하나뿐인 스킨케어로 꼭 필요한 성분만을 담았습니다.<br />' +
            '또한, 이미지 분석과 생활패턴 분석을 통해 고객님의 피부 상태를 분석하여 결과를 제공하고, 솔루션을 추천해드립니다.<br />' +
            '나에게 꼭 필요한 핵심성분만 넣은 특별한 스킨케어로 날마다 건강해지는 내 피부를 경험해보세요~',
            active: false
          },
          {
            category: '서비스',
            title: '일반적으로 판매되는 화장품과 다른 점은 무엇인가요?',
            content: '가장 큰 차이점은 개인별 맞춤 화장품이란 점입니다. 대량으로 유통되는 일반 화장품과 다르게 저희 Side project A는<br />' +
            '고객님의 피부상태에 맞춰 주문 즉시 제조합니다.<br />' +
            '또한, 추출물이 아닌 순물질을 원료로 하고, 피부자극요소인 6대 화학물질과 방부제를 제거하여 꼭 필요한 성분만을 담았습니다.<br />' +
            '이렇게 신선하고 안전한 스킨케어를 28일마다 여러분의 집까지 배송해드려 언제든지 내 피부에 딱 맞는 맞춤 화장품을 사용하실 수 있습니다.',
            active: false
          },
          {
            category: '서비스',
            title: '이미지 분석은 꼭 해야 하나요?',
            content: '이미지 분석은 저희 Side project A의 핵심 서비스 중 하나입니다. 얼굴의 정면과 양측면, 단 3장의 사진으로 고객님의 피부를 분석합니다.<br />분석 결과는 지표화 하여 고객님께 제공되며, 솔루션을 제공해드립니다.<br />' +
            '고객님이 보내주신 사진은 이미지 분석용으로만 사용되며, 개인정보법에 의거하여 안전하게 보관되니 믿고 전송해주세요.',
            active: false
          },
          {
            category: '서비스',
            title: '정기구독 서비스에 대해 알려주세요.',
            content: '저희 Side project A는 크게 ‘한 달 Side project A’와 ‘한 계절 Side project A’를 제공합니다. ‘한 달 Side project A’는 1개월 서비스로, 1회만 배송 받는 체험서비스입니다.<br />' +
            ' ‘한 계절 Side project A’는 3개월 서비스로, 3회를 배송 받는 구독 서비스입니다. <br />' +
            ' ‘한 계절 Side project A’ 이용 시 매달 8%의 금액을 할인 받을 수 있습니다.<br />' +
            '결제는 일시불로 이루어지며, Side project A는 28일 주기로 1개씩 3개월동안 매달 제공됩니다.',
            active: false
          }
        ],
        selectedIndex: -1
      }
    },
    methods: {
      showFaqItem(index) {
        if (this.selectedIndex === index) {
          this.selectedIndex = -1
          this.faqList[index].active = false
        } else {
          for (let i = 0; i < this.faqList.length; i++) {
            this.faqList[i].active = false
          }

          this.faqList[index].active = true
          this.selectedIndex = index
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .faq {
    text-align: center;

    .faq-main-title {
      position: relative;
      width: 1008px;
      margin: 70px auto 70px auto;

      .qna-kakao-button {
        position: absolute;
        top: 165px;
        left: 343px;
        display: block;
        width: 338px;
        height: 66px;
        background-color: #f2c7b5;
        color: #676565;
        font-size: 20px;
        letter-spacing: 0.5px;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }

    .faq-list {
      .faq-item {
        margin: 20px auto 60px auto;
        width: 1478px;
        height: 121px;
        background-color: #f9f8f8;
        color: #2f2f2f;
        text-align: left;
        overflow: hidden;

        transition: .1s;

        .info {

          cursor: pointer;
          padding: 50px 0 50px;

          .category {
            display: inline-block;
            width: 75px;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 0.5px;
            color: #d3a693;
            margin: 0 0 0 90px;
          }

          .title {
            display: inline-block;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 0.5px;
            margin: 0 0 0 46px;
          }
        }

        .content {
          width: 1355px;
          border-top: 1px solid #5f5858;
          margin: 0 60px;
          padding: 30px 0;
          font-size: 23px;
          line-height: 1.75;
          letter-spacing: 0.4px;
        }

        &.active {
          height: auto;
          background-color: #f6e6df;
        }
      }
    }
  }
</style>
