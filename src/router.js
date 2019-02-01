import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import LearningTrajectories from './views/LearningTrajectories.vue'
import Callback from '@/components/Callback.vue'

import { requireAuth } from '@/services/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: requireAuth,
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/learning-trajectory/:id',
      name: 'learningTrajectory',
      beforeEnter: requireAuth,
      component: LearningTrajectories
    },
    {
      path: '/admin',
      name: 'admin',
      beforeEnter: requireAuth,
      component: Admin
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
  ]
})
