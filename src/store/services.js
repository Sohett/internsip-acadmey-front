import API from '@/services/api'

export const learningTrajectoriesService = {
  index (payload) {
    const query = `?school_uuid=${payload}`
    return API.get(`/learning-trajectories${query}`)
  },
  create (data) {
    return API.post('/wins', data)
  },
  targets: {
    index () {
      return API.get('/wins/targets')
    }
  }
}

export const userService = {
  show () {
    return API.get('/user')
  }
}

export const schoolService = {
  index (payload) {
    const query = `?organization_uuid=${payload}`
    return API.get(`/schools${query}`)
  }
}

export const organizationService = {
  show (payload) {
    return API.get(`/organizations/${payload}`)
  }
}
