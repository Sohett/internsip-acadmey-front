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
