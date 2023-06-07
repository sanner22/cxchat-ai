<script setup lang="ts">
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const dark = useTmpiniaStore().tmStore.dark
</script>

<template>
  <tm-app :class="dark ? 'uno-text-white' : ''">
    <tm-sheet>
      <view uno-flex="~ col gap-y-15px">
        <view uno-text="sm green" uno-p="y-2 x-4" my-attr="y-1 x-2 sm" uno-bg="#333:30">
          text-sm text-green p-y-2 p-x-4
        </view>
        <view uno-text-sm uno-text-blue uno-py-2 uno-px-4 uno-bg="#333:30">
          无值模式 text-sm text-blue py-2 px-4
        </view>
        <view uno-text="sm blue" uno-p="y-2 x-4" uno-bg="#333:30">
          有值模式, text-sm text-blue p-y-2 p-x-4
        </view>
        <view uno-border="~ red solid" uno-p="y-2 x-4" uno-bg="#333:30">
          组合模式 border border-solid border-red
        </view>
        <view uno-flex="~ col wrap" uno-p="2" uno-bg="#333:30">
          <text uno-text="sm">
            flex="~ col wrap"
          </text>
          <text uno-text="sm">
            view
          </text>
          <text uno-text="sm">
            view
          </text>
        </view>

        <text uno-text="red" uno-bg="#333:30">
          避免与 text 的属性冲突 text-red
        </text>
        <view uno-bg="#333:30" uno-text="yellow">
          bg-hex-#333:30 text-yellow
        </view>
        <view uno-bg="[#11dddd]:80">
          bg-hex-#11dddd:80
        </view>
        <view uno-bg="#2ecc71:50">
          bg-hex-#2ecc71:50
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>

<style lang="scss" scoped></style>
