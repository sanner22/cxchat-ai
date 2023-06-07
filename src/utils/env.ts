import pkg from '../../package.json'
import { judgePlatform } from '@/utils/platform'
import { PLATFORMS } from '@/enums/platformEnum'

/**
 * @description: 根据版本生成缓存键
 */
export function getPkgVersion() {
  return `__${pkg.version}__`.toUpperCase()
}

/**
 * @description: 开发者模式
 */
export const devMode = 'development'

/**
 * @description: 生产模式
 */
export const prodMode = 'production'

/**
 * @description: 获取环境模式
 * @returns:
 * @example:
 */
export function getEnvMode(): string {
  return isDevMode() ? devMode : prodMode
}

/**
 * @description: 获取环境变量
 * @returns:
 * @example:
 */
export function getEnvValue<T = any>(key: string): T {
  return (import.meta.env as any)[key] as T
}

/**
 * @description: 是否为开发环境
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return getEnvValue<boolean>('VITE_DEV')
}

/**
 * @description: 是否为生产环境
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return getEnvValue<boolean>('VITE_PROD')
}

/**
 * @description: 获取环境变量 VITE_BASE_URL 的值
 * @returns:
 * @example:
 */
export function getBaseUrl(): string {
  if (judgePlatform(PLATFORMS.H5) && isDevMode())
    return ''
  return getEnvValue<string>('VITE_BASE_URL')
}

/**
 * @description: 获取环境变量 VITE_UPLOAD_URL 的值
 * @returns:
 * @example:
 */
export function getUploadUrl(): string {
  if (judgePlatform(PLATFORMS.H5) && isDevMode())
    return '/upload'
  return getEnvValue<string>('VITE_UPLOAD_URL')
}
