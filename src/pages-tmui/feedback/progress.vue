<script lang="ts" setup>
import { ref } from 'vue'

const percent = ref(50)
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础属性,更多玩法请前往文档。" />
      <tm-divider />
      <tm-progress v-model:percent="percent" :width="636" />
      <view class="py-12" />
      <tm-progress v-model:percent="percent" linear="right" :width="636" color="red" />
      <view class="py-12" />
      <tm-progress v-model:percent="percent" linear="right" show-bar :width="636" color="orange" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="圆形" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-progress v-model:percent="percent" model="circle" bg-color="grey-4" :height="24" :width="200" />
        <view class="py-12" />
        <tm-progress
          v-model:percent="percent"
          model="circle"
          bg-color="grey-4"
          color="pink"
          :height="24"
          :width="200"
        />
        <view class="py-12" />
        <tm-progress
          v-model:percent="percent"
          model="circle"
          semicircle-flip
          bg-color="grey-4"
          :height="24"
          :width="200"
        />
        <view class="py-12" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="半圆形，以及镜像" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-progress v-model:percent="percent" model="circle" color="yellow" semicircle :height="24" :width="200" />
        <view class="py-12" />

        <tm-progress
          v-model:percent="percent"
          model="circle"
          semicircle
          semicircle-flip
          :height="24"
          color="orange"
          :width="200"
        />
        <view class="py-12" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="进度操作" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-button label="增加" @click="percent = percent >= 100 ? 0 : percent + 10" />
        <view class="px-12" />
        <tm-button color="red" label="减少" @click="percent = percent <= 0 ? 0 : percent - 10" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
