import { createSSRApp } from 'vue'
import App from './App.vue'
import tmui from './tmui'
import { config as tmuiConfig } from './settings/tmui.config'
import { setupStore } from '@/state'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  // Configure store
  setupStore(app)

  // use tmui, https://tmui.design/doc/start/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B.html#cli%E6%96%B9%E5%BC%8F%E5%AE%89%E8%A3%85
  app.use(tmui, tmuiConfig)

  return {
    app,
  }
}
