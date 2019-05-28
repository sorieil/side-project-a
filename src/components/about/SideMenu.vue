<template>
  <div class="side-menu">
    <ul>
      <li v-for="(item, index) in menu" :key="index">
        <img v-if="menuIndex == index" v-bind:style="{width: item.active.width, height: item.active.height}" class="item" :src="item.active.image"/>
        <img v-else @click.stop="go(index)" v-bind:style="{width: item.normal.width, height: item.normal.height}" class="item" :src="item.normal.image"/>
      </li>
    </ul>
    <img class="background-side-image" src="../../assets/images/about/background-side-right-image@2x.png"/>
  </div>

</template>

<script>
  export default {
    name: 'side-menu',
    data() {
      return {
        menu: {
          'menu1': {
            normal: {
              image: require('../../assets/images/about/about-menu-1@2x.png'),
              width: '224px',
              height: '45px'
            },
            active: {
              image: require('../../assets/images/about/about-menu-1-active@2x.png'),
              width: '224px',
              height: '45px'
            },
            path: '/about/1'
          },
          'menu2': {
            normal: {
              image: require('../../assets/images/about/about-menu-2@2x.png'),
              width: '182px',
              height: '45px'
            },
            active: {
              image: require('../../assets/images/about/about-menu-2-active@2x.png'),
              width: '182px',
              height: '45px'
            },
            path: '/about/2'
          },
          'menu3': {
            normal: {
              image: require('../../assets/images/about/about-menu-3@2x.png'),
              width: '197',
              height: '45px'
            },
            active: {
              image: require('../../assets/images/about/about-menu-3-active@2x.png'),
              width: '197',
              height: '45px'
            },
            path: '/about/3'
          }
        },
        menuIndex: ''
      }
    },
    created() {
      this.menuIndex = 'menu1'
    },
    methods: {
      go(index) {
        this.menuIndex = index
        if (index === 'menu1') {
          index = ''
        }
        console.log(index)
        this.$router.push({path: '/about/' + index})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .side-menu {
    ul {
      li {
        text-align: right;
        padding: 12px 0;
      }
    }
    .item {
      cursor: pointer;
      object-fit: contain;
    }

    .background-side-image {
      visibility: hidden;
      position: absolute;
      margin: auto;
      right: 0;
      bottom: 0;
      z-index: 0;
      width: 104px;
      height: 450px;
    }
  }

</style>
