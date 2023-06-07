<script lang="ts" setup>
import { ref } from 'vue'
import NavbarSearch from '@/components/NavbarSearch/index.vue'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import { useRouter } from '@/hooks/router'

const router = useRouter()
const sysinfo = uni.$tm.u.getWindow()
const px2rpx = (px: number) => uni.$tm.u.torpx(px)

const tabsList = ref([
  { key: '1', title: '尖货' },
  { key: '2', title: '联名系列' },
  { key: '3', title: '专业篮球', dot: true, dotColor: 'yellow' },
  { key: '4', title: '跑步', dot: false, count: '3' },
  { key: '5', title: '健身' },
  { key: '6', title: '运动生活' },
  { key: '7', title: '乒乓球', dot: true, dotColor: 'yellow' },
  { key: '8', title: '羽毛球', dot: false, count: '3' },
])

const carouselList = [
  'https://lining.com/mobile/img/index/202212302238/banner01.jpg',
  'https://lining.com/mobile/img/index/202212302238/banner02.jpg',
  'https://lining.com/mobile/img/index/202212302238/banner03.jpg',
  'https://lining.com/mobile/img/index/202212302238/banner04.jpg',
  'https://lining.com/mobile/img/index/202212302238/banner05.jpg',
  'https://lining.com/mobile/img/index/202212302238/banner06.jpg',
  'https://lining.com/mobile/img/index/202212302238/banner07.jpg',
]

const logoList = [
  'https://lining.com/mobile/img/index/logo/logo1.jpg',
  'https://lining.com/mobile/img/index/logo/logo2.jpg',
  'https://lining.com/mobile/img/index/logo/logo3.jpg',
  'https://lining.com/mobile/img/index/logo/logo4.jpg',
  'https://lining.com/mobile/img/index/logo/logo5.jpg',
  'https://lining.com/mobile/img/index/logo/logo6.jpg',
]

const scrollxList = [
  'https://mlining-1302115263.cos.ap-guangzhou.myqcloud.com/postsystem/docroot/images/ln/20230209/pc/%E9%9E%8B%E7%A7%91%E6%8A%801.png',
  'https://mlining-1302115263.cos.ap-guangzhou.myqcloud.com/postsystem/docroot/images/ln/20230209/pc/%E9%9E%8B%E7%A7%91%E6%8A%802.png',
  'https://mlining-1302115263.cos.ap-guangzhou.myqcloud.com/postsystem/docroot/images/ln/20230209/pc/%E9%9E%8B%E7%A7%91%E6%8A%803.png',
  'https://mlining-1302115263.cos.ap-guangzhou.myqcloud.com/postsystem/docroot/images/ln/20230209/pc/%E9%9E%8B%E7%A7%91%E6%8A%804.png',
  'https://mlining-1302115263.cos.ap-guangzhou.myqcloud.com/postsystem/docroot/images/ln/20230209/pc/%E9%9E%8B%E7%A7%91%E6%8A%805.png',
]

const newTabsList = [
  { key: '1', title: '鞋品' },
  { key: '2', title: '服饰' },
  { key: '3', title: '配件' },
]

const starTabsList = [
  { key: '1', title: '跑步鞋' },
  { key: '2', title: '篮球鞋' },
  { key: '3', title: '板鞋' },
]
</script>

