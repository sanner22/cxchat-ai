<script setup lang="ts">
import { reactive, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useAuthStore } from '@/state/modules/auth'
import { Toast } from '@/utils/uniapi/prompt'
import { useRouter } from '@/hooks/router'
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
const store = useTmpiniaStore()

const redirect = ref<string | undefined>(undefined)
onLoad((query) => {
  redirect.value = query?.redirect ? decodeURIComponent(query.redirect) : undefined
})

const router = useRouter()

const form = reactive({
  username: 'admin',
  password: 'admin999',
  accept: false,
})
const authStore = useAuthStore()
const submit = (_e: any) => {
  if (!form.username || !form.password) {
    Toast('账号 & 密码 必填', { mask: false })
    return
  }
  if (!form.accept) {
    Toast('请阅读并同意用户隐私政策', { mask: false })
    return
  }
  authStore.login(form).then(() => {
    Toast('登录成功', { duration: 1500 })
    setTimeout(() => {
      if (redirect.value) {
        router.go(redirect.value, { replace: true })
        return
      }
      router.pushTab('/pages/user/index')
    }, 1500)
  })
}

// 切换暗黑模式
const app = ref<InstanceType<typeof tmApp> | null>(null)
const toggleDark = () => {
  // 切换暗黑模式
  app.value?.setDark()
}
</script>

<template>
  <tm-app ref="app">
    <tm-navbar title="用户登录" :shadow="0" hide-home>
      <template #left>
        <view class="uno-flex uno-items-center uno-gap-10px">
          <tm-text
            :_class="store.tmStore.dark ? 'i-line-md-moon-filled-to-sunny-filled-loop-transition' : 'i-line-md-sunny-filled-loop-to-moon-filled-loop-transition'"
            :color="store.tmStore.dark ? '#FFFB01' : undefined"
            :font-size="18"
            unit="px"
            @click="toggleDark"
          />
        </view>
      </template>
    </tm-navbar>

    <view uno-flex-auto uno-center class="uno-bg-gradient-to-br uno-from-#007dbf:10 uno-via-#009fe8:20 uno-to-#007dbf:10">
      <tm-form id="form" uno-w-75vw _class="uno-flex uno-flex-col uno-gap-y-20px" transprent :margin="[0]" :padding="[32]" @submit="submit">
        <view uno-center uno-flex-col>
          <tm-image src="/static/svg/favicon.svg" :width="80" :height="80" unit="px" uno-mb-30px />
          <tm-text label="LOGIN" :font-size="24" unit="px" uno-font-bold />
          <tm-text label="欢迎您登录" uno-opacity-40 />
        </view>

        <view>
          <tm-input
            v-model="form.username"
            placeholder="请输入用户名" prefix="tmicon-user-fill"
            focus-color="primary" linear="right"
            :margin="[0, 24]" :round="15" :border="10"
          />
          <tm-input
            v-model="form.password"
            password placeholder="请输入密码" prefix="tmicon-lock-fill"
            focus-color="primary" linear="right"
            :margin="[0, 24]" :round="15" :border="10"
          />
          <view uno-flex="~ row" uno-justify-end>
            <navigator url="/pages/login/forget-password" open-type="navigate" uno-flex="~ row" uno-justify-end>
              <tm-text label="忘记密码？" :color="store.tmStore.color || 'primary'" />
            </navigator>
          </view>
        </view>

        <tm-button label="登录" icon="tmicon-unlock" :round="15" block :disabled="!form.accept" form-type="submit" />

        <view uno-flex="~ row" uno-items-center>
          <tm-checkbox v-model="form.accept" label="我已经阅读并同意" :size="36" :font-size="24" />
          <tm-text label="《用户隐私政策》" :font-size="24" :color="store.tmStore.color || 'primary'" />
        </view>
      </tm-form>
    </view>
  </tm-app>
</template>

<style lang="scss" scoped></style>
