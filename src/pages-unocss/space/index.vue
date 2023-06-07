<script setup lang="ts">
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const dark = useTmpiniaStore().tmStore.dark
</script>

<template>
  <tm-app :class="dark ? 'uno-text-white' : ''">
    <tm-sheet>
      <view class="uno-text-xl uno-font-bold">
        space-x
      </view>
      <tm-divider />

      <view class="uno-flex uno-flex-col uno-gap-y-15px">
        <view class="uno-flex uno-h-50rpx uno-space-x-15px">
          <view class="uno-bg-red_30 uno-flex-1 uno-center">
            view
          </view>
          <view class="uno-bg-blue_30 uno-flex-1 uno-center">
            view
          </view>
          <view class="uno-bg-green_30 uno-flex-1 uno-center">
            view
          </view>
        </view>

        <view class="uno-flex uno-space-x-15px">
          <image
            class="uno-bg-red_30 uno-flex-1 uno-block"
            src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg"
            mode="widthFix"
          />
          <image
            class="uno-bg-blue_30 uno-flex-1 uno-block"
            src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg"
            mode="widthFix"
          />
          <image
            class="uno-bg-green_30 uno-flex-1 uno-block"
            src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg"
            mode="widthFix"
          />
        </view>

        <view class="uno-flex uno-h-50rpx uno-space-x-15px">
          <text class="uno-bg-red_30 uno-flex-1 uno-center">
            text
          </text>
          <text class="uno-bg-blue_30 uno-flex-1 uno-center">
            text
          </text>
          <text class="uno-bg-green_30 uno-flex-1 uno-center">
            text
          </text>
        </view>

        <view class="uno-flex uno-h-50rpx uno-space-x-15px">
          <button class="uno-bg-red_30 uno-flex-1 uno-center">
            button
          </button>
          <button class="uno-bg-blue_30 uno-flex-1 uno-center">
            button
          </button>
          <button class="uno-bg-green_30 uno-flex-1 uno-center">
            button
          </button>
        </view>
      </view>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]">
      <view class="uno-text-xl uno-font-bold">
        使用 flex-row-reverse 元素倒序, 使用 space-x-reverse 间隔来确保每个元素被添加到正确的一侧
      </view>
      <tm-divider />

      <view class="uno-space-x-15px uno-space-x-reverse uno-flex-row-reverse uno-flex uno-items-center">
        <view class="uno-bg-red_30 uno-center uno-flex-1">
          view
        </view>
        <view class="uno-bg-blue_30 uno-center uno-flex-1">
          view
        </view>
        <view class="uno-bg-green_30 uno-center uno-flex-1">
          view
        </view>
      </view>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]">
      <view class="uno-text-xl uno-font-bold">
        space-y
      </view>
      <tm-divider />

      <view class="uno-space-y-15px">
        <view class="uno-bg-red_30 uno-flex-1 uno-center">
          view
        </view>
        <view class="uno-bg-blue_30 uno-flex-1 uno-center">
          view
        </view>
        <view class="uno-bg-green_30 uno-flex-1 uno-center">
          view
        </view>
      </view>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]">
      <view class="uno-text-xl uno-font-bold">
        space-(number)rpx
      </view>
      <tm-divider />

      <view class="uno-space-y-20rpx">
        <view class="uno-bg-red_30 uno-flex-1 uno-center">
          view
        </view>
        <view class="uno-bg-blue_30 uno-flex-1 uno-center">
          view
        </view>
        <view class="uno-bg-green_30 uno-flex-1 uno-center">
          view
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>

<style></style>
