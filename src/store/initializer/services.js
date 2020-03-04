import API from '@/services/api'

export const organizationService = {
  show (payload) {
    return API.get(`/organizations/${payload}`)
  }
}

export const userService = {
  show () {
    return API.get('/user')
  }
}
