<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { judgePlatform } from './utils/platform'
import { CURRENT_PLATFORM, PLATFORMS } from './enums/platformEnum'
import { useAuthStore } from '@/state/modules/auth'
import { removeInterceptor, setupInterceptors } from '@/utils/interceptors'
import { useRouterStore } from '@/state/modules/router'

const platform = CURRENT_PLATFORM
const isVue3 = judgePlatform(PLATFORMS.VUE3)
const apiUrl = import.meta.env.VITE_BASE_URL
onLaunch(() => {
  // #ifdef MP-WEIXIN
  console.log(
      `\n%cUNIAPP%c${platform}%cVUE%c${isVue3 ? '3' : '2'}%cAPI%c${apiUrl}%c\n`,
      'background:#2b993a;color:#fff;padding:3px 6px;border-radius:4px 0 0 4px;',
      'background:#fff;padding:3px 6px;color:#000;margin-right:1em;border-radius:0 4px 4px 0;',
      'background:#42d392;color:#fff;padding:3px 6px;border-radius:4px 0 0 4px;',
      'background:#fff;padding:3px 6px;color:#000;margin-right:1em;border-radius:0 4px 4px 0;',
      'background:orange;color:#fff;padding:3px 6px;border-radius:4px 0 0 4px;',
      'background:#fff;padding:3px 6px;color:#000;margin-right:1em;border-radius:0 4px 4px 0;',
      '',
  )
  // #endif
  console.log('App Launch')
  removeInterceptor()

  setupInterceptors()
  const appStore = useRouterStore()
  appStore.initialize()
})
onShow(() => {
  const authStore = useAuthStore()
  authStore.initToken()
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
  /* #ifdef APP-NVUE */
  @import './tmui/scss/nvue.css';
  /* #endif */
  /* #ifndef APP-NVUE */
  @import './tmui/scss/noNvue.css';
  /* #endif */

  @import '@/assets/main.scss';
</style>
