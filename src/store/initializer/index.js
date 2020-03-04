import * as c from './constants'
import { userService, organizationService, } from './services'
import { schoolService } from '../schools/services'
import { learningTrajectoriesService } from '../learningTrajectories/services'
import { badgesService } from '../badges/services'
import { missionsService } from '../missions/services'

export default {
  namespaced: true,
  state: {
    currentUserEmail: null,
    currentUserOrganization: null,
    schools: null,
    learningTrajectories: null,
    badges: null,
    missions: null
  },
  getters: {
    getOrganization (state) {
      return state.currentUserOrganization;
    }
  },
  mutations: {
    [c.SET_CURRENT_USER_EMAIL] (state, payload) {
      state.currentUserEmail = payload
    },
    [c.SET_CURRENT_USER_ORGANIZATION] (state, payload) {
      state.currentUserOrganization= payload
    },
    [c.SET_SCHOOLS] (state, payload) {
      state.schools = payload
    },
    [c.SET_LEARNING_TRAJECTORIES] (state, payload) {
      state.learningTrajectories = payload
    },
    [c.SET_BADGES] (state, payload) {
      state.badges = payload
    },
    [c.SET_MISSIONS] (state, payload) {
      state.missions = payload
    }
  },
  actions: {
    async initializeApp({commit, dispatch}) {

      const userData = await userService.show();
      commit(c.SET_CURRENT_USER_EMAIL, userData.userEmail);

      const organization = await organizationService.show(userData.organizationUuid)
      commit(c.SET_CURRENT_USER_ORGANIZATION, organization);

      const schools = await schoolService.index(userData.organizationUuid);
      commit(c.SET_SCHOOLS, schools);

      const learningTrajectories = await dispatch('fetchLearningTrajectories', schools.map(school => school.schoolUuid))
      setTimeout(()=>{
         commit(c.SET_LEARNING_TRAJECTORIES, learningTrajectories);
         debugger
      }, 500);

      const badges = await dispatch('fetchBadges', learningTrajectories.map(lt => school.schoolUuid))
      setTimeout(()=>{
         commit(c.SET_BADGES, badges)
      }, 500);

      // const missions = await missionsService.index(badges);
      // commit(c.SET_MISSIONS, missions);
    },
    fetchLearningTrajectories({dispatch}, schoolsUuid) {
      const lts = {};

      schoolsUuid.forEach(uuid => {
        learningTrajectoriesService.index(uuid)
          .then(res => lts[uuid] = res)
      });
      return lts
    },
    fetchBadges({dispatch}, learningTrajectoriesUuid) {
      const badges = {};

      learningTrajectoriesUuid.forEach(uuid => {
        badgesService.index(uuid)
          .then(res => badges[uuid] = res)
      });
      return badges
    }
  }
}
