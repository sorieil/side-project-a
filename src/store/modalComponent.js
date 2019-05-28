import * as types from './mutation-types'

const state = {
  modalComponent: {
    component: '',
    active: false,
    type: '',
    propData: {}
  }
}

const getters = {
  modalComponentShow: state => state.modalComponent.active,
  modalComponent: state => state.modalComponent.component,
  modalComponentType: state => state.modalComponent.type,
  modalComponentPropData: state => state.modalComponent.propData
}

const actions = {
  async [types.SET_MODAL_COMPONENT]({commit}, payload) {
    commit(types.SET_MODAL_COMPONENT, payload)
  }
}

const mutations = {
  [types.SET_MODAL_COMPONENT](state, result) {
    state.modalComponent.component = result.component
    state.modalComponent.active = result.active
    state.modalComponent.type = result.type
    state.modalComponent.propData = result.propData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
