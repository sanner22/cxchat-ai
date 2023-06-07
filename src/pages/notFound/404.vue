<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { useRouter } from '@/hooks/router'
import { HOME_PAGE } from '@/enums/routerEnum'

const go = ref<string>('')
const router = useRouter()
const redirect = ref<string>('')

onLoad((query) => {
  go.value = query?.go || ''
  redirect.value = query?.redirect || HOME_PAGE
})

/**
   * 返回首页
   */
const backHome = () => {
  router.pushTab(redirect.value)
}
</script>

<template>
  <tm-app>
    <view class="uno-w-screen uno-h-screen uno-flex uno-flex-col uno-items-center uno-justify-center">
      <tm-result
        status="empty"
        title="404"
        :sub-title="`${go} 页面找不到了~`"
        color="#9E9E9E"
        class="uno-mb-30px"
        :show-btn="false"
      />
      <tm-button
        color="primary"
        icon="tmicon-md-home"
        size="small"
        class="uno-mb-30px"
        label="返回首页"
        :width="200"
        @click="backHome"
      />
    </view>
  </tm-app>
</template>

<style lang="scss" scoped></style>
