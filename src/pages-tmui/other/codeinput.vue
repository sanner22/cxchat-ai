<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
const str = ref('')

function ok() {
  uni.showToast({
    title: '验证成功',
    icon: 'none',
  })
  show.value = false
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例，更多属性和功能见文档" />
      <tm-divider />
      <tm-codeinput :border="2" :round="4" :value="str" @click="show = true" />
      <view class="py-24" />
      <tm-codeinput :text="false" outlined :round="4" :value="str" @click="show = true" />
      <view class="py-24" />
      <tm-codeinput :border="0" :round="4" :value="str" @click="show = true" />
    </tm-sheet>
    <tm-sheet>
      <tm-codeinput :border="0" :size="80" :round="16" :count="4" color="green" :value="str" @click="show = true" />
    </tm-sheet>
    <tm-keyborad v-model:show="show" v-model="str" :max-length="4" @success="ok" />
  </tm-app>
</template>
