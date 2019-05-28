/* eslint-disable no-undef */
import * as types from './mutation-types'
// eslint-disable-next-line no-undef
// 공용으로 사용할 저장소
const state = {
  global: {
    dropdownModeMenu: false,
    dropdownModeBox: false,
    dropdownMode: false
  },
  menu: {
    currentPath: ''
  }
}

// 데이터 읽기만 수행
const getters = {
  globalDropdownModeMenu: state => state.global.dropdownModeMenu,
  globalDropdownModeBox: state => state.global.dropdownModeBox,
  currentPath: state => state.menu.currentPath
}

// 컨트롤러 같은 역할
const actions = {
  [types.SET_GLOBAL_DROPDOWNMODEMENU]({commit}, payload) {
    commit(types.SET_GLOBAL_DROPDOWNMODEMENU, payload)
  },
  [types.SET_GLOBAL_DROPDOWNMODEBOX]({commit}, payload) {
    commit(types.SET_GLOBAL_DROPDOWNMODEBOX, payload)
  },
  [types.SET_GLOBAL_DROPDOWNMODE]({commit}, payload) {
    const clearDropdownBox = () => {
      console.log('dropdown mode clear')
      const urbanDropdownElements = $('.dropdown-box')
      urbanDropdownElements.parents().removeClass('active') // hover 된 배경화면 삭제
      urbanDropdownElements.map((k, v) => {
        if (urbanDropdownElements[k].classList.length > 1) {
          urbanDropdownElements[k].className = urbanDropdownElements[k].classList[0]
        }
      })
    }

    switch (payload) {
      case 'on':
        console.log('dropdown mode on')
        $(window).bind('click', clearDropdownBox)
        // window.document.addEventListener('click', clearDropdownBox)
        break
      case 'off':
        console.log('dropdown mode off')
        $(window).off()
        break
      case 'clear':
        console.log('dropdown mode clear')
        clearDropdownBox()
        break
      default:
        console.log('default')
    }
  },
  [types.SET_CURRENTPATH]({commit}, payload) {
    $('.menu-under-bar').find('.title').removeClass('active')
    $('#underBar').animate({left: 0, width: 0}, 'fast')
    // $('#' + id).find('.title').addClass('active')
    commit(types.SET_CURRENTPATH, payload)
  }
}
// 데이터 변형에 대한 부분
const mutations = {
  [types.SET_GLOBAL_DROPDOWNMODEMENU](state, result) {
    console.log(result)
    state.global.dropdownModeMenu = result.active
  },
  [types.SET_GLOBAL_DROPDOWNMODEBOX](state, result) {
    state.global.dropdownModeBox = result.active
  },
  [types.SET_CURRENTPATH](state, result) {
    state.menu.currentPath = result
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
