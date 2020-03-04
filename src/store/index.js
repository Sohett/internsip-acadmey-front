import Vue from 'vue'
import Vuex from 'vuex'

import initializer from './initializer'
import schools from './schools'
import learningTrajectories from './learningTrajectories'
import badges from './badges'
import missions from './missions'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    modules: {
      initializer,
      schools,
      learningTrajectories,
      badges,
      missions
    }
  })
}
