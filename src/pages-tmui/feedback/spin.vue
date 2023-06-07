<script lang="ts" setup>
import { ref } from 'vue'

const load = ref(true)
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础属性,更多玩法请前往文档。" />
      <tm-divider />
      <tm-spin :load="load" tip="点我取消加载" @click="load = false">
        <tm-sheet :margin="[0, 0]" :padding="[0, 0]">
          <tm-image src="https://picsum.photos/620/150" :width="636" :height="150" />
          <tm-text
            label="加载中 Spin可以应用于任何元素中，当然使用场景主要是局部内容加载反馈等等。加载中 Spin可以应用于任何元素中，当然使用场景主要是局部内容加载反馈等等。"
          />
        </tm-sheet>
      </tm-spin>
    </tm-sheet>
  </tm-app>
</template>
