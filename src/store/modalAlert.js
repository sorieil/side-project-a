import * as types from './mutation-types'

const state = {
  modalAlert: {
    active: false,
    text: ''
  }
}

const getters = {
  modalAlertActive: state => state.modalAlert.active,
  modalAlertText: state => state.modalAlert.text
}

const actions = {
  [types.SET_MODAL_ALERT]({commit}, payload) {
    commit(types.SET_MODAL_ALERT, payload)
  }
}

const mutations = {
  [types.SET_MODAL_ALERT](state, result) {
    // console.log('modalAlert:', result)
    state.modalAlert.active = result.active
    state.modalAlert.text = result.text
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
