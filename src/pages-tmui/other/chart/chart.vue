<script lang="ts" setup>
/**
   * 由于采用了es6 import，所以按需裁剪变得更为简单，无需去官网下载压缩包，想要用到什么就导入什么。
   * 按需裁剪包大小见官网配置：https://echarts.apache.org/zh/api.html#echarts.use
   */
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
// #ifndef MP
import type { ECharts } from 'echarts'
import { chartdata } from '../chart/chartdata'
import tmChart from '@/tmui/components/tm-chart/tm-chart.vue'

const dkey = ref('lineChart')
onLoad((obj: any) => {
  if (obj?.key !== '' && typeof obj?.key != 'undefined')
    dkey.value = obj?.key ?? 'lineChart'
})
function chartInit(chart: ECharts) {
  chart.setOption(chartdata[dkey.value])
}
// #endif
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text
        :font-size="30"
        color="red"
        _class="text-weight-b"
        label="3.0.89开始真正的实现了所有平台的兼容，特别是在nvue下面更为流畅，性能是最好的。"
      />
      <tm-text
        :font-size="24"
        label="这里只展示部分，更多请见Echarts(5.3.2)官网示例，官网所有示例均可用。包大小可以自行裁剪。以下示例，为官网复制过来,样式可能不太好看，请自行配置属性。webpc也兼容 "
      />
      <tm-text
        :font-size="24"
        color="red"
        label="特别强调：组件从3.0.89开始已经兼容了nvue端echarts(5.4.3)，丝滑展示图表。但因为nvue是我映射的api接口，因此只提供部分接口供你使用。具体映射的接口数量见文档。"
      />
      <!-- #ifdef MP -->
      <tm-text color="red" label="小程序包超过大小,不演示,请前往h5或者app中预览效果." />
      <!-- #endif -->
    </tm-sheet>
    <!-- #ifndef MP -->
    <tm-chart :height="600" @on-init="chartInit" />
    <!-- #endif -->
  </tm-app>
</template>
