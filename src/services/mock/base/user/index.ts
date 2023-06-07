import type { MockMethod } from 'vite-plugin-mock'
import type { ApiResult, ApiResultOf } from '../../../api/apiResult'

// #region apiResult

/**
 * 预设的封装后的 ApiResult
 * @param {*} data 结果数据
 * @param {number} error 是否错误
 * @param {string} message 消息
 * @returns {ApiResult} 封装后的结果
 */
const apiResult = (data: any = undefined, error = 0, message = 'success'): ApiResult => {
  return {
    error,
    message,
    result: data,
  }
}

/**
 * 预设的封装后的 ApiResult
 * @param {T} data {T}
 * @param {number} error 是否错误
 * @param {string} message 消息
 * @returns {ApiResultOf<T>} 封装后的结果
 */
// eslint-disable-next-line unused-imports/no-unused-vars
const apiResultOf = <T>(data: T, error = 0, message = 'success'): ApiResultOf<T> => {
  return {
    error,
    message,
    result: data,
  }
}

// #endregion

export default [

  // #region base

  // #region base/user

  // 用户登录
  {
    url: '/api/base/user/login',
    method: 'post',
    response: () => {
      return apiResult({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjRmNmEyY2JjLTllYmYtNDFlMi1iNWYxLWVkNzc0YzE5MDE2MyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Iuezu-e7n-euoeeQhuWRmCIsImV4cCI6MTY3NjU0MDA0MCwiaXNzIjoiVE5ULldlYkFwaS1UTlQiLCJhdWQiOiJUTlQuV2ViQXBpLUF1ZGllbmNlIn0.WFaQuALwCF2XA08KT4cIecLeuObWBUuxx1_vdr_Or9w',
        type: 'Bearer',
        expiration: '2023/02/16 09:34:00+0800',
      })
    },
  },

  // 用户注销
  {
    url: '/api/base/user/logout',
    method: 'post',
    response: () => {
      return apiResult()
    },
  },

  // #endregion

  // #endregion

] as MockMethod[] // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档
