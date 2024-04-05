import axios from 'axios'

// 创建axios实例
export const service = axios.create({
  baseURL: `http://120.55.112.13:9000/`,
  timeout: 20000, // 超时时间
  withCredentials: false // 是否允许带cookie
})

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers['Access-Control-Allow-Origin'] = '*'
    const authString = window.localStorage.getItem('auth')
    let token = ''
    if (authString) {
      const auth = JSON.parse(authString)
      token = auth.token
      // console.log(token)
    }
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 添加响应拦截器
service.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default service
