<script lang="ts" setup>
import { ref } from 'vue'
const colorName = ref('#00FF00')
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text
        label="颜色选择器,全端兼容.因实现兼容有点小复杂,故属性上我虽然提供了宽和高.但实际上没有用处.也请不要随意赋值.固定值即可.如果确实需要更改宽和高,请自行修改源码."
      />
      <tm-text color="red" label="暂时还未实现双向绑定定位颜色位置功能." />
      <tm-text :label="colorName" />
      <tm-divider />
    </tm-sheet>
    <view class="pa-32 flex flex-row flex-row-center-center">
      <tm-color-view v-model="colorName" />
    </view>
  </tm-app>
</template>
