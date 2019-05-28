import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from './mutation-types'
// import Landing from './landing'
// import ModalComponent from './modalComponent'
// import CommonCode from './commonCode'
// import ModalActive from './modalAlert'
import userLogin from './login'
import Global from './global'
import Signup from './signup'
import User from './user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: debug,
  modules: {
    // Landing,
    // ModalComponent,
    // CommonCode,
    // ModalActive,
    userLogin,
    Global,
    Signup,
    User
  }
  // plugins: debug ? [createLogger()] : [],
})

export default store
