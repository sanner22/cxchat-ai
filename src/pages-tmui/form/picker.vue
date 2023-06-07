<script lang="ts" setup>
import { nextTick, ref } from 'vue'

const dateStr = ref('')
const dateStr2 = ref('')
const pickydata = ref([1, 1])
const pickydata2 = ref([])
const citydate = ref([
  { text: '苹果', id: 0 },
  { text: '香蕉', id: 1 },
  { text: '其它水果', id: 2 },
  { text: '越南水果', id: 4 },
])
const citydate2 = ref([
  {
    text: '苹果',
    id: 0,
    children: [
      { text: '香蕉', id: 10 },
      { text: '香蕉2', id: 122 },
    ],
  },
  {
    text: '子级',
    id: 1,
    children: [
      { text: '香蕉', id: 10 },
      { text: '香蕉2', id: 122 },
    ],
  },
  {
    text: '越南水果',
    id: 2,
    children: [
      { text: '苹果2222', id: 10 },
      { text: '香蕉', id: 12 },
    ],
  },
])
const citydate3 = ref([
  {
    text: '苹果',
    id: 0,
    children: [
      { text: '香蕉', id: 10 },
      { text: '香蕉2', id: 122 },
    ],
  },
  {
    text: '苹果',
    id: 1,
    children: [
      { text: '香蕉', id: 10 },
      { text: '香蕉2', id: 122 },
    ],
  },
  {
    text: '越南水果',
    id: 3,
    children: [
      { text: '苹果2222', id: 10 },
      { text: '香蕉', id: 12 },
    ],
  },
])
const showdate = ref(false)
const showdateq = ref(false)

function pickok() {
  nextTick(() => {
    pickydata2.value = []
  })
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-picker-view :columns="citydate" />
    </tm-sheet>
    <tm-cell title="请选择水果种类" :right-text="dateStr || '请选择'" @click="showdate = true" />
    <tm-cell title="这里联动上边" :right-text="dateStr2 || '请选择'" @click="showdateq = true" />
    <tm-picker
      v-model:show="showdate"
      v-model="pickydata"
      v-model:model-str="dateStr"
      :default-value="pickydata"
      :columns="citydate3"
      @confirm="pickok"
    />

    <tm-picker v-model:show="showdateq" v-model="pickydata2" v-model:model-str="dateStr2" :columns="citydate3" />
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="多级联动,更多属性请自行看文档" />
      <tm-divider />
      <tm-picker-view :columns="citydate2" />
    </tm-sheet>
    <view class="py-32" />
  </tm-app>
</template>
