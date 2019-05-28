<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  /* eslint-disable-next-line */
  import * as types from '@/store/mutation-types'

  export default {
    name: 'app',
    mounted() {
      this.$store.dispatch(types.SET_GLOBAL_DROPDOWNMODE, 'on')
      try {
// eslint-disable-next-line
        Kakao.init(process.env.KakaoKey)
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="postcss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'SpoqaHanSans', sans-serif;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #app {
    background: url("./assets/main-bg-img.png") repeat;
    width: 100%;
    min-height: 100%;
    display: inline-block;
    float: left;
    /*border: 1px solid red;*/
    margin: 0;
    padding: 0;
  }
</style>
