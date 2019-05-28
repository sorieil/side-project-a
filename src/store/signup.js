import * as types from './mutation-types'
import {defaultStore} from '@/library/firebase'

const state = {
  signup: {}
}

const getters = {}

// About api code
const actions = {
  async [types.SET_SIGNUP]({commit}, payload) {
    console.log(payload)
    await defaultStore.collection('users').doc(payload.uid).set(payload.data).then((docRef) => {
      console.log('Document written with ID: ', docRef)
    }).catch((error) => {
      console.error('Error adding document: ', error)
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
