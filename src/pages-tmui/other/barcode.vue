<script lang="ts" setup>
import { ref } from 'vue'
import type { Baroptions } from '@/tmui/components/tm-barcode/drawing'

const opts = ref<Baroptions>({ lineColor: '#000000', fontSize: 20, width: 2, text: '123 456 89' } as Baroptions)
</script>

<template>
  <tm-app>
    <tm-sheet :follow-dark="false">
      <tm-text _class="text-weight-b" label="条形码，全端支持" />
      <tm-text
        :font-size="24"
        label="支持的码制非常的丰富，由于我本人非工业人员，对于条码制式不太了解，但程序提供了常见的:CODE128 CODE39 EAN_UPC系列 ITF MSI pharmacode"
      />
      <tm-text color="red" label="尽量横屏生成，数字多，生成的条形会溢出画布导致数据残缺，无法识别哦~" />

      <view class="flex flex-center">
        <tm-barcode :width="636" :option="opts" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <view class="flex flex-row flex-row-bottom-start">
        <tm-text label="属性设置" />
        <tm-text :font-size="22" _class="ml-10" label="(实时生效)" />
      </view>
      <tm-divider />
      <tm-radio-group v-model="opts.lineColor" default-value="#000000">
        <tm-radio value="#000000" label="黑色" />
        <tm-radio value="#0000FF" label="蓝色" />
        <tm-radio value="#FF0000" label="红色" />
      </tm-radio-group>
      <tm-divider />
      <tm-input v-model="opts.text" prefix-label="文本内容" align="right" placeholder="请输入文本" type="text" />
      <tm-input
        v-model="opts.fontSize"
        :margin="[0, 24]"
        prefix-label="字体大小"
        align="right"
        placeholder="请输入字号"
        type="number"
      />
      <tm-input v-model="opts.width" prefix-label="线宽PX" align="right" placeholder="请输入线条宽度" type="number" />
    </tm-sheet>
  </tm-app>
</template>
