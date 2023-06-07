<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(3)
const list = ref([
  { text: '广东', id: 1 },
  { text: '北京', id: 2 },
  { text: '江苏', id: 3, dotCount: 6 },
  { text: '南昌', id: 4, icon: 'tmicon-md-chatboxes' },
  { text: '上海', id: 5 },
  { text: '吃菠菜吃菠菜吃菠菜', id: 6, dotCount: 6 },
  { text: 'Hellow', id: 7 },
  { text: 'Github', id: 8, dotCount: 1 },
  { text: 'Vue', id: 9 },
  { text: 'Uniapp', id: 10 },
])
</script>

<template>
  <tm-app>
    <tm-side-menu v-model:active="active" :item-height="100" :list="list">
      <tm-text _class="pa-32" label="这边是你的内容区域" />
    </tm-side-menu>
    <tm-sheet :margin="[0, 32]" _class="flex flex-row flex-row-center-start">
      <tm-divider color="yellow" vertical :height="30" real-color :border="8" />
      <tm-text label="可以根据自己的需求更新你的配色方案" />
    </tm-sheet>
    <tm-side-menu
      v-model:active="active"
      menu-active-font-color="yellow"
      menu-font-color="black"
      menu-bar-bg-color="yellow"
      :item-height="100"
      :list="list"
    >
      <tm-text _class="pa-32" label="这边是你的内容区域" />
    </tm-side-menu>
  </tm-app>
</template>
