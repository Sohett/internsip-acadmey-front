import axios from 'axios'
import { isLoggedIn, getIdToken } from './auth'
const SERVER_URL = 'https://api.seraphin.be'

// eslint-disable-next-line
function handleError (response) {
  if (response.statusText !== 'OK') throw new Error(response.statusText)
  return response
}

class API {
  static init () {
    this.init = {
      cache: 'default',
      headers: this.getHeaders()
    }
  }

  static getHeaders () {
    // return []
    if (isLoggedIn()) {
      return {
        'Authorization': `Bearer ${getIdToken()}`
      }
    } else {
      return []
    }
  }

  static get (endPoint, params = {}) {
    const url = SERVER_URL + endPoint
    const init = { ...this.init, method: 'GET', ...params }
    return axios.get(url, init)
  }

  static post (endPoint, data = {}, timeout = 5000) {
    const headers = { ...this.init.headers, 'Content-type': 'application/json' }
    const url = SERVER_URL + endPoint
    const init = { url, method: 'post', data, headers, timeout }
    return axios(init)
  }
}

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  // This error code is returned by axios if a timeout occurred.
  if (error.code === 'ECONNABORTED') {
    console.error(`A timeout happenned on following url: ${error.config.url}`)
  } else {
    throw error
  }
})

API.init()

export default API
