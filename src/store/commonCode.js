import * as types from './mutation-types'
// import { defaultStore } from '@/library/firebase'

// 공용으로 사용할 저장소
const state = {
  commonCode: {
    speciality: {},
    city: {}
  }
}

// 데이터 읽기만 수행
const getters = {
  speciality: state => state.commonCode.speciality,
  city: state => state.commonCode.city
}

// 테이터 가져오는 역할
const actions = {
  async [types.GET_COMMONCODE_SPECIALITY]({commit}) {
    commit('resetSpeciality')
  },
  async [types.GET_COMMONCODE_CITY]({commit}) {
    commit('resetCity')
  }
}
// 데이터 변형에 대한 부분
const mutations = {
  [types.GET_COMMONCODE_SPECIALITY](state, result) {
    state.commonCode.speciality[result.id] = {id: result.id, title: result.title.toUpperCase()}
  },
  [types.GET_COMMONCODE_CITY](state, result) {
    state.commonCode.city[result.id] = {id: result.id, title: result.title.toUpperCase()}
  },
  resetSpeciality(state) {
    state.commonCode.speciality = {}
  },
  resetCity(state) {
    state.commonCode.city = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
