import Vue from 'vue'
import Vuex from 'vuex'
import * as c from './constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false
  },
  mutations: {
    [c.SET_ADMIN] (state, payload) {
      state.isAdmin = payload
    }
  },
  actions: {
    setBecomeAdmin({ commit, dispatch }, data) {
      commit(c.SET_ADMIN, data)
    }
  }
})
