import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  timeout: 5000
})

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json'
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 将 token 添加到请求头
    config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('CurrentToken')
    if (config.method === 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 是否正在刷新的标记 -- 防止重复发出刷新token接口
let isRefreshing = false

// 刷新token的请求方法
function getRefreshTokenFunc () {
  if (window.localStorage.getItem('refreshToken')) {
    return axios.get('/api/authservice/v1/token/refresh/' + window.localStorage.getItem('refreshToken'))
  }
}

// 失效后同时发送请求的容器 -- 缓存接口
let subscribers = []
// 刷新 token 后, 将缓存的接口重新请求一次
function onAccessTokenFetched (newToken) {
  subscribers.forEach((callback) => {
    callback(newToken)
  })
  // 清空缓存接口
  subscribers = []
}
// 添加缓存接口
function addSubscriber (callback) {
  subscribers.push(callback)
}

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    if (!error.response) return Promise.reject(error)
    if (error.response.status === 401 && !error.response.config.url.includes('/api/authservice/v1/token/refresh')) {
      if (!isRefreshing) {
        isRefreshing = true
        return getRefreshTokenFunc().then((res) => {
          if (res.data) {
            window.localStorage.setItem('CurrentToken', res.data.token) // token
            window.localStorage.setItem('refreshToken', res.data.refreshToken)
            // 当刷新成功后, 重新发送缓存请求
            onAccessTokenFetched(res.data.token)
          } else {
            window.location = '/#/login'
          }
        }).catch(() => {
          // 刷新token报错的话, 就需要跳转到登录页面
          window.location = '/#/login'
        }).finally(() => {
          isRefreshing = false
        })
      }
      // 将其他接口缓存起来
      const retryOriginalRequest = new Promise((resolve) => {
        // 这里是将其他接口缓存起来的关键, 返回Promise并且让其状态一直为等待状态,
        // 只有当token刷新成功后, 就会调用通过addSubscriber函数添加的缓存接口,
        // 此时, Promise的状态就会变成resolve
        addSubscriber((newToken) => {
          // 表示用新的token去替换掉原来的token
          error.config.headers.Authorization = 'Bearer ' + newToken
          // 用重新封装的config去请求, 就会将重新请求后的返回
          resolve(instance(error.config))
        })
      })
      return retryOriginalRequest
    } else if (error.response.status === 409) {
      message.error(error.response.data.message)
      return Promise.reject(error.response)
    } else {
      return Promise.reject(error.response)
    }
  }
)

export default instance
