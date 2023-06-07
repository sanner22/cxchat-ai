<script lang="ts" setup>
import { ref } from 'vue'
const testNum = ref<number[]>([])
for (let i = 0; i < 10; i++) testNum.value.push(i)

const del = (index: number) => {
  testNum.value.splice(index, 1)
}
const add = (index: number) => {
  testNum.value.push(index)
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例(点击项目减少)" />

      <tm-divider />
      <tm-grid :width="638" :col="3">
        <tm-grid-item v-for="(item, index) in testNum" :key="index" @click="del(index)">
          <tm-text :label="item" />
        </tm-grid-item>
      </tm-grid>
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <tm-text :font-size="24" _class="font-weight-b mb-24" label="含有边线(点击项目新增)" />
      <tm-grid show-border :width="638" :col="5">
        <tm-grid-item v-for="(item, index) in testNum" :key="index" @click="add(index)">
          <tm-text :label="item" />
        </tm-grid-item>
      </tm-grid>
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 0]" :padding="[24]">
      <tm-text :font-size="24" _class="font-weight-b" label="带角标的宫格" />
      <tm-divider />
      <tm-grid :width="638" :col="4">
        <tm-grid-item dot>
          <tm-text label="宫格文本" />
        </tm-grid-item>
        <tm-grid-item count="HOT">
          <tm-text label="宫格文本" />
        </tm-grid-item>
        <tm-grid-item :count="55">
          <tm-text label="宫格文本" />
        </tm-grid-item>
        <tm-grid-item icon="tmicon-gem">
          <tm-text label="宫格文本" />
        </tm-grid-item>
      </tm-grid>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="自定更多内容" />
      <tm-divider />
      <tm-grid :width="638" :col="3">
        <tm-grid-item :height="120" dot>
          <tm-icon name="tmicon-user-fill" :font-size="42" />
          <tm-text _class="pt-10" :font-size="22" label="宫格文本" />
        </tm-grid-item>
        <tm-grid-item color="orange" :height="120" count="积分">
          <tm-icon name="tmicon-cog-fill" :font-size="42" />
          <tm-text _class="pt-10" :font-size="22" label="宫格文本" />
        </tm-grid-item>
        <tm-grid-item color="green" :height="120" :count="55">
          <tm-icon name="tmicon-heart-fill" :font-size="42" />
          <tm-text :font-size="22" label="宫格文本" />
        </tm-grid-item>
        <tm-grid-item color="pink" :height="120" icon="tmicon-gem">
          <tm-icon name="tmicon-layergroup-fill" :font-size="42" />
          <tm-text _class="pt-10" :font-size="22" label="宫格文本" />
        </tm-grid-item>
        <tm-grid-item :height="120">
          <tm-icon color="blue" name="tmicon-lightbulb-fill" :font-size="42" />
          <tm-text _class="pt-10" :font-size="22" label="宫格文本" />
        </tm-grid-item>
      </tm-grid>
    </tm-sheet>
  </tm-app>
</template>
