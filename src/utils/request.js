import axios from 'axios'

export const request = createAxiosInstance()

function createAxiosInstance () {
  const instance = axios.create({
    // baseURL: '',
    timeout: 5000,
    // headers: {
    //   // 可定义统一的请求头部
    //   post: {
    //     'Content-Type': 'application/json'
    //   }
    // }
  })

  // 添加请求拦截器(在发送请求之前做些什么)
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  })

  instance.interceptors.response.use((response) => {
    return response
  })

  return instance
}
