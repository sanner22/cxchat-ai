<script lang="ts" setup>
import { ref } from 'vue'

const pos = ref<'bc' | 'bl' | 'br' | 'tc' | 'tl' | 'tr'>('bc')
const ac_pos = ref<'top' | 'bottom' | 'left' | 'right' | undefined>('top')
const fabActions = [
  { icon: 'tmicon-ios-sunny', color: 'pink', linear: 'top', label: '文字' },
  { icon: 'tmicon-md-power', color: 'red', label: '关闭' },
]
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="悬浮按钮一共4*6=24个位置可选.从3.0.89开始已经重构,兼容性得到完美适配.但注意在h5使用时,显示顶部时,注意要自己让出导航条高度."
      />
    </tm-sheet>
    <tm-sheet :shadow="3" :round="3" :height="1600" :margin="[32, 0, 32, 0]">
      <tm-text :font-size="24" _class="font-weight-b pb-24" label="主按钮位置" />
      <tm-radio-group v-model="pos">
        <tm-radio
          v-for="(item, index) in ['bc', 'bl', 'br', 'tc', 'tl', 'tr']"
          :key="index"
          :value="item"
          :label="item"
        />
      </tm-radio-group>
      <tm-text :font-size="24" _class="font-weight-b py-24" label="子菜单弹出方向" />
      <tm-radio-group v-model="ac_pos">
        <tm-radio
          v-for="(item, index) in ['top', 'left', 'bottom', 'right']"
          :key="index"
          :value="item"
          :label="item"
        />
      </tm-radio-group>

      <tm-text :font-size="24" _class="font-weight-b py-32" label="请滚动页面到尾部,点击右下角按钮置顶页面功能." />
    </tm-sheet>
    <tm-float-button
      :disabled-scroll-to="false"
      position="br"
      :btn="{ icon: 'tmicon-angle-up', linear: '', color: 'white', label: '置顶' }"
    />

    <tm-float-button
      show-actions
      :actions="fabActions"
      :actions-pos="ac_pos"
      :position="pos"
      :btn="{ icon: 'tmicon-plus', linear: 'bottom', color: 'green' }"
    />
  </tm-app>
</template>
