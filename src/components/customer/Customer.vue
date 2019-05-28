<template>
  <div class="customer">
    <div class="customer-main-title">
      <img src="../../assets/images/customer/customer-main-title.png">
    </div>
    <div class="customer-main-sections">
      <router-link :to="{path: 'faq'}" class="button faq-button"></router-link>
      <a class="button qna-button"></a>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'customer'
  }
</script>

<style lang="scss" scoped>
  .customer {
    text-align: center;
  }

  .customer-main-title {
    margin: 70px 0 70px 0;
  }

  .customer-main-sections {

    .button {
      width: 420px;
      height: 545px;
      display: inline-block;

      &.faq-button {
        background: url("../../assets/images/customer/faq-button.png") no-repeat;

        &:hover {
          background: url("../../assets/images/customer/faq-button-hover.png") no-repeat;
        }
      }

      &.qna-button {
        margin: 0 0 0 90px;
        background: url("../../assets/images/customer/qna-button.png") no-repeat;

        &:hover {
          background: url("../../assets/images/customer/qna-button-hover.png") no-repeat;
        }
      }
    }
  }
</style>
