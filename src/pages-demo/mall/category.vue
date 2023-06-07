<script setup lang="ts">
import { ref } from 'vue'

const active = ref(3)
const list = ref([
  { text: '联名系列', id: 1 },
  { text: '明星同款', id: 2 },
  { text: '潮流尖货', id: 3 },
  { text: '男子', id: 4, icon: 'tmicon-md-chatboxes', dotCount: 6 },
  { text: '女子', id: 5 },
  { text: '男童', id: 6, dotCount: 6 },
  { text: '女童', id: 7 },
  { text: '配件', id: 8, dotCount: 1 },
  { text: '运动装备', id: 9 },
  { text: '运动科技', id: 10 },
  { text: '跑步专区', id: 10 },
  { text: '篮球专区', id: 10 },
  { text: '羽毛球专区', id: 10 },
  { text: '乒乓球专区', id: 10 },
])

const system = uni.$tm.u.getWindow()
const px2rpx = (px: number) => uni.$tm.u.torpx(px)
</script>

<template>
  <tm-app>
    <tm-side-menu v-model:active="active" :height="px2rpx(system.height)" :list="list">
      <view uno-p-15px>
        <tm-text label="男子运动鞋" :font-size="30" uno-my-10px uno-font-bold />
        <img src="https://lining.com/mobile/img/index/202212302238/banner09.jpg" uno-w-full uno-h-175px uno-block uno-mb-10px>
        <view uno-grid="~ cols-3 gap-10px">
          <tm-sheet :margin="[0]" :padding="[0]" _class="uno-items-center">
            <img uno-w-full uno-h-76px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARBT001-3/95bed2b32c9f8786bb9ee1ba412338fa30aee9da107046677b32ac23ccd54df0b38624078f777ed3.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="跑步鞋" :font-size="24" />
          </tm-sheet>
          <tm-sheet :margin="[0]" :padding="[0]" _class="uno-items-center">
            <img uno-w-full uno-h-76px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT013-1/08c5268445ffd11e3360ad312456ffe5797c13616d860611265917cadf81915ab38624078f777ed3.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="篮球鞋" :font-size="24" />
          </tm-sheet>
          <tm-sheet :margin="[0]" :padding="[0]" _class="uno-items-center">
            <img uno-w-full uno-h-76px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ABAR071-4/d3d7cca209168e712e75d4345c99d577cd7ff8b74b7f1db47458f7ceebf2a20db38624078f777ed3.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="运动生活鞋" :font-size="24" />
          </tm-sheet>
        </view>

        <tm-text label="男子运动服" :font-size="30" uno-mt-20px uno-mb-10px uno-font-bold />
        <img src="https://lining.com/mobile/img/index/202212302238/banner06.jpg" uno-w-full uno-h-175px uno-block uno-mb-10px>
        <view uno-grid="~ cols-3 gap-10px">
          <tm-sheet :margin="[0]" :padding="[0]" _class="uno-items-center">
            <img uno-w-full uno-h-76px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/goods/image/AWDT343-2/233228fe22504c49938b4bf55a7aa62d.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="卫衣" :font-size="24" uno-mt-10px />
          </tm-sheet>
          <tm-sheet :margin="[0]" :padding="[0]" _class="uno-items-center">
            <img uno-w-full uno-h-76px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/goods/image/AFDT549-1/fd4d50629b7f48ffaf75443fe977adf3.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="外套马甲" :font-size="24" uno-mt-10px />
          </tm-sheet>
          <tm-sheet :margin="[0]" :padding="[0]" _class="uno-items-center">
            <img uno-w-full uno-h-76px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/goods/image/AKLT599-1/e19e667ef85b4ba29ffee713081a31bb.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="裤装" :font-size="24" uno-mt-10px />
          </tm-sheet>
          <tm-sheet :margin="[0]" :padding="[0]" _class="uno-items-center">
            <img uno-w-full uno-h-76px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/AYMS123-2/65a1d064d4749e93b41ceeff787edcb27afa5f14331343eace4b233541986410b38624078f777ed3.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="羽绒服" :font-size="24" uno-mt-10px />
          </tm-sheet>
          <tm-sheet :margin="[0]" :padding="[0]" _class="uno-items-center">
            <img uno-w-full uno-h-76px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/goods/image/AJMS107-9/bb93c3ec2a434625b656d1c2c10843f4.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="棉服" :font-size="24" uno-mt-10px />
          </tm-sheet>
          <tm-sheet :margin="[0]" :padding="[0]" _class="uno-items-center">
            <img uno-w-full uno-h-76px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/AHSS239-2/a63d55207280ddcef2fed24235cb83e4cc123f190f0656f7f46b8afd221e2883b38624078f777ed3.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="T恤POLO衫" :font-size="24" uno-mt-10px />
          </tm-sheet>
        </view>
      </view>
    </tm-side-menu>
  </tm-app>
</template>

<style lang="scss" scoped></style>
