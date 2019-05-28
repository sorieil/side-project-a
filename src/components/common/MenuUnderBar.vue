<template>
  <div class="menu-under-bar">
    <div class="item" v-for="(item, index) in menu" :style="{width: item.width}" :key="index"
         @click.stop="setMenu(item.name)" :id="item.name">
      <div class="title">{{item.title}}</div>
    </div>
    <div id="underBar" class="under-bar"></div>
  </div>

</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'menu-under-bar',
    props: {
      menu: {
        default: () => ({
          0: {
            title: 'Default1',
            name: 'main',
            sort: 0,
            width: '100px'
          },
          1: {
            title: 'Default2',
            name: 'main1',
            sort: 0,
            width: '100px'
          },
          2: {
            title: 'Default3',
            name: 'main2',
            sort: 0,
            width: '100px'
          },
          3: {
            title: 'Default4',
            name: 'main3',
            sort: 0,
            width: '100px'
          },
          4: {
            title: 'Default5',
            name: 'main4',
            sort: 0,
            width: '100px'
          }

        }),
        type: Array | Object
      }
    },
    data() {
      return {
        currentMenu: ''
      }
    },
    mounted() {
      // console.log('Menu under bar:', this.$route.path)
      this.setMenu(this.$route.path.split('/')[1])
    },
    watch: {
      currentPath: function() {
        console.log('updated')
      }
    },
    updated() {
      console.log('updated', this.currentPath())
    },
    methods: {
      setMenu(id) {
        if (id.length > 2) {
          const target = $('#' + id)[0]
          if (typeof target !== 'undefined') {
            const plusWidth = (target.offsetWidth / 4)
            const offsetLeft = Math.round(target.offsetLeft - 3)
            const underWidth = (target.offsetWidth + plusWidth)
            // console.log(offsetLeft, underWidth, underWidth / 4)
            Object.keys(this.menu).map((index, key) => {
              // console.log(this.menu[key].name)
              $('#' + this.menu[key].name).find('.title').removeClass('active')
            })
            $('#underBar').animate({left: offsetLeft, width: underWidth}, 200)
            $('#' + id).find('.title').addClass('active')
            this.$router.push({path: '/' + id})
          }
        }
      }
    },
    currentPath() {
      return this.$route.path
    }
  }
</script>

<style lang="scss" scoped>
  .menu-under-bar {
    position: relative;
    height: 30px;
    .item {
      height: inherit;
      position: relative;
      display: inline;
      float: left;
      margin: 0 10px 0 0;
      padding: 0;
      cursor: pointer;
      z-index: 10;
      font-size: 14px;
      font-weight: 400;
      color: #6c6c6c;
      letter-spacing: 1.4px;
      text-align: center;

      .title {
        position: absolute;
        min-width: 120%;
        transition: all .5s ease;
      }
      .active {
        letter-spacing: 1.6px;
        position: absolute;
        transition: all .5s ease;
        transform: translateY(-10px);
        font-size: 16px;
        font-weight: 600;
      }

      &:nth-child(1) {
        margin-left: -10px;
      }
    }

    .under-bar {
      display: block;
      width: 0;
      height: 5px;
      background-color: #fed6cf;
      position: absolute;
      bottom: 0;
      z-index: 0;
    }

  }

</style>
