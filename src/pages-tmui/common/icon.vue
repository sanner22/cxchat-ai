<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'
import { customfont } from './customIcon/customiconfont'
import fontList from '@/tmui/tool/tmicon/iconfont.json'
import { SetClipboardData } from '@/utils/uniapi'
import { HideLoading, Loading, Toast } from '@/utils/uniapi/prompt'

// #ifdef APP-NVUE || APP-PLUS-NVUE

const domModule = weex.requireModule('dom')

// eslint-disable-next-line unused-imports/no-unused-vars
const animation = uni.requireNativePlugin('animation')
// #endif

const spin = ref(true)
const showAll = ref(false)
const deg = ref(0)
const list = ref<{ name: string; text: string }[]>([])

// 演示自定义图标
// #ifdef APP-PLUS-NVUE
onBeforeMount(() => {
  domModule.addRule('fontFace', {
    fontFamily: 'myicon', // 注意这里必须是驼峰命名，跟上面的css样式对照
    src: `url('data:font/ttf;charset=utf-8;base64,${customfont}')`,
  })
})
// #endif
onBeforeUnmount(() => {
  list.value = []
})
onMounted(() => {
  Loading('...', { mask: true })
  const ls_list = fontList.glyphs.slice(0, 30)
  setTimeout(() => {
    for (let i = 0; i < ls_list.length; i++)
      list.value.push({ name: fontList.css_prefix_text + ls_list[i].font_class, text: ls_list[i].name })

    HideLoading()
  }, 100)
})

// 显示全部图标
const onShowAll = () => {
  showAll.value = true
  const ls_list = fontList.glyphs // 全部显示
  list.value = []
  Loading('...', { mask: true })
  for (let i = 0; i < ls_list.length; i++)
    list.value.push({ name: fontList.css_prefix_text + ls_list[i].font_class, text: ls_list[i].name } as never)

  HideLoading()
}
function onclick(item: any) {
  SetClipboardData(item.name).then(() => Toast('复制成功'))
}
</script>

<template>
  <tm-app>
    <tm-sheet :margin="[32, 32, 32, 16]">
      <tm-text :font-size="24" _class="font-weight-b" label="基本示例" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-icon :font-size="50" name="tmicon-playcircle-fill" />
        <tm-icon color="primary" :font-size="50" name="tmicon-user-fill" />
        <tm-icon color="red" :font-size="50" name="tmicon-minus-circle-fill" />
      </view>
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 16]">
      <tm-text :font-size="24" _class="font-weight-b" label="图片图标" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-icon
          color="red"
          :font-size="80"
          name="https://roundicons.com/wp-content/uploads/2017/09/PIzza-freebie-icon.png"
        />
        <tm-icon
          color="red"
          :font-size="80"
          name="https://roundicons.com/wp-content/uploads/2017/09/Rheindeer-freebie-icon.png"
        />
        <tm-icon
          color="red"
          :font-size="80"
          name="https://roundicons.com/wp-content/uploads/2017/09/Donut-freebie-icon.png"
        />
      </view>
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 16]">
      <tm-text :font-size="24" _class="font-weight-b" label="自定义图标" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-icon customicon name="myicon-music-e617" />
        <tm-icon customicon name="myicon-news-e618" />
        <tm-icon customicon name="myicon-phone-e619" />
      </view>
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 16]">
      <tm-text :font-size="24" _class="font-weight-b" label="spin 旋转图标" />
      <tm-divider />
      <tm-icon :spin="spin" :font-size="50" name="tmicon-shuaxin" @click="spin = !spin" />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 16]">
      <tm-text :font-size="24" _class="font-weight-b" label="rotate-deg 旋转图标角度与spin不能混用" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-button :margin="[24, 0]" label="+90deg" @click="deg += 90" />
        <tm-button :shadow="0" text :border="2" outlined :margin="[24, 0]" label="-90deg" @click="deg -= 90" />
      </view>
      <view class="pa-32">
        <tm-icon rotate :rotate-deg="deg" :font-size="50" name="tmicon-angle-down" />
      </view>
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 16]">
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        :label="`部分参考图标(共${fontList.glyphs.length}个)，前缀【tmicon-】`"
      />
      <tm-divider />

      <tm-grid :col="4" :width="630">
        <tm-grid-item v-for="(item, index) in list" :key="index" :height="140" @click="onclick(item)">
          <tm-icon :font-size="42" :name="item.name" />
          <tm-text :label="item.text" :font-size="22" />
        </tm-grid-item>
      </tm-grid>
      <!-- #ifndef MP -->
      <tm-button v-if="!showAll" block label="展示所有图标(过多会卡)" @click="onShowAll" />
      <!-- #endif -->
    </tm-sheet>
  </tm-app>
</template>
