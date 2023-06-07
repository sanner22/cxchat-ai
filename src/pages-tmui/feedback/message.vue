<script lang="ts" setup>
import { ref } from 'vue'
import tmMessage from '@/tmui/components/tm-message/tm-message.vue'

const msg = ref<InstanceType<typeof tmMessage> | null>(null)
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
          :font-size="26"
          label="默认"
          @click="msg?.show({})"
        />
        <tm-button
          :margin="[12, 12]"
          color="red"
          :width="120"
          :height="56"
          :font-size="26"
          label="错误"
          @click="msg?.show({ model: 'error' })"
        />
        <tm-button
          :margin="[12, 12]"
          color="orange"
          :width="120"
          :height="56"
          :font-size="26"
          label="警告"
          @click="msg?.show({ model: 'warn' })"
        />
        <tm-button
          :margin="[12, 12]"
          color="pink"
          :width="120"
          :height="56"
          :font-size="26"
          label="疑问"
          @click="msg?.show({ model: 'quest' })"
        />
        <tm-button
          :margin="[12, 12]"
          color="green"
          :width="120"
          :height="56"
          :font-size="26"
          label="成功"
          @click="msg?.show({ model: 'success' })"
        />
        <tm-button
          :margin="[12, 12]"
          color="green"
          text
          :shadow="0"
          :width="120"
          :height="56"
          :font-size="26"
          label="禁止"
          @click="msg?.show({ model: 'disabled' })"
        />
        <tm-button
          :margin="[12, 12]"
          color="black"
          :width="120"
          :height="56"
          :font-size="26"
          label="等待"
          @click="msg?.show({ model: 'wait' })"
        />
        <tm-button
          :margin="[12, 12]"
          color="primary"
          :width="120"
          :height="56"
          :font-size="26"
          label="加载中"
          @click="msg?.show({ model: 'load' })"
        />
      </view>
    </tm-sheet>
    <tm-message ref="msg" />
  </tm-app>
</template>
