<script lang="ts" setup>
import { ref } from 'vue'
import tmSignBoard from '@/tmui/components/tm-sign-board/tm-sign-board.vue'

const board = ref<InstanceType<typeof tmSignBoard> | null>(null)

const colors = ['red', 'blue', 'black', 'green']
const colorNow = ref('red')
const lineWidth = ref(5)
const saveImg = async () => {
  const src = await board.value?.save()
  console.log(src)
  uni.showToast({ title: '成功，请查看日志', icon: 'none' })
  // #ifndef H5
  uni.previewImage({
    current: src,
    urls: [src as string],
  })
  // #endif
}
</script>

<template>
  <tm-app>
    <tm-sheet :width="662">
      <tm-text label="签名板全端兼容，用于签名使用。请在下方书写" />
      <tm-divider />
      <tm-sign-board ref="board" :line-color="colorNow" :line-width="lineWidth" :width="638" :height="400" />
      <tm-divider />
      <view class="py-24">
        <tm-text label="选择书写颜色" />
      </view>
      <tm-radio-group v-model="colorNow">
        <tm-radio v-for="(item, index) in colors" :key="index" :color="item" :value="item" :label="item" />
      </tm-radio-group>
      <view class="py-24">
        <tm-text label="拖动改变粗细" />
      </view>
      <tm-slider v-model="lineWidth" :max="20" :default-value="lineWidth" />
      <tm-divider />
      <view class="flex flex-row flex-center">
        <tm-button label="清空" @click="board?.clear()" />
        <tm-button color="green" :margin="[24, 0]" label="保存签名" @click="saveImg" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
