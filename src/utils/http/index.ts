import Request from 'luch-request'
import { assign } from 'lodash-es'
import type { ApiResult } from './../../services/api/apiResult'
import { Toast } from '@/utils/uniapi/prompt'
import { getBaseUrl } from '@/utils/env'
import { useAuthStore } from '@/state/modules/auth'
import { ResultEnum } from '@/enums/httpEnum'

const BASE_URL = getBaseUrl()
const HEADER = {
  'Content-Type': 'application/json;charset=UTF-8;',
  'Accept': 'application/json, text/plain, */*',
}

function createRequest() {
  return new Request({
    baseURL: BASE_URL,
    header: HEADER,
    custom: {
      auth: true,
    },
  })
}

const request = createRequest()
/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (options) => {
    if (options.custom?.auth) {
      const authStore = useAuthStore()
      if (!authStore.isLogin) {
        Toast('请先登录')
        // token不存在跳转到登录页
        return Promise.reject(options)
      }
      options.header = assign(options.header, {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        authorization: `Bearer ${authStore.getToken}`,
      })
    }
    return options
  },
  options => Promise.reject(options),
)

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  // onFulfilled，对响应成功做点什么 可使用async await 做异步操作
  async (response) => {
    const { data, statusCode } = response
    // 正常的http错误响应
    if (statusCode !== 200) {
      Toast(response.errMsg)
      response.data = { error: 1, message: response.errMsg }
      return Promise.reject(response)
    }

    // 自定义的错误响应
    // 解构响应data
    const { error, message } = data as ApiResult
    // 自定义响应成功
    if (error === ResultEnum.SUCCESS || error === ResultEnum.CUSTOM_SUCCESS)
      return Promise.resolve(response)

    // 自定义响应错误时，如果有消息，则输出
    message && Toast(message)
    return Promise.reject(response)
  },
  // onRejected，对响应错误做点什么 （statusCode !== 200）
  (error) => {
    return Promise.reject(error)
  },
)

export { request }
