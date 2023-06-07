<script lang="ts" setup>
import { ref } from 'vue'
import type { qrOpts } from '@/tmui/components/tm-qrcode/interface'

const str = ref('我爱你tmui.design')
const cfig = ref<qrOpts>({ str: str.value })
const vsd = ref('0')

function change(e: any) {
  const type = Number(e)
  if (type === 0) {
    cfig.value = { baseColor: '#FFFFFF', forgroundColor: '#000000', str: str.value }
  }
  else if (type === 1) {
    cfig.value = { baseColor: '#FFFFFF', forgroundColor: '#FF0000', str: str.value }
  }
  else if (type === 2) {
    cfig.value = { baseColor: '#FFFFFF', forgroundColor: ['#FF0000', '#FFFF00'], str: str.value }
  }
  else if (type === 3) {
    cfig.value = { baseColor: ['#FF0000', '#FFFF00'], forgroundColor: '#000000', str: str.value }
  }
  else if (type === 4) {
    cfig.value = {
      logoImage: 'https://cdn.tmui.design/public/design/logoCir.png',
      str: str.value,
      logoWidth: 30,
      logoHeight: 30,
    }
  }
  else if (type === 5) {
    cfig.value = { border: 0.1, str: str.value }
  }
  else if (type === 6) {
    cfig.value = {
      forgroundColor: '#FFFFFF',
      str: str.value,
      backgroundImage: 'https://cdn.tmui.design/public/echart/qrbg.jpg',
    }
  }
}
function changeStr() {
  cfig.value = { baseColor: '#FFFFFF', forgroundColor: '#000000', str: str.value }
  vsd.value = '0'
}
</script>

<template>
  <tm-app>
    <tm-sheet _class="flex-col">
      <tm-text :font-size="30" _class="font-weight-b" label="基础示例,更多玩法见文档" />
      <tm-divider />
      <tm-input v-model="str" :border="1" search-label="生成" @search="changeStr" />
      <tm-divider />
      <tm-radio-group v-model="vsd" default-value="0" @change="change">
        <tm-radio value="0" label="基础" />
        <tm-radio value="1" label="红码" />
        <tm-radio value="2" label="渐变" />
        <tm-radio value="3" label="彩色背景" />
        <tm-radio value="4" label="加logo" />
        <tm-radio value="5" label="改变边距" />
        <tm-radio value="6" label="背景图" />
      </tm-radio-group>
      <tm-divider />
      <tm-qrcode :option="cfig" />
    </tm-sheet>
  </tm-app>
</template>