<template>
  <tm-app>
    <tm-navbar title="商城首页" :shadow="0" hide-home>
      <template #left>
        <navbar-search placeholder="搜索" @click="router.go('./list?focus=1')" />
      </template>
    </tm-navbar>

    <tm-sticky :offset="px2rpx(sysinfo.statusBarHeight + 44)">
      <template #sticky>
        <tm-tabs :show-tabs-line-ani="false" item-model="textLight" :item-width="140" :list="tabsList" :width="px2rpx(sysinfo.width)" default-name="1" />
      </template>

      <tm-carousel autoplay model="dot" :margin="[0, 0]" :round="0" :list="carouselList" />

      <view uno-grid="~ cols-3 gap-10px" uno-m-15px>
        <view v-for="(item, index) in logoList" :key="index">
          <!-- <img :src="item" uno-w-full uno-rounded uno-shadow> -->
          <tm-image :src="item" :width="108" :height="45" unit="px" />
        </view>
      </view>

      <view uno-m="15px" uno-mt="0" uno-flex="~ row" uno-justify-between uno-items-end>
        <tm-text label="尖货发售" :font-size="32" uno-font-bold />
        <tm-text label="滑动查看更多" :font-size="24" uno-opacity-75 />
      </view>
      <view uno-mx-15px uno-mb-15px>
        <tm-scrollx :width="px2rpx(sysinfo.width - 30)" :height="px2rpx(207 + 15)">
          <view uno-flex="~ row nowrap gap-10px">
            <view v-for="(item, index) in scrollxList" :key="index">
              <tm-image :src="item" :width="150" :height="207" unit="px" />
            </view>
          </view>
        </tm-scrollx>
      </view>

      <view uno-flex="~ row" uno-justify-between uno-items-end uno-m-15px>
        <tm-text label="会员尊享权益" :font-size="32" uno-font-bold />
      </view>
      <image src="https://bizmid-material-online-1302115263.file.myqcloud.com/persist/ml1x6fmrer3z/ml1x6fmrer3z-%E4%BC%9A%E5%91%98%E6%9D%83%E7%9B%8A_03.jpg?imageMogr2/thumbnail/750x432!/strip/ignore-error/1" uno-block uno-w-full :height="376" />

      <view uno-flex="~ row" uno-items-start uno-m-15px>
        <tm-text label="献礼情人节" :font-size="32" uno-font-bold />
        <tm-text label="💕" :font-size="24" uno-ml-2px />
      </view>
      <image src="https://bizmid-material-online-1302115263.file.myqcloud.com/persist/mmp5z2ppaunk/mmp5z2ppaunk-%E4%BC%98%E6%83%A0%E5%88%B8.gif?imageMogr2/thumbnail/750x377!/strip/ignore-error/1" alt="" uno-block uno-w-full uno-my-16px uno-h-188px />
      <!-- <tm-sheet color="pink" :padding="[32]" :round="5">
        <view uno-grid="~ cols-3">
          <view uno-flex="~ col" uno-center>
            <tm-text :font-size="16" label="RMB" />
            <tm-text :font-size="60" label="50" />
            <tm-text :font-size="18" label="满269使用" />
            <tm-tag label="点亮分享" :round="15" color="orange" uno-mt-6px />
          </view>
          <view uno-flex="~ col" uno-center>
            <tm-text :font-size="16" label="RMB" />
            <tm-text :font-size="60" label="60" />
            <tm-text :font-size="18" label="满369使用" />
            <tm-tag label="点亮分享" :round="15" color="orange" uno-mt-6px />
          </view>
          <view uno-flex="~ col" uno-center>
            <tm-text :font-size="16" label="RMB" />
            <tm-text :font-size="60" label="110" />
            <tm-text :font-size="18" label="满600使用" />
            <tm-tag label="点亮分享" :round="15" color="orange" uno-mt-6px />
          </view>
        </view>
      </tm-sheet> -->

      <view uno-flex="~ row" uno-items-start uno-m-15px uno-mb-0px>
        <tm-text label="新品上市" :font-size="32" uno-font-bold />
      </view>
      <view uno-m-15px uno-mt-0px>
        <tm-tabs item-model="line" transprent align="around" :list="newTabsList" :width="px2rpx(sysinfo.width - 30)" default-name="1" />
        <view uno-rounded>
          <img
            src="https://bizmid-material-online-1302115263.file.myqcloud.com/persist/mkunt6ree4cf/mkunt6ree4cf-%E6%96%B0%E5%93%81%E4%B8%8A%E5%B8%82-%E9%9E%8B_04.png?imageMogr2/thumbnail/690x350!/strip/ignore-error/1" alt=""
            uno-block uno-w-full uno-h-175px
          >
        </view>
        <view uno-grid="~ cols-3 gap-10px" uno-my-15px>
          <view v-for="(item, index) in 6" :key="index" uno-flex="~ col">
            <img
              src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT013-1/08c5268445ffd11e3360ad312456ffe5797c13616d860611265917cadf81915ab38624078f777ed3.jpg?imageMogr2/ignore-error/1" alt=""
              uno-block uno-w-full uno-h-108px
            >
            <tm-text label="[2023新品] 李宁日进斗金主题针织帽AMZT0003-1" :font-size="24" uno-my-10px />
            <view uno-flex="~ row" uno-items-end>
              <tm-text label="￥78.00" color="red" />
              <tm-text label="￥149" :font-size="20" uno-opacity-50 uno-ml-10px _class="uno-line-through" />
            </view>
          </view>
        </view>
      </view>

      <view uno-flex="~ row" uno-items-start uno-m-15px uno-mb-0px>
        <tm-text label="明星单品" :font-size="32" uno-font-bold />
      </view>
      <view uno-m-15px uno-mt-0px>
        <tm-tabs item-model="line" transprent align="around" :list="starTabsList" :width="px2rpx(sysinfo.width - 30)" default-name="1" />
        <view uno-rounded>
          <img
            src="https://bizmid-material-online-1302115263.file.myqcloud.com/persist/mkt49xgicqoa/mkt49xgicqoa-%E6%98%8E%E6%98%9F%E5%8D%95%E5%93%81-%E8%B7%91%E6%AD%A5%E9%9E%8B_04.png?imageMogr2/thumbnail/690x350!/strip/ignore-error/1" alt=""
            uno-block uno-w-full uno-h-175px
          >
        </view>
        <view uno-grid="~ cols-3 gap-10px" uno-my-15px>
          <view v-for="(item, index) in 6" :key="index" uno-flex="~ col">
            <img
              src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT013-3/2b09822a98f4741e1070feed0929fdac4dd3d7dab7c347fa80fbdb85ccf21478b38624078f777ed3.jpg?imageMogr2/ignore-error/1" alt=""
              uno-block uno-w-full uno-h-108px
            >
            <tm-text label="[2023新品] 李宁日进斗金主题针织帽AMZT0003-1" :font-size="24" uno-my-10px />
            <view uno-flex="~ row" uno-items-end>
              <tm-text label="￥78.00" color="red" />
              <tm-text label="￥149" :font-size="20" uno-opacity-50 uno-ml-10px _class="uno-line-through" />
            </view>
          </view>
        </view>
      </view>
    </tm-sticky>
  </tm-app>
</template>

<style lang="scss" scoped></style>
