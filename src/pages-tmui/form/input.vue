<script lang="ts" setup>
import { ref } from 'vue'
const test = ref('')
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-input />
      <tm-input :margin="[0, 24]" password placeholder="请输入密码,显示隐藏内容" prefix="tmicon-lock-fill" />
      <tm-input
        :input-padding="[12]"
        placeholder="文本域，输入自动增高。"
        confirm-hold
        confirm-type="go"
        show-char-number
        :maxlength="100"
        :border="1"
        color="grey-5"
        auto-height
        type="textarea"
      />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="一些其它常见示例" />
      <tm-divider />
      <tm-input v-model="test" prefix="tmicon-user-fill" show-clear />
      <tm-input v-model="test" prefix-label="字符统计" :margin="[0, 24]" show-char-number :maxlength="10" />
      <tm-input v-model="test" suffix="tmicon-clock-fill" show-clear />
      <tm-input prefix="tmicon-dollar" suffix-label="元" :margin="[0, 24]" />
      <tm-input prefix="tmicon-search" search-label="搜索" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="样式配置" />
      <tm-divider />
      <tm-input color="primary" prefix="tmicon-user-fill" />
      <tm-input prefix-label="聚焦样式" color="white" focus-color="red" :margin="[0, 24]" prefix="tmicon-user-fill" />
    </tm-sheet>
    <tm-sheet color="primary">
      <tm-text :font-size="24" _class="font-weight-b" label="其它" />
      <tm-divider />
      <tm-input color="primary" focus-color="green" prefix="tmicon-user-fill" />
      <tm-input color="primary" focus-color="green" :margin="[0, 24]" prefix="tmicon-lock-fill" />
    </tm-sheet>
  </tm-app>
</template>
