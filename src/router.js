import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import LearningTrajectories from './views/LearningTrajectories.vue'

import { requireAuth } from '@/services/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/learning-trajectories',
      name: 'learningTrajectories',
      beforeEnter: requireAuth,
      component: LearningTrajectories
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
