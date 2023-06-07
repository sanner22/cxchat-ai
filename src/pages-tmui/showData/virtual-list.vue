<script lang="ts" setup>
import { ref } from 'vue'

const imglist = ref<any[]>([])
const getdata = (e: string) => {
  // eslint-disable-next-line promise/param-names
  return new Promise((res) => {
    setTimeout(() => {
      if (e === 'top') {
        imglist.value = []
        for (let i = 0; i < 10; i++) {
          imglist.value.push({
            src: 'https://i0.pickpik.com/photos/298/434/513/beach-dawn-dusk-ocean-thumb.jpg',
            index: i,
          })
        }
      }
      else if (e === 'bottom') {
        const len = imglist.value.length
        for (let i = len; i < 10 + len; i++) {
          imglist.value.push({
            src: 'https://i0.pickpik.com/photos/298/434/513/beach-dawn-dusk-ocean-thumb.jpg',
            index: i,
          })
        }
      }
      res(true)
    }, 2500)
  })
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text
        :font-size="30"
        _class="font-weight-b"
        label="基础示例,更多见文档，以下是展示你可以无限加载图片列表，你将看不到任何卡顿或者阻塞。超高性能的虚拟列表。"
      />
      <tm-divider />
      <view class="flex flex-col flex-col-top-center">
        <tm-virtual-list :load="getdata" :width="626" :height="900" :data="imglist" :item-height="160">
          <template #default="{ data }">
            <tm-sheet
              v-for="(item, index) in data"
              :key="index"
              :border="1"
              border-direction="bottom"
              :height="160"
              :width="626"
              _class="flex flex-row flex-row-center-start"
              :padding="[0, 0]"
              :margin="[0, 0]"
            >
              <view class="flex flex-row flex-row-center-between flex-1">
                <tm-image :width="200" :height="100" :src="item.src" />
                <tm-text :label="`image-Row-${item.index}`" />
              </view>
            </tm-sheet>
          </template>
        </tm-virtual-list>
      </view>
    </tm-sheet>
  </tm-app>
</template>
