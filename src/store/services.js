import API from '@/services/api'

export const learningTrajectoriesService = {
  index () {
    return API.get('/learning-trajectories')
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
  index () {
    return API.get('/me')
  }
}
