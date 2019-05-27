import axios from 'axios'
export const state = ()=> ({
  menu: [],
  all: {}
})

export const mutations = {
  setMenu (state,val){
    state.menu = val
  },
  setShow (state,val){
    state.all = val
  }
}

export const actions = {
  setMenu ({commit},menu){
    commit('setMenu',menu)
  },
  setShow ({commit},all){
    commit('setShow',all)
  }
}
