<script lang="ts" setup>
import { ref } from 'vue'

const modeltype = ref<'password' | 'card' | 'car' | 'number'>('password')
const dateStr = ref('')
const showdate = ref(false)
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-radio-group v-model="modeltype">
        <tm-radio value="password" label="密码" />
        <tm-radio value="card" color="red" label="身份证" />
        <tm-radio value="car" color="blue" label="车牌" />
        <tm-radio value="number" color="green" label="数字键盘" />
      </tm-radio-group>
    </tm-sheet>

    <tm-cell title="弹出键盘" right-color="primary" :right-text="dateStr" @click="showdate = true" />
    <tm-keyborad v-model="dateStr" v-model:show="showdate" decimal :type="modeltype" />
  </tm-app>
</template>
