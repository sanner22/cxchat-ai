<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  { title: '开始' },
  { title: '投放中' },
  { title: '审核' },
  { title: '最后审查' },
  { title: '完成' },
])
const list2 = ref([{ title: '开始' }, { title: '投放中' }, { title: '审核' }])
function test() {
  console.log(11)
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础属性,更多玩法请前往文档。" />
    </tm-sheet>
    <tm-sheet :padding="[0, 24]" :margin="[0, 0]">
      <tm-steps color="primary" :default-current="1">
        <tm-steps-item v-for="(item, index) in list" :key="index" :width="150" :title="item.title" />
      </tm-steps>
    </tm-sheet>

    <tm-sheet :padding="[0, 24]" :margin="[0, 0]">
      <tm-steps type="number" active-color="green" :default-current="2">
        <tm-steps-item v-for="(item, index) in list2" :key="index" :width="200" :title="item.title" />
      </tm-steps>
    </tm-sheet>

    <tm-sheet :padding="[0, 24]" :margin="[0, 0]">
      <tm-steps changeable active-color="green" status="error" :default-current="1" @step-click="test">
        <tm-steps-item v-for="(item, index) in list2" :key="index" :title="item.title" />
      </tm-steps>
    </tm-sheet>
  </tm-app>
</template>
