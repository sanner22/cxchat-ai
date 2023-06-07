<script setup lang="ts">
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const dark = useTmpiniaStore().tmStore.dark
</script>

<template>
  <view class="uno-text-xl uno-font-bold">
    text-opacity
  </view>
  <tm-divider />
  <view class="uno-text-opacity-0" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-0
  </view>
  <view class="uno-text-opacity-5" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-5
  </view>
  <view class="uno-text-opacity-10" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-10
  </view>
  <view class="uno-text-opacity-20" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-20
  </view>
  <view class="uno-text-opacity-30" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-30
  </view>
  <view class="uno-text-opacity-40" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-40
  </view>
  <view class="uno-text-opacity-50" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-50
  </view>
  <view class="uno-text-opacity-60" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-60
  </view>
  <view class="uno-text-opacity-70" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-70
  </view>
  <view class="uno-text-opacity-80" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-80
  </view>
  <view class="uno-text-opacity-90" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-90
  </view>
  <view class="uno-text-opacity-100" :class="dark ? 'uno-text-white' : 'uno-text-black'">
    text-opacity-100
  </view>
</template>
