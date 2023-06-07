<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  { text: '苹果', id: '1' },
  { text: '菠萝菠萝密', id: '2' },
  { text: '香蕉', id: '3' },
  { text: '火龙果', id: '4' },
  { text: 'tmui', id: '5' },
])
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础属性,更多玩法请前往文档。" />
      <tm-divider />
      <tm-segtab :width="636" :list="list" default-value="2" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="改变按钮主题" />
      <tm-divider />
      <tm-segtab :round="24" :width="636" color="primary" active-color="white" :list="list" default-value="2" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="背景" />
      <tm-divider />
      <tm-segtab
        :round="24"
        :width="636"
        bg-color="primary"
        :follow-dark="false"
        color="white"
        active-color="primary"
        :list="list"
        default-value="2"
      />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="渐变" />
      <tm-divider />
      <tm-segtab
        :round="24"
        :width="636"
        bg-color="green"
        :follow-dark="false"
        linear="right"
        color="white"
        active-color="green"
        :list="list"
        default-value="2"
      />
    </tm-sheet>
  </tm-app>
</template>
