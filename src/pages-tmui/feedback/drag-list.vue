<script lang="ts" setup>
import { ref } from 'vue'
const lsit = ref([
  { text: '测试项目1-1' },
  { text: '测试项目2-1' },
  { text: '测试项目3-1' },
  { text: '测试项目4-1' },
  { text: '测试项目5-1' },
])
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="长按图标开始拖动" />
    </tm-sheet>

    <tm-drag-list :list="lsit" />
  </tm-app>
</template>
