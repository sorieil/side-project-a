import * as types from './mutation-types'
import {defaultStore} from '@/library/firebase'

const state = {
  user: {
    name: '',
    uid: '',
    status: false,
    noticeCount: 0,
    photoUrl: '',
    token: '',
    provider: ''
  }
}

const getters = {
  userInfo: state => state.user
}

const actions = {
  async [types.UPDATE_USERINFO]({dispatch, commit}, payload) {
    return defaultStore.collection('users').doc(payload.uid).update(payload.data).then(() => {
      return true
      // commit(types.GET_USERINFO, {user: payload.user, uid: payload.uid})
    }).catch((error) => {
      console.error('Error adding document: ', error)
      return false
    })
  },
  /**
   * Reload user information
   * @param commit
   * @param payload
   * @returns {Promise<void>}
   */
  async [types.GET_USERINFO]({commit}, payload) {
    // 유저 정보를 가져올때 upcomming event/ no read message /
    return defaultStore.collection('users').doc(payload.uid).get().then((snapshot) => {
      if (snapshot.exists) {
        commit(types.GET_USERINFO, {user: snapshot.data(), uid: payload.uid, token: payload.token})
        return true
      } else {
        return false
      }
    }).catch((error) => {
      console.error('Error adding document: ', error)
      return false
    })
  },
  async [types.UPDATE_USERINFO_TOKEN]({commit}, payload) {

  },
  /**
   * 다른 액션에서 필요해서 만듬
   * 로그아웃 할때
   * @param commit
   * @returns {Promise<void>}
   */
  async [types.CLEAR_USER]({commit}) {
    commit(types.CLEAR_USER)
  }
}

const mutations = {
  [types.CLEAR_USER](state) {
    state.user.name = ''
    state.user.uid = ''
    state.user.status = false
    state.user.photoUrl = ''
    state.user.token = ''
    state.user.provider = ''
  },
  [types.GET_USERINFO](state, result) {
    // console.log('GET_USERINFO', result)
    state.user.name = result.user.name
    state.user.uid = result.uid
    state.user.status = true
    state.user.photoUrl = result.user.photoUrl
    state.user.token = result.token
    state.user.provider = result.user.provider
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
