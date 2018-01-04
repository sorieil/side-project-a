<template>
  <div class="menu-under-bar">
    <ul>
      <li v-for="(item, index) in menus" :key="index" @click="setMenu(item.name)" :id="item.name">
        {{item.title}}
      </li>
    </ul>
    <div :id="randomId" class="under-bar"></div>
  </div>

</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'menu-under-bar',
    props: {
      menus: {
        default: () => ({
          0: {
            title: 'Default1',
            name: 'main',
            sort: 0
          },
          1: {
            title: 'Default2',
            name: 'main1',
            sort: 0
          },
          2: {
            title: 'Default3',
            name: 'main2',
            sort: 0
          },
          3: {
            title: 'Default4',
            name: 'main3',
            sort: 0
          },
          4: {
            title: 'Default5',
            name: 'main4',
            sort: 0
          }

        }),
        type: Array | Object
      }
    },
    data() {
      return {
        currentMenu: '',
        randomId: new Date().getTime().toString()
      }
    },
    mounted() {
      this.setMenu(this.$route.name)
    },
    methods: {
      setMenu(id) {
        const target = $('#' + id)[0]
        if (typeof target !== 'undefined') {
          const offsetLeft = target.offsetLeft
          const underWidth = target.offsetWidth
          console.log(offsetLeft, underWidth)
          $('#' + this.randomId).animate({left: offsetLeft, width: underWidth}, 'fast')
          // this.$router.push({name: id})
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-under-bar {
    height: 26px;
    border: green 1px dotted;
    position: relative;

  ul {
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 10;

  li {
    display: inline-block;
    margin: 0 10px 0 0;
    padding: 0 5px;
    cursor: pointer;
  }

  }

  .under-bar {
    display: block;
    width: 0;
    height: 14px;
    background-color: #fed6cf;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
  }

  }

</style>
