<script lang="ts" setup>
import { ref } from 'vue'

const opts = ref({
  content: 'TMUI',
  fontSize: 12,
  lineHeight: 12,
  fullscreen: false,
  width: 60,
  height: 60,
  xGap: 0,
  yGap: 0,
  xOffset: 14,
  yOffset: 30,
  rotate: -20,
  image: '',
  imageOpacity: 0.24,
  imageWidth: 60,
  imageHeight: 60,
})
function handleUpload(res: { url: string }[]) {
  opts.value.image = res[0].url
}
</script>

<template>
  <tm-app>
    <tm-sheet :follow-dark="false">
      <tm-text _class="text-weight-b" label="页面水印" />
      <tm-text :font-size="24" label="简单点，满足就好" />
    </tm-sheet>
    <tm-watermark
      selectable
      :font-size="opts.fontSize"
      :line-height="opts.lineHeight"
      :fullscreen="opts.fullscreen"
      :width="opts.width"
      :height="opts.height"
      :x-offset="opts.xOffset"
      :y-offset="opts.yOffset"
      :x-gap="opts.xGap"
      :y-gap="opts.yGap"
      :rotate="opts.rotate"
      :content="opts.content"
      :image="opts.image"
      :image-width="opts.imageWidth"
      :image-height="opts.imageHeight"
      :image-opacity="opts.imageOpacity"
    >
      <tm-sheet>
        <view class="flex flex-row flex-row-bottom-start">
          <tm-text label="属性设置" />
          <tm-text :font-size="22" _class="ml-10" label="(实时生效)" />
        </view>
        <tm-divider />
        <tm-radio-group v-model="opts.fullscreen" :default-value="false">
          <tm-radio :value="true" label="全屏幕" />
          <tm-radio :value="false" label="包围内" />
        </tm-radio-group>
        <tm-divider />
        <tm-input v-model="opts.content" prefix-label="文本内容" align="right" placeholder="请输入文本" />
        <tm-input
          v-model.number="opts.fontSize"
          :margin="[0, 24]"
          prefix-label="字体大小"
          align="right"
          placeholder="请输入字号"
          type="number"
        />
        <tm-input
          v-model.number="opts.lineHeight"
          prefix-label="字体行高"
          align="right"
          placeholder="请输入行高"
          type="number"
        />
        <tm-input
          v-model.number="opts.rotate"
          :margin="[0, 24]"
          prefix-label="旋转角度"
          align="right"
          placeholder="请输入旋转角度"
          type="number"
        />
        <tm-input
          v-model.number="opts.width"
          prefix-label="宽度"
          align="right"
          placeholder="请输入宽度"
          type="number"
        />
        <tm-input
          v-model.number="opts.height"
          :margin="[0, 24]"
          prefix-label="高度"
          align="right"
          placeholder="请输入高度"
          type="number"
        />
        <tm-input
          v-model.number="opts.xGap"
          prefix-label="x 轴间隔"
          align="right"
          placeholder="请输入x 轴间隔"
          type="number"
        />
        <tm-input
          v-model.number="opts.yGap"
          :margin="[0, 24]"
          prefix-label="y 轴间隔"
          align="right"
          placeholder="请输入y 轴间隔"
          type="number"
        />
        <tm-input
          v-model.number="opts.xOffset"
          prefix-label="x 轴偏移"
          align="right"
          placeholder="请输入x 轴偏移"
          type="number"
        />
        <tm-input
          v-model.number="opts.yOffset"
          :margin="[0, 24]"
          prefix-label="y 轴偏移"
          align="right"
          placeholder="请输入y 轴偏移"
          type="number"
        />
        <tm-upload
          :width="636"
          :rows="1"
          :max-file="1"
          url="https://mockapi.eolink.com/tNYKNA7ac71aa90bcbe83c5815871a5b419601e96a5524d/upload"
          @change="handleUpload"
        />
        <tm-input
          v-model.number="opts.imageWidth"
          :margin="[0, 24]"
          prefix-label="图片宽度"
          align="right"
          placeholder="请输入图片宽度"
          type="number"
        />
        <tm-input
          v-model.number="opts.imageHeight"
          prefix-label="图片高度"
          align="right"
          placeholder="请输入图片高度"
          type="number"
        />
        <tm-input
          v-model.number="opts.imageOpacity"
          :margin="[0, 24]"
          prefix-label="图片透明度"
          align="right"
          placeholder="请输入图片透明度"
          type="number"
        />
      </tm-sheet>
    </tm-watermark>
  </tm-app>
</template>
