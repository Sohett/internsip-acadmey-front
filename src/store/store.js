import Vue from 'vue'
import Vuex from 'vuex'
import * as c from './constants'
import { userService, learningTrajectoriesService, schoolService, organizationService, badgesService } from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false,
    currentUserEmail: null,
    organizationUuid: null,
    organization: null,
    schools: null,
    learningTrajectories: null,
    badges: null
  },
  getters: {
    getSchools (state) {
      return state.schools;
    },
    getAdmin (state) {
      return state.isAdmin;
    },
    getOrganization (state) {
      return state.organization;
    },
    getLearningTrajectories (state) {
      return state.learningTrajectories;
    },
    getBadges (state) {
      return state.badges
    }
  },
  mutations: {
    [c.SET_ADMIN] (state, payload) {
      state.isAdmin = payload
    },
    [c.SET_LEARNING_TRAJECTORIES] (state, payload) {
      state.learningTrajectories = payload
    },
    [c.SET_CURRENT_USER_EMAIL] (state, payload) {
      state.currentUserEmail = payload.userEmail
    },
    [c.SET_CURRENT_USER_ORGANIZATION] (state, payload) {
      state.organizationUuid = payload.organizationUuid
    },
    [c.SET_SCHOOLS] (state, payload) {
      state.schools = payload
    },
    [c.SET_CURRENT_SCHOOL] (state, payload) {
      state.currentSchool = payload
    },
    [c.SET_ORGANIZATION] (state, payload) {
      state.organization = payload
    },
    [c.SET_BADGES] (state, payload) {
      state.badges = payload
    }
  },
  actions: {
    setBecomeAdmin({ commit }, data) {
      commit(c.SET_ADMIN, data)
    },
    async setCurrentUserData ({commit, dispatch }) {
      const userData = await userService.show();
      commit(c.SET_CURRENT_USER_EMAIL, userData);
      commit(c.SET_CURRENT_USER_ORGANIZATION, userData);
      dispatch('setSchools');
      dispatch('setOrganization');
    },
    async setSchools ({commit, dispatch}) {
      const schools = await schoolService.index(this.state.organizationUuid)
      commit(c.SET_SCHOOLS, schools);
      dispatch('setLearningTrajectories');
    },
    setOrganization ({commit}) {
      organizationService.show(this.state.organizationUuid)
        .then(res => commit(c.SET_ORGANIZATION, res))
    },
    setLearningTrajectories ({commit}) {
      const schoolsUuid = this.state.schools.map(school => school.schoolUuid);
      const learningTrajectories = {};

      schoolsUuid.forEach(uuid => {
        learningTrajectoriesService.index(uuid)
          .then(res => learningTrajectories[uuid] = res)
      });

      setTimeout(()=>{
         commit(c.SET_LEARNING_TRAJECTORIES, learningTrajectories);
      },1000);

    },
    setBadges ({commit}, learningTrajectoryUuid) {
      const badges = {};

      badgesService.index(learningTrajectoryUuid)
        .then(res => badges[learningTrajectoryUuid] = res)

      commit(c.SET_BADGES, badges);
    }
  }
})
