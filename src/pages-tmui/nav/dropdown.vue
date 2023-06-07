<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  { text: '苹果', id: '1', icon: 'tmicon-collection' },
  { text: '菠萝', id: '2', icon: 'tmicon-account-plus' },
  { text: '电话', id: '3', icon: 'tmicon-phone' },
])
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础属性,更多玩法请前往文档。" />
      <tm-divider />
      <view class="flex flex-between flex-row px-32">
        <tm-dropdown position="bl" color="grey-darken-4" :width="220" :list="list">
          <tm-text label="显示菜单" />
        </tm-dropdown>
        <tm-dropdown :width="220" color="red" :list="list">
          <tm-text label="样式1" />
        </tm-dropdown>
        <tm-dropdown position="br" :width="220" color="primary" linear="bottom" linear-deep="accent" :list="list">
          <tm-text label="右对齐" />
        </tm-dropdown>
      </view>
    </tm-sheet>
  </tm-app>
</template>
