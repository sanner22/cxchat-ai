<script lang="ts" setup>
import { ref } from 'vue'

const content = ref(['11测试滚动试滚end', '22测试滚动测试滚动测试滚动测试滚动测试滚动'])
const test = (index: number) => {
  console.log('点击了：', index)
}
</script>

<template>
  <tm-app>
    <tm-roll-notice list="测试滚动测试滚动测试滚动测试滚动测试滚动" @click="test" />
    <tm-roll-notice :text="false" :list="content" @click="test" />
    <tm-roll-notice :shadow="2" :round="2" color="red" :text="false" linear="right" :list="content" @click="test" />
  </tm-app>
</template>
