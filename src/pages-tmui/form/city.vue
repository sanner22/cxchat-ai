<script lang="ts" setup>
import { ref } from 'vue'
const dateStr = ref('')
const citydate = ref([])
const showdate = ref(false)
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-city-cascader />
    </tm-sheet>
    <tm-cell title="请选择所在区域" :right-text="dateStr || '请选择'" @click="showdate = true" />
    <tm-city-picker v-model:show="showdate" v-model="citydate" v-model:model-str="dateStr" />
  </tm-app>
</template>
