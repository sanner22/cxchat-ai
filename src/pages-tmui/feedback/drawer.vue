<script lang="ts" setup>
import { ref } from 'vue'
import type tmCalendarView from '@tmui/components/tm-calendar-view/tm-calendar-view.vue'

const calendarView = ref<InstanceType<typeof tmCalendarView> | null>(null)
const showWin = ref(false)
const showWin2 = ref(false)
const pos = ref('bottom')

function changPos(params: string) {
  pos.value = params
  showWin.value = true
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="下面是基础演示属性,更多玩法请前往文档。" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-button
          :margin="[12, 12]"
          color="white"
          :width="120"
          :height="56"
          :font-size="24"
          label="底部"
          @click="changPos('bottom')"
        />
        <tm-button
          :margin="[12, 12]"
          color="red"
          :width="120"
          :height="56"
          :font-size="24"
          label="顶部"
          @click="changPos('top')"
        />
        <tm-button
          :margin="[12, 12]"
          color="orange"
          :width="120"
          :height="56"
          :font-size="24"
          label="左边"
          @click="changPos('left')"
        />
        <tm-button
          :margin="[12, 12]"
          color="pink"
          :width="120"
          :height="56"
          :font-size="24"
          label="右边"
          @click="changPos('right')"
        />
        <tm-button
          :margin="[12, 12]"
          color="green"
          :width="120"
          :height="56"
          :font-size="24"
          label="居中"
          @click="changPos('center')"
        />
      </view>
    </tm-sheet>

    <tm-drawer ref="calendarView" v-model:show="showWin" :placement="pos">
      <tm-button
        :margin="[12, 12]"
        color="green"
        :width="120"
        :height="56"
        :font-size="24"
        label="内弹出"
        @click="showWin2 = true"
      />
      <tm-drawer ref="calendarView" v-model:show="showWin2" in-content :width="300" :height="300" :placement="pos" />
      <!-- <tm-picker :height="500" inContent v-model:show="showWin2" :columns="citydate"></tm-picker> -->
    </tm-drawer>
  </tm-app>
</template>
