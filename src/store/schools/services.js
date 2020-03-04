import API from '@/services/api'

export const schoolService = {
  index (payload) {
    const query = `?organization_uuid=${payload}`
    return API.get(`/schools${query}`)
  }
}
