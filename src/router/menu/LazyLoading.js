// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
export default (name, index = false) => () => import(`@/components/${name}${index ? '/MainLayout' : ''}.vue`)
// export default (name, index = false) => () => {
//   console.log('component name: ', name)
//   return import(`@/components/${name}${index ? '/MainLayout' : ''}.vue`)
// }
