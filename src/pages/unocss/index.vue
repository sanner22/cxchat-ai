<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import Iconify from '@/components/Iconify/index.vue'

const list = [
  { name: '字体 font', path: '/pages-unocss/font/index', icon: 'i-material-symbols-font-download-outline-rounded' },
  { name: '图标 icon', path: '/pages-unocss/icon/index', icon: 'i-line-md-iconify1' },
  { name: '尺寸 size', path: '/pages-unocss/size/index', icon: 'i-line-md-arrows-diagonal-rotated' },
  { name: '阴影 shadow', path: '/pages-unocss/shadow/index', icon: 'i-vaadin-square-shadow' },
  { name: '边框 border', path: '/pages-unocss/border/index', icon: 'i-material-symbols-border-outer-rounded' },
  { name: '边距 spacing', path: '/pages-unocss/spacing/index', icon: 'i-icon-park-twotone-distribute-horizontal-spacing' },
  { name: '快捷 shortcuts', path: '/pages-unocss/shortcuts/index', icon: 'i-material-symbols-switch-access-shortcut' },
  { name: '响应式 :class', path: '/pages-unocss/class/index', icon: 'i-ic-twotone-hotel-class' },
  { name: '颜色 color', path: '/pages-unocss/color/index', icon: 'i-ic-twotone-color-lens' },
  { name: '属性 attributify', path: '/pages-unocss/attributify-mode/index', icon: 'i-ic-twotone-edit-attributes' },
  { name: '动画 animation', path: '/pages-unocss/animation/index', icon: 'i-line-md-uploading-loop' },
  { name: '背景 bg', path: '/pages-unocss/bg/index', icon: 'i-ant-design-bg-colors-outlined' },
  { name: '伪类 first-last', path: '/pages-unocss/first-last/index', icon: 'i-material-symbols-first-page' },
  { name: '奇偶 odd-even', path: '/pages-unocss/odd-even/index', icon: 'i-fluent-number-row-24-regular' },
  { name: '间隔 space', path: '/pages-unocss/space/index', icon: 'i-carbon-name-space' },
  { name: '间隔 gap', path: '/pages-unocss/gap/index', icon: 'i-carbon-name-space' },
  { name: '分割线 divide', path: '/pages-unocss/divide/index', icon: 'i-radix-icons-divider-horizontal' },
  { name: '指令 apply', path: '/pages-unocss/apply/index', icon: 'i-fluent-text-change-accept-20-filled' },
  { name: '分组 group', path: '/pages-unocss/group/index', icon: 'i-carbon-cics-system-group' },
]

const to = (to: string) => {
  uni.navigateTo({
    url: to,
  })
}

// loading
const loading = ref(true)
onLoad((_e) => {
  loading.value = false
})
</script>

<template>
  <tm-app>
    <tm-navbar title="UnoCSS 示例" :shadow="0" hide-back />

    <view class="uno-my-20px uno-center">
      <tm-image src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg" :width="80" :height="80" unit="px" />
    </view>

    <view class="uno-px-15px">
      <tm-skeleton v-if="loading" :rows="3" />
      <view v-else class="uno-grid uno-grid-cols-3 uno-gap-10px uno-justify-items-center">
        <tm-sheet
          v-for="(item, index) in list"
          :key="index"
          :margin="[0, 0]"
          :round="5"
          class="uno-w-full uno-flex uno-flex-col"
          _class="uno-center"
          @click="to(item.path)"
        >
          <iconify :icon="item.icon" />
          <tm-text class="uno-mt-6px" _class="uno-ellipsis" :label="item.name" :font-size="12" unit="px" />
        </tm-sheet>
      </view>
    </view>
  </tm-app>
</template>
