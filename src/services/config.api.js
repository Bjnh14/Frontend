import axios from 'axios'

const callAPIWithToken = axios.create({
  baseURL: 'http://172.16.0.225:3000/',
  timeout: 10000,
})

callAPIWithToken.interceptors.request.use(
  (params) => {
    params.headers.Accept = 'application/json'
    params.headers['Content-Type'] = 'application/json'
    params.headers['Access-Control-Allow-Origin'] = '*'
    return params
  },
  (error) => {
    return Promise.reject(error)
  }
)

callAPIWithToken.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res
    }
    return res
  },
  async (err) => {
    if (
      err.code === 'ERR_NETWORK' ||
      (err.code === 'ECONNABORTED' && err.message.includes('timeout'))
    ) {
      return Promise.reject({
        response: {
          data: {},
          status: -1,
        },
      })
    }

    if (err.response.status === 403) {
      window.location.href = '/403'
    }

    return Promise.reject(err)
  },
  { synchronous: true }
)

export { callAPIWithToken }
