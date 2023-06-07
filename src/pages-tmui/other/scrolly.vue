<script lang="ts" setup>
import { ref } from 'vue'

const pull = ref(false)
function refresh() {
  setTimeout(() => {
    pull.value = false
  }, 1500)
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="32" label="纵向滚动,也可称之为下拉,触底刷新组件" />
      <tm-divider />
      <tm-text
        label="不支持在pc端使用.请在移动端查看效果,在nvue端使用的是原生高性能下拉组件,非nvue端使用自定下拉组件."
      />
      <tm-scrolly v-model="pull" @refresh="refresh">
        <tm-text label="触摸区域,体验下拉刷新操作." />
        <view v-for="(item, index) in 50" :key="index" style="height: 40px" class="px-36">
          <text>{{ item }}</text>
        </view>
      </tm-scrolly>
    </tm-sheet>
  </tm-app>
</template>
