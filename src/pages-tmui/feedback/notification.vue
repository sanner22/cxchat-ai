<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import tmNotification from '@/tmui/components/tm-notification/tm-notification.vue'

const msg = ref<InstanceType<typeof tmNotification> | null>(null)
const placement = ref('topLeft')
function show(e: string) {
  placement.value = e
  nextTick(() => {
    msg.value?.show({ label: '呵呵' })
  })
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="下面是一些其它属性,更多玩法请前往文档。" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-button
          :margin="[12, 12]"
          color="white"
          :width="120"
          :height="56"
          :font-size="24"
          label="默认"
          @click="show('topLeft')"
        />
        <tm-button
          :margin="[12, 12]"
          color="red"
          :width="120"
          :height="56"
          :font-size="24"
          label="显示右边"
          @click="show('topRight')"
        />
        <tm-button
          :margin="[12, 12]"
          color="orange"
          :width="120"
          :height="56"
          :font-size="24"
          label="显示上方"
          @click="show('top')"
        />
        <tm-button
          :margin="[12, 12]"
          color="pink"
          :width="120"
          :height="56"
          :font-size="24"
          label="显示底左"
          @click="show('bottomLeft')"
        />
        <tm-button
          :margin="[12, 12]"
          color="green"
          :width="120"
          :height="56"
          :font-size="24"
          label="显示底右"
          @click="show('bottomRight')"
        />
        <tm-button
          :margin="[12, 12]"
          color="green"
          text
          :shadow="0"
          :width="120"
          :height="56"
          :font-size="24"
          label="显示底部"
          @click="show('bottom')"
        />
      </view>
    </tm-sheet>
    <tm-notification ref="msg" :placement="placement" label="消息提醒" />
  </tm-app>
</template>
