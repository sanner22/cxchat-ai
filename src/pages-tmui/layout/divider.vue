<script lang="ts" setup>
// import { ref } from 'vue';
// import { onShow, onLoad } from '@dcloudio/uni-app';
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例" />
      <tm-divider color="black" real-color align="left" label="我在左边" />
      <tm-divider align="left" label="我在左边" />
      <tm-divider align="center" label="我在中间" />
      <tm-divider align="right" label="我在右边" />
      <tm-divider :border="10" label="改变粗细" />
      <tm-divider color="red" font-color="red" :border="10" label="改变颜色" />
      <tm-text :font-size="24" _class="font-weight-b" label="下方不带文本分割线" />
      <tm-divider color="green" />
    </tm-sheet>
    <tm-sheet>
      <view class="mb-24">
        <tm-text :font-size="24" _class="font-weight-b" label="竖向分割线，不允许 携带文本标签。" />
      </view>
      <view class="flex flex-row flex-center">
        <tm-divider vertical :height="200" />
        <tm-divider color="green" vertical :height="200" />
        <tm-divider color="red" vertical :height="200" />
        <tm-divider color="primary" vertical :height="200" />
        <tm-divider color="black" :border="10" real-color vertical :height="200" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
