<script lang="ts" setup>
import { ref } from 'vue'

const dateStr = ref('')
const dateSAva = ref('2014-6-15')
const showdate = ref(false)

setTimeout(() => {
  dateSAva.value = '2016-4-2'
  console.log(dateSAva.value)
}, 200)
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-time-view />
    </tm-sheet>
    <tm-cell title="请选择时间" :right-text="dateStr || '请选择'" @click="showdate = true" />
    <tm-time-picker
      v-model:show="showdate"
      v-model="dateSAva"
      v-model:model-str="dateStr"
      :show-detail="{
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true,
      }"
      :default-value="dateSAva"
      format="YYYY年MM月DD日"
    />
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="全部显示,更多请自行配置" />
      <tm-text :font-size="24" _class="font-weight-b" label="[2022-5-23]被禁用无法选择" />
      <tm-divider />
      <tm-time-view
        v-model="dateSAva"
        v-model:model-str="dateStr"
        format="YYYY年MM月DD日"
        :default-value="dateSAva"
        :disabled-date="['2022-5-23']"
        :show-detail="{
          year: true,
          month: true,
          day: true,
          hour: true,
          minute: true,
          second: true,
        }"
      />
    </tm-sheet>
  </tm-app>
</template>
