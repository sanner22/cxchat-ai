<script lang="ts" setup>
function formart(val: string) {
  return `${val}%`
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-slider :width="600" :height="6" :default-value="80" />
      <tm-slider color="red" :width="600" :height="6" :default-value="20" />
      <tm-slider color="white" :width="600" :height="6" :default-value="50" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="双向滑块" />
      <tm-divider />
      <view class="flex flex-row flex-row-cneter-center">
        <tm-slider color="white" :width="300" :height="6" :default-value="[10, 50]" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="标签,格式化显示,拖动将显示百分比" />
      <tm-divider />
      <tm-slider
        :formart="formart"
        :step="5"
        show-label
        color="green"
        :width="600"
        :height="6"
        :default-value="[10, 50]"
      />
    </tm-sheet>
  </tm-app>
</template>
