<script setup lang="ts">
import { computed, ref } from 'vue'

const flag = ref(false)
const onChange = () => {
  flag.value = !flag.value
}

const c1 = computed(() => {
  return { 'uno-bg-blue-600:80': flag.value, 'uno-text-green-600/80': !flag.value }
})

const c2 = computed(() => {
  return [
    flag.value ? 'uno-bg-blue-600:80' : 'uno-bg-red-600:80',
    !flag.value ? 'uno-text-yellow-600/80' : 'uno-text-green-600/80',
  ]
})
</script>

<template>
  <tm-app>
    <tm-sheet :margin="[32]">
      <view class="uno-mb-3 uno-text-xs" :class="{ 'uno-bg-blue-600:80': flag, 'uno-text-green-600/80': !flag }">
        <tm-text :label="JSON.stringify(c1)" />
      </view>
      <view class="uno-mb-3 uno-text-xs" :class="c1">
        <tm-text :label="JSON.stringify(c1)" />
      </view>

      <view class="uno-mb-3 uno-text-xs" :class="[!flag ? 'uno-text-yellow-600/80' : 'uno-text-green-600/80']">
        <tm-text :label="`${c2}`" />
      </view>
      <view class="uno-mb-3 uno-text-xs" :class="[!flag ? 'uno-bg-blue-600:80' : 'uno-bg-red-600:80']">
        <tm-text :label="`${c2}`" />
      </view>
      <view
        class="uno-mb-3 uno-text-xs"
        :class="[
          !flag ? 'uno-bg-blue-600:80' : 'uno-bg-red-600:80',
          !flag ? 'uno-text-yellow-600/80' : 'uno-text-green-600/80',
        ]"
      >
        <tm-text :label="`${c2}`" />
      </view>

      <tm-button color="primary" block class="uno-mt-15px uno-flex uno-flex-row" _class="uno-flex-auto" @click="onChange">
        change flag
      </tm-button>
    </tm-sheet>
  </tm-app>
</template>
