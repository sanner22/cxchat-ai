<script lang="ts" setup>
import { componentsList as list } from '@/pages/tmui-components/components/common'
</script>

<template>
  <tm-app>
    <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
      <tm-cell v-for="(e, i) in list" :key="i" bottom-border :url="e.path" :margin="[0, 0]" :title="e.title" />
    </view>
    <view class="py-32 mx-32">
      <tm-divider color="grey-2" label="tmui 3.0.0 原生渲染，全端兼容" />
    </view>
  </tm-app>
</template>
