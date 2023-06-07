<script lang="ts" setup>
import { ref } from 'vue'
import tmTranslate from '@/tmui/components/tm-translate/tm-translate.vue'

const translate = ref<InstanceType<typeof tmTranslate> | null>(null)
setTimeout(() => {
  translate.value?.play()
}, 1500)
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="下面是基础演示属性,更多玩法请前往文档。" />
      <tm-text
        color="red"
        _class="font-weight-b"
        label="一共6组动效，每组动效都可以反向播放。手动或者自动控制详见文档。本组件库所有动效都是由下面6组动效完成。"
      />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-translate ref="translate" name="fade">
          <tm-sheet color="blue" :padding="[0, 0]" :width="100" :height="100" />
        </tm-translate>
        <tm-translate name="zoom">
          <tm-sheet color="blue" :padding="[0, 0]" :width="100" :height="100" />
        </tm-translate>
        <tm-translate name="left">
          <tm-sheet color="blue" :padding="[0, 0]" :width="100" :height="100" />
        </tm-translate>
        <tm-translate name="right">
          <tm-sheet color="blue" :padding="[0, 0]" :width="100" :height="100" />
        </tm-translate>
      </view>
      <view class="flex flex-row flex-wrap">
        <tm-translate name="down">
          <tm-sheet color="blue" :padding="[0, 0]" :width="100" :height="100" />
        </tm-translate>
        <tm-translate name="up">
          <tm-sheet color="blue" :padding="[0, 0]" :width="100" :height="100" />
        </tm-translate>
      </view>
    </tm-sheet>
  </tm-app>
</template>
