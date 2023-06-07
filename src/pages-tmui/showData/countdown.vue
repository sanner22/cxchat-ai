<script lang="ts" setup>
import { ref } from 'vue'
import tmCountdown from '@/tmui/components/tm-countdown/tm-countdown.vue'

const cu = ref<InstanceType<typeof tmCountdown> | null>(null)

function actions(action: string) {
  console.log(action)
  switch (action) {
    case 'resinit':
      cu.value?.resinit()
      break

    case 'start':
      cu.value?.start()
      break

    case 'pause':
      cu.value?.pause()
      break

    case 'stop':
      cu.value?.stop()
      break

    default:
      break
  }
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,默认是精确到毫秒级" />
      <tm-divider />
      <view>
        <tm-countdown ref="cu" :auto-start="false" />
      </view>
      <view class="mt-32 flex flex-row flex-around">
        <tm-button size="small" label="重置" @click="actions('resinit')" />
        <tm-button
          size="small"
          :width="140"
          :font-size="22"
          label="开始/继续"
          color="green"
          @click="actions('start')"
        />
        <tm-button size="small" label="暂停" color="orange" @click="actions('pause')" />
        <tm-button size="small" label="结束" color="red" @click="actions('stop')" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
