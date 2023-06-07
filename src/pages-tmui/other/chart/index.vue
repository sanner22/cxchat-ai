<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  {
    path: '/pages-tmui/other/chart/chart?key=lineChart',
    title: 'lineChart',
    img: 'https://cdn.tmui.design/public/echart/lineChart.jpg',
  },
  {
    path: '/pages-tmui/other/chart/chart?key=areaChart',
    title: 'areaChart',
    img: 'https://cdn.tmui.design/public/echart/areaChart.jpg',
  },
  {
    path: '/pages-tmui/other/chart/chart?key=areaChart2',
    title: 'areaChart2',
    img: 'https://cdn.tmui.design/public/echart/areaChart2.jpg',
  },
  {
    path: '/pages-tmui/other/chart/chart?key=bar',
    title: 'bar',
    img: 'https://cdn.tmui.design/public/echart/bar.jpg',
  },
  {
    path: '/pages-tmui/other/chart/chart?key=pie',
    title: 'pie',
    img: 'https://cdn.tmui.design/public/echart/pie.jpg',
  },
  {
    path: '/pages-tmui/other/chart/chart?key=sca',
    title: 'sca',
    img: 'https://cdn.tmui.design/public/echart/sca.jpg',
  },
  {
    path: '/pages-tmui/other/chart/chart?key=gau',
    title: 'gau',
    img: 'https://cdn.tmui.design/public/echart/gau.jpg',
  },
])

function navto(index: number) {
  uni.navigateTo({
    url: list.value[index].path,
  })
}
</script>

<template>
  <tm-app>
    <view class="ma-32">
      <tm-row :width="686" :column="2" transprent :gutter="10">
        <tm-col v-for="(item, index) in list" :key="index" _class="mb-10 round-2" :height="280" @click="navto(index)">
          <tm-image :src="item.img" :width="310" :height="220" />
          <tm-text :label="`图表${item.title}`" _class="py-12" />
        </tm-col>
        <tm-col _class="mb-10 round-2" :height="280">
          <tm-icon name="tmicon-plus" />
          <tm-text label="更多见Echarts官网" _class="py-12" />
        </tm-col>
      </tm-row>
    </view>
  </tm-app>
</template>
