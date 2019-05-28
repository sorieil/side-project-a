<template>
  <div class="dropdown-box-gender">
    <div class="box">

      <div class="title" aria-readonly="true">{{tempTitle}}</div>
      <input class="input-box" type="text" :required="required" v-model="tempIndex"/>
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
    name: 'dropdown-box-gender',
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
        this.tempTitle = this.data[key].title
        this.tempIndex = key
        this.$emit('model', key)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .dropdown-box-gender {
    position: relative;
    width: 160px;
    background-color: rgba(244, 242, 242, 0.55);
    .box {
      &:hover {
        background-color: rgb(128, 128, 128);
        color: #CCC;
      }
      position: relative;
      height: 45.8px;
      width: inherit;
      background-image: url("../../assets/triangle-down-arrow-icon.png");
      background-position-y: 17px;
      background-position-x: 120px;
      background-repeat: no-repeat;
      background-color: transparent;

      .title {
        /*border: 1px solid red;*/
        font-weight: 300;
        text-align: left;
        line-height: 48px;
        padding: 0 0 0 20px;
      }

      .over-button-box {
        /*border: 1px solid blue;*/
        cursor: pointer;
        position: absolute;
        top: 0;
        width: inherit;
        height: inherit;
      }

      .dropdown-box {
        position: absolute;
        left: -1px;
        background-color: rgba(255, 255, 255, 1);
        width: inherit;
        z-index: 9999;
        color: #000;
        opacity: 0;
        visibility: hidden;
        padding: 0;
        border: 1px solid #dbdbdb;

        -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
        -webkit-transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-in-out;

        -moz-transition-property: width height background-color font-size left top transform -moz-transform color;
        -moz-transition-duration: 0.5s;
        -moz-transition-timing-function: ease-in-out;

        -ms-transition-property: width height background-color font-size left top transform -ms-transform color;
        -ms-transition-duration: 0.5s;
        -ms-transition-timing-function: ease-in-out;

        -o-transition-property: width height background-color font-size left top transform -o-transform color;
        -o-transition-duration: 0.5s;
        -o-transition-timing-function: ease-in-out;

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
          background-color: #1f33f7;
          -webkit-transition-property: background-color transform -webkit-transform color;
          -webkit-transition-duration: 0.5s;
          -webkit-transition-timing-function: ease-in-out;

          -moz-transition-property: background-color transform -moz-transform color;
          -moz-transition-duration: 0.5s;
          -moz-transition-timing-function: ease-in-out;

          -ms-transition-property: background-color transform -ms-transform color;
          -ms-transition-duration: 0.5s;
          -ms-transition-timing-function: ease-in-out;

          -o-transition-property: background-color transform -o-transform color;
          -o-transition-duration: 0.5s;
          -o-transition-timing-function: ease-in-out;

          transition-property: background-color transform transform color;
          transition-duration: 0.5s;
          transition-timing-function: ease-in-out;
        }

        .active {
          color: #ffffff;
          background-color: #1f33f7;
        }
      }

      //noinspection ALL
      .active {
        opacity: 1;
        visibility: visible;

        -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
        -webkit-transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-in-out;

        -moz-transition-property: width height background-color font-size left top transform -moz-transform color;
        -moz-transition-duration: 0.5s;
        -moz-transition-timing-function: ease-in-out;

        -ms-transition-property: width height background-color font-size left top transform -ms-transform color;
        -ms-transition-duration: 0.5s;
        -ms-transition-timing-function: ease-in-out;

        -o-transition-property: width height background-color font-size left top transform -o-transform color;
        -o-transition-duration: 0.5s;
        -o-transition-timing-function: ease-in-out;

        transition-property: width height background-color font-size left top transform transform color;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
      }

      .input-box {
        position: absolute;
        z-index: -1;
      }
    }

    .active {
      /*background-color: rgb(245, 245, 245);*/
    }
  }
</style>
