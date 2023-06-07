<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
const list = ref([
  { text: '苹果', id: '1' },
  { text: '菠萝', id: '2' },
  { text: '香蕉', id: '3' },
])
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础属性,更多玩法请前往文档。" />
      <tm-divider />
      <tm-button label="显示操作栏" block @click="show = true" />
    </tm-sheet>
    <tm-action-menu v-model="show" :list="list" />
  </tm-app>
</template>
