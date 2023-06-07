export interface ApiResultOf<T> {
  error: number
  message?: string
  result?: T
}

interface EntityResult<T> {
  entity: T
}

export type ApiResult = ApiResultOf<any>

export type ApiResultOfEntity<T> = ApiResultOf<EntityResult<T>>
