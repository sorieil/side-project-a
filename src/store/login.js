import {defaultAuth} from '@/library/firebase'
import * as types from './mutation-types'

// 공용으로 사용할 저장소
const state = {
  // login: {}
}

// 저장소의 계산된 속성으로 생각됩니다.
const getters = {}

// 컨트롤러 같은 역할
const actions = {
  async [types.CHECK_LOGIN]({dispatch}) {
    let userCheck = () => {
      // // var value = ''
      //
      // return {
      //   get: (e) => {
      //     value = e
      //   }
      // }
      return false
    }
    await defaultAuth.onAuthStateChanged((user) => {
      if (user) {
        // console.log('firebase state', user)
        user.getIdToken().then((token) => {
          dispatch(types.GET_USERINFO, {uid: user.uid, token: token})
          userCheck = true
        })
      } else {
        userCheck = false
      }
    })

    console.log('userCheck: ', userCheck)

    return userCheck
  },
  async [types.LOGIN_OUT]({dispatch}) {
    return defaultAuth.signOut().then(() => {
      return dispatch(types.CLEAR_USER).then(() => {
        return true
      }).catch(() => {
        alert('로그 아웃중 문제 발생')
        return false
      })
    }).catch(() => {
      alert('로그 아웃중 문제 발생')
      return false
    })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
