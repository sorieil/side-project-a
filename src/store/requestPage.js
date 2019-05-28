// import Landing from '@/api/Landing'
import * as types from './mutation-types'

const state = {
  requestOrderInfo: {
    whatFor: '',
    city: '',
    time: '',
    date: '',
    location: '',
    photographerID: ''
  }
}

const getters = {
  RequestInfo: state => state.requestOrderInfo
}

const actions = {
  getRequestInfo({commit}, payload) {
    commit(types.SET_REQUEST_USER_SELECTED, payload)
  }
}

const mutations = {
  [types.SET_REQUEST_USER_SELECTED](state, result) {
    state.requestOrderInfo = result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
