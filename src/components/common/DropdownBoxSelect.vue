<template>
  <div class="dropdown-box-select">
    <div class="box">
      <input class="input-box" type="text" :required="required" v-model="tempIndex"/>
      <div class="title" aria-readonly="true"><span>{{tempTitle}}</span></div>
      <div class="over-button-box" @click.stop="show"></div>
      <ul class="dropdown-box">
        <li v-for="(item, key) in tempData" v-bind:key="key" @click="selectMenu(key)"
            :class="{'active' : tempIndex === key}">
          {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-undef */
  import * as types from '@/store/mutation-types'

  export default {
    name: 'dropdown-box-select',
    props: {
      title: {
        default: '선택',
        type: String
      },
      index: {
        default: '',
        type: String | Number
      },
      data: {
        default: () => ({
          'hash1234': {
            title: 'No data',
            sort: 0
          }
        }),
        type: [Array, Object]
      },
      required: {
        default: false,
        type: Boolean
      },
      staticTitle: {
        default: '',
        type: String
      }
    },
    data() {
      return {
        tempBoxTitle: '',
        tempTitle: '',
        tempIndex: ''
      }
    },
    created() {
      this.tempIndex = this.index
      if (this.index !== '') {
        this.tempTitle = this.data[this.index].title
      } else {
        this.tempTitle = this.title
      }
    },
    mounted() {
    },
    watch: {
      data: () => {
        if (this.index !== '') {
          this.selectMenu(this.index)
        }
      }
    },
    computed: {
      tempData() {
        return this.data
      }
    },
    methods: {
      /**
       * Click the button to display the corresponding child elements.
       * @param event
       */
      show(event) {
        this.$store.dispatch(types.SET_GLOBAL_DROPDOWNMODE, 'clear')
        const el = $(event)[0].target
        const elChild = el.nextElementSibling // Binding child element.
        // console.log(el.parentElement)
        el.parentElement.className += ' active'
        if (elChild.className === 'dropdown-box') {
          elChild.className += ' active'
        } else {
          elChild.className = 'dropdown-box'
        }
      },
      selectMenu(key) {
        this.tempTitle = this.staticTitle + ' ' + this.data[key].title
        this.tempIndex = key
        this.$emit('model', key)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .dropdown-box-select {
    position: relative;
    /*background-color: rgba(244, 242, 242, 1);*/
    font-size: 12px;
    .box {
      position: relative;
      height: inherit;
      width: inherit;
      background-image: url("../../assets/triangle-down-arrow-icon.png");
      background-size: 16px 11px;
      background-position-y: 55%;
      background-position-x: 90%;
      background-repeat: no-repeat;
      background-color: transparent;

      &:hover {
        /*background-color: rgba(79, 79, 79, 0.5);*/
        color: #000;
      }

      .title {
        /*border: 1px solid red;*/
        font-weight: 400;
        width: 100%;
        height: inherit;
        position: relative;
        span {
          margin: auto 20% auto 10%;
          height: 40%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          position: absolute;
          /*border: 1px solid red;*/
        }
      }

      .over-button-box {
        /*border: 1px solid blue;*/
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20;
      }

      .dropdown-box {
        position: absolute;
        margin: auto;
        background-color: rgb(228, 228, 228);
        width: inherit;
        z-index: 9999;
        color: #000;
        opacity: 0;
        visibility: hidden;
        padding: 0;
        /*border: 1px solid #dbdbdb;*/

        transition-property: width height background-color font-size left top transform transform color;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;

        li {
          cursor: pointer;
          line-height: 30px;
          padding: 0 0 0 20px;
        }

        li:hover {
          color: #ffffff;
          background-color: #4f4f4f;

          transition-property: background-color transform transform color;
          transition-duration: 0.5s;
          transition-timing-function: ease-in-out;
        }

        .active {
          color: #ffffff;
          background-color: #4f4f4f;
        }
      }

      //noinspection ALL
      .active {
        opacity: 1;
        visibility: visible;

        transition-property: width height background-color font-size left top transform transform color;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
      }

      .input-box {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }
    }

    .active {
      /*background-color: rgb(245, 245, 245);*/
    }
  }
</style>
