import API from '@/services/api'

export const badgesService = {
  index (payload) {
    const query = `?learning_trajectory_uuid=${payload}`
    return API.get(`/badges/${query}`)
  }
}
