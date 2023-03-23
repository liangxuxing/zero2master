import axios from 'axios'
import Cookie from 'js-cookie'
const instance = axios.create({
  baseURL: 'http://120.24.64.5:8088/mall-admin',
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    let token = Cookie.get('token')
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = token
    }
    console.log('toekn', token)

    console.log('config', config)

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (config) => {
    return config.data
  },
  (err) => {
    return Promise.reject(err)
  }
)
export default instance
