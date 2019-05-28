import Vue from 'vue'
import Router from 'vue-router'
import Menu from './menu'
import Store from '@/store'
import * as types from '@/store/mutation-types'
// import {defaultAuth} from "@/library/firebase";

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    ...generateRoutesFromMenu(Menu)
  ],
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition)
  }
})

function generateRoutesFromMenu(menu = [], routes = []) {
  // console.log(menu)
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    // console.log('item: ', item)
    if (item.path) {
      routes.push(item)
    }
    if (item.children) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  if (to.path === '/' || to.path === '/login' || to.path === '/signup') {
    Store.dispatch(types.SET_CURRENTPATH, to.path)
  }

  Store.dispatch(types.CHECK_LOGIN).then((result) => {
    console.log('login check:', to.meta.login)
    if (to.meta.login) {
      console.log('result:', result)
      result.then((check) => {
        if (!check) {
          alert('로그인 해주세요.')
          next({path: 'login'})
        }
      })
    }

    // 만약에 로그인이 되어 있으면, 회원가입 및 로그인 페이지 접근 불가
    if (to.path === '/login' || to.path === '/signup') {
      console.log('userinfo:', Store.getters.userInfo)
      if (Store.getters.userInfo.status) {
        alert('로그인 중이라서 접근 불가')
        next({path: '/'})
      }
    }

    // 무조건 로그인 갱신 라우터가 이동 될때마다.
    // console.log(to.path)
    switch (to.path) {
      case '/signup-type':
        console.log(from.path, to.meta.reffer)
        if (from.path !== to.meta.reffer) {
          alert('정상적인 방법으로 접근해주세요.')
          next({path: 'signup'})
        }
        break
      case '/signup-input':
        if (from.path !== to.meta.reffer) {
          alert('정상적인 방법으로 접근해주세요.')
          next({path: 'signup'})
        }
        break
      case '/signup-completed':
        if (from.path !== to.meta.reffer) {
          alert('정상적인 방법으로 접근해주세요.')
          next({path: 'signup'})
        }
        break
      default:
        next()
    }
    next()
  })
})

router.afterEach((to, from) => {
  // store.commit('setLoading', false)
})

export default router
