import * as types from './mutation-types'

const state = {
  data: {
    title: ''
  }
}

const getters = {
  landingInfo: state => state.data
}

const actions = {
  landingInfo({commit}) {

  }
}

const mutations = {
  [types.GET_LANDING_INFO](state, {result}) {
    state.data = result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
