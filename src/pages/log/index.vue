<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'

onLoad((query) => {
  console.log('log onLoad', query)
})
</script>

<template>
  <tm-app>
    <view style="line-height: 88rpx; text-align: center">
      登录后访问log
    </view>
  </tm-app>
</template>

<style lang="scss" scoped></style>
