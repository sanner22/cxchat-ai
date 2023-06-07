<script setup lang="ts">
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const dark = useTmpiniaStore().tmStore.dark
</script>

<template>
  <tm-app :class="dark ? 'uno-text-white' : ''">
    <tm-sheet>
      <view :style="{ '--un-shadow-color': dark ? '#fff' : '#000' }">
        <view class="uno-h-80px uno-mb-10px uno-bg-blue-300_30 uno-center uno-shadow-none">
          shadow-none
        </view>
        <view class="uno-h-80px uno-mb-10px uno-bg-blue-300_30 uno-center uno-shadow">
          shadow
        </view>
        <view class="uno-h-80px uno-mb-10px uno-bg-blue-300_30 uno-center uno-shadow-sm">
          shadow-sm
        </view>
        <view class="uno-h-80px uno-mb-10px uno-bg-blue-300_30 uno-center uno-shadow-md">
          shadow-md
        </view>
        <view class="uno-h-80px uno-mb-10px uno-bg-blue-300_30 uno-center uno-shadow-lg">
          shadow-lg
        </view>
        <view class="uno-h-80px uno-mb-10px uno-bg-blue-300_30 uno-center uno-shadow-xl">
          shadow-xl
        </view>
        <view class="uno-h-80px uno-mb-10px uno-bg-blue-300_30 uno-center uno-shadow-2xl">
          shadow-2xl
        </view>
        <view class="uno-h-80px uno-mb-10px uno-bg-blue-300_30 uno-center uno-shadow-inner">
          shadow-inner
        </view>
      </view>
      <view class="uno-h-80px uno-mb-10px uno-bg-blue-300_30 uno-center !uno-shadow-[0px_4px_4px_0px_rgba(237,_0,_0,_1)]">
        [0px_4px_4px_0px_rgba(237,_0,_0,_1)]
      </view>
    </tm-sheet>
  </tm-app>
</template>
