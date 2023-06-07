<script setup lang="ts">
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const dark = useTmpiniaStore().tmStore.dark
</script>

<template>
  <view class="uno-text-xl uno-font-bold">
    text-shadow
  </view>
  <tm-divider />
  <view :style="{ '--un-text-shadow-color': dark ? '#fff' : '#000' }">
    <view class="uno-text-shadow">
      text-shadow
    </view>
    <view class="uno-text-shadow-sm">
      text-shadow-sm
    </view>
    <view class="uno-text-shadow-md">
      text-shadow-md
    </view>
    <view class="uno-text-shadow-lg">
      text-shadow-lg
    </view>
    <view class="uno-text-shadow-xl">
      text-shadow-xl
    </view>
    <view class="uno-text-shadow-none">
      text-shadow-none
    </view>
  </view>
</template>
