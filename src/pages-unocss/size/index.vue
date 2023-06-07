<script setup lang="ts">
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const store = useTmpiniaStore()
</script>

<template>
  <tm-app :class="store.tmStore.dark ? 'uno-text-white' : ''">
    <tm-sheet>
      <tm-text label="width" :font-size="20" unit="px" />
      <tm-divider />

      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-xs">
        w-xs
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-sm">
        w-sm
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-md">
        w-md
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-lg">
        w-lg
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-xl">
        w-xl
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-2xl">
        w-2xl
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-3xl">
        w-3xl
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-4xl">
        w-4xl
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-200px">
        w-200px
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-300px">
        w-300px
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-1_4">
        w-1_4
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-1/4">
        w-1/4
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-1_3">
        w-1_3
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-1/3">
        w-1/3
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-1_2">
        w-1_2 50%
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-1/2">
        w-1/2 50%
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-half">
        w-half 50%
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-auto">
        w-auto
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-full">
        w-full 100%
      </view>
      <view class="uno-h-20px uno-bg-blue-9_25 uno-mb-10px uno-w-screen">
        w-screen 100vw
      </view>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]">
      <tm-text label="height (左右滑动看全部)" :font-size="20" unit="px" />
      <tm-divider />

      <view class="uno-flex uno-flex-row uno-gap-15px uno-overflow-x-auto uno-overflow-y-hidden uno-h-300px uno-bg-green-500_30">
        <view class="item uno-h-xs">
          <text class="text">
            h-xs
          </text>
        </view>
        <view class="item uno-h-sm">
          <text class="text">
            h-sm
          </text>
        </view>
        <view class="item uno-h-md">
          <text class="text">
            h-md
          </text>
        </view>
        <view class="item uno-h-lg">
          <text class="text">
            h-lg
          </text>
        </view>
        <view class="item uno-h-xl">
          <text class="text">
            h-xl
          </text>
        </view>
        <view class="item uno-h-100px">
          <text class="text">
            h-100px
          </text>
        </view>
        <view class="item uno-h-300px">
          <text class="text">
            h-300px
          </text>
        </view>
        <view class="item uno-h-1_4">
          <text class="text">
            h-1_4
          </text>
        </view>
        <view class="item uno-h-1/4">
          <text class="text">
            h-1/4
          </text>
        </view>
        <view class="item uno-h-1_3">
          <text class="text">
            h-1_3
          </text>
        </view>
        <view class="item uno-h-1/3">
          <text class="text">
            h-1/3
          </text>
        </view>
        <view class="item uno-h-1_2">
          <text class="text">
            h-1_2
          </text>
        </view>
        <view class="item uno-h-1/2">
          <text class="text">
            h-1/2
          </text>
        </view>
        <view class="item uno-h-half">
          <text class="text">
            h-half
          </text>
        </view>
        <view class="item uno-h-auto">
          <text class="text">
            h-auto
          </text>
        </view>
        <view class="item uno-h-full">
          <text class="text">
            h-full
          </text>
        </view>
      </view>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]">
      <tm-text label="box sizing" :font-size="20" unit="px" />
      <tm-divider />

      <view class="uno-box-border uno-w-full uno-h-100px uno-p-15px uno-bg-blue-300_30 uno-center uno-mb-10px">
        border-box w-full h-250px p-4
      </view>
      <view class="uno-box-content uno-w-full uno-h-100px uno-p-15px uno-bg-blue-300_30 uno-center">
        content-box w-full h-250px p-4
      </view>
    </tm-sheet>
  </tm-app>
</template>

<style lang="scss" scoped>
.item {
  @apply uno-bg-green-200_30 uno-min-w-30px uno-text-xs uno-flex uno-justify-center uno-pt-5px;

  .text {
    display: block;
    writing-mode: vertical-lr;
  }
}
</style>
