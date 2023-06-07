<script lang="ts" setup>
import { ref } from 'vue'

const val = ref(0)
function beforeEnter() {
  // eslint-disable-next-line promise/param-names
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 1000)
  })
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-stepper v-model="val" :default-value="20" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="一些其它常见属性" />
      <tm-divider />
      <tm-stepper v-model="val" color="primary" bg-color="primary" circular :default-value="20" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="步幅3" />
      <tm-divider />
      <tm-stepper color="red" bg-color="red" :step="3" circular :default-value="0" />
      <tm-text _class="pt-24 font-weight-b" :font-size="24" label="小数点" />
      <tm-divider />
      <tm-stepper :round="0" bg-color="green" color="green" :fixed="1" :default-value="0.3" />
      <tm-text _class="pt-24 font-weight-b" :font-size="24" label="最大值10，最小值-3" />
      <tm-divider />
      <tm-stepper :max="10" :min="-3" :default-value="1" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="异步增减,尺寸的改变" />
      <tm-divider />
      <tm-stepper
        :width="200"
        :height="62"
        :before-enter="beforeEnter"
        color="red"
        linear="bottom"
        bg-color="red"
        circular
        :default-value="20"
      />
    </tm-sheet>
  </tm-app>
</template>
