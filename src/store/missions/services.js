import API from '@/services/api'

export const missionsService = {
  index (payload) {
    const query = `?badge_uuid=${payload}`
    return API.get(`/missions/${query}`)
  }
}
