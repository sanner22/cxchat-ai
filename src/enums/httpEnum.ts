/**
 * @description: 预设请求结果设置枚举
 */
export enum ResultEnum {
  SUCCESS = 0, // 通用成功
  ERROR = 1, // 通用错误
  NOTFOUND = 400, // 未找到
  UNAUTHORIZED = 401, // 未授权
  SERVERERROR = 500, // 服务错误
  CUSTOM_SUCCESS = 10000, // 自定义成功
}
