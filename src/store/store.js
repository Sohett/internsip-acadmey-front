import Vue from 'vue'
import Vuex from 'vuex'
import * as c from './constants'
import { userService, learningTrajectoriesService } from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false,
    learningTrajectories: null,
    currentUserEmail: null
  },
  mutations: {
    [c.SET_ADMIN] (state, payload) {
      state.isAdmin = payload
    },
    [c.SET_LEARNING_TRAJECTORIES] (state, payload) {
      state.learningTrajectories = payload
    },
    [c.SET_CURRENT_USER_EMAIL] (state, payload) {
      state.currentUserEmail = payload.email
    }
  },
  actions: {
    setBecomeAdmin({ commit, dispatch }, data) {
      commit(c.SET_ADMIN, data)
    },
    setCurrentUserEmail ({commit}) {
      userService.index()
        .then(res => commit(c.SET_CURRENT_USER_EMAIL, res))
    },
    getLearningTrajectories ({commit}) {
      learningTrajectoriesService.index()
        // .then(res => commit(c.SET_LEARNING_TRAJECTORIES, res))
        .then(res => console.log(res))
    }
  }
})
