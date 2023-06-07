<script setup lang="ts">
const sysinfo = uni.$tm.u.getWindow()
const px2rpx = (px: number) => uni.$tm.u.torpx(px)

const carouselList = [
  'https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-3/638a9df34c691190d59fa8aae6cbb8c8bf3b93d89a1f3930be19070943d1a9aeb38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1',
  'https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/e375c64a07a3a7b3eb71cf7d7a6b4d37e8585ae85e7bfffe4c38f185554354ebb38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1',
  'https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/18115b310c7d9623c321b98f09a7a23734cef665f602245496909e9c5d755e11b38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1',
  'https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-3/f6ee014c94b8524b4107080fec929cdb51eb0cb546da635a4fb6a9545370a197b38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1',
  'https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-3/7fde73c524178de4f8d93430162be8ddcbb1d378caf8616d598a48185a7d914cb38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1',
  'https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/c599b28f5d2e36de1c7a702844add25e89396bf0e6215179f31af8a74d958f66b38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1',
  'https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/2fe257925f78bb93ed7127017a865e34673109a5f13edd88253e395d816b35aab38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1',
]

const content = '<div class="product-detail-img"><div class="img-item-wrapper"><img src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/046291b157ae571cd334b0f593bb7c39fa5d356e6862ea90026636359cc0a9d7b38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1" class="m-lining-image img-item" style="width: 100vw;"></div><div class="img-item-wrapper"><img src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/94471800d6240557198decaafa4a33dc7d3121a5f5a2863642825077af770728b38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1" class="m-lining-image img-item" style="width: 100vw;"></div><div class="img-item-wrapper"><img src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/b80592cbb5e19244bc62b1215b981f2235118b91e655d769d9faf53d28f57748b38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1" class="m-lining-image img-item" style="width: 100vw;"></div><div class="img-item-wrapper"><img src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/f38fb6b675d2b4b004284a09cb19a6a5529689c29d4d7ebfc6f63ca15ec9dfdfb38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1" class="m-lining-image img-item" style="width: 100vw;"></div><div class="img-item-wrapper"><img src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/f193c4d4e48e66bb82792abb9b180cb00d5f526696d4efc31c8b167d74f88c21b38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1" class="m-lining-image img-item" style="width: 100vw;"></div><div class="img-item-wrapper"><img src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/ed471714120ed17dee16564c2a3f6946b96e90eb545efc0c03296e14a8e6ac3db38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1" class="m-lining-image img-item" style="width: 100vw;"></div><div class="img-item-wrapper"><img src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/9e4d477032cb858a85b1d0ff992ca4dbdf2a8408fcfad4722306c397819f0a2cb38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1" class="m-lining-image img-item" style="width: 100vw;"></div><div class="img-item-wrapper"><img src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/fa4154bcddf6e65326d0d608242e832ad2514f7a747d5eebfcadfc624b103beab38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1" class="m-lining-image img-item" style="width: 100vw;"></div><div class="img-item-wrapper"><img src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/e58667ac4ebc2c784ccc69aa35a81203bf8bb5efaa4650ce0cd5cf94689c4220b38624078f777ed3.jpg?imageMogr2/thumbnail/750x/strip/ignore-error/1" class="m-lining-image img-item" style="width: 100vw;"></div></div>'
</script>

<template>
  <tm-app>
    <tm-carousel autoplay model="number" align="right" :margin="[0, 0]" :round="0" :height="375 * 2" :list="carouselList" />

    <tm-sheet :margin="[0]">
      <view uno-flex="~ row" uno-items-end>
        <tm-text label="销售价：￥" color="red" />
        <tm-text label="399.00" color="red" :font-size="40" uno-font-bold uno-mr-10px />
        <tm-text label="吊牌价：￥" _class="uno-line-through" uno-opacity-50 />
        <tm-text label="399.00" _class="uno-line-through" uno-opacity-50 />
      </view>
      <tm-text label="【2023新品】赤兔6男子反光支撑稳定竞速跑鞋ARMT015-1" :font-size="30" uno-font-bold uno-my-10px />
      <tm-text label="2.10-2.14此商品参与满269减20，369减30，469减50！" :font-size="24" color="red" />
    </tm-sheet>

    <tm-sheet :margin="[0, 32]" :padding="[32]">
      <view uno-flex="~ row">
        <tm-text label="颜色" :font-size="24" uno-mr-15px uno-font-bold />
        <view uno-flex-auto>
          <tm-text label="已选择标白" :font-size="24" />
          <view uno-flex="~ row" uno-my-15px>
            <tm-text label="男款" :font-size="24" />
            <tm-text label="女款" :font-size="24" uno-ml-50px />
          </view>
          <view uno-flex="~ row gap-10px">
            <view uno-shadow>
              <tm-image :width="110" :height="110" src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-3/fd8758c1cae84d66d815e06c128209662b845af2318a5dd69ef11f6c5fb32d85b38624078f777ed3.jpg?imageMogr2/thumbnail/110x110!/strip/ignore-error/1" />
            </view>
            <view uno-shadow>
              <tm-image :width="110" :height="110" src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT015-1/e375c64a07a3a7b3eb71cf7d7a6b4d37e8585ae85e7bfffe4c38f185554354ebb38624078f777ed3.jpg?imageMogr2/thumbnail/110x110!/strip/ignore-error/1" />
            </view>
            <view uno-shadow>
              <tm-image :width="110" :height="110" src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT016-3/410f5b5384ab9a376e0cb6db56583337df842d498687954246f153dc6e9237ffb38624078f777ed3.jpg?imageMogr2/thumbnail/110x110!/strip/ignore-error/1" />
            </view>
            <view uno-shadow>
              <tm-image :width="110" :height="110" src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT016-1/e069cfcfb3ae2c5d26ad9ecda878b443eb79ea22b8357b504d56692ca0c715a5b38624078f777ed3.jpg?imageMogr2/thumbnail/110x110!/strip/ignore-error/1" />
            </view>
          </view>
        </view>
      </view>
      <tm-divider />
      <view uno-flex="~ row">
        <tm-text label="尺码" :font-size="24" uno-mr-15px uno-font-bold />
        <view uno-flex="~ auto" uno-justify-end>
          <tm-text label="尺码表 &blacktriangleright;" :font-size="24" />
        </view>
      </view>
    </tm-sheet>

    <tm-cell :margin="[0, 0, 0, 32]" :padding="[24]" show-avatar>
      <template #avatar>
        <tm-text label="领券" :font-size="24" uno-font-bold />
      </template>
      <template #title>
        <view uno-flex="~ row" uno-items-center>
          <view uno-w-82px>
            <tm-tag label="优惠券" color="red" size="xs" />
          </view>
          <tm-text label="满269减20，满369减30，满469减50，满1000减230" :font-size="24" uno-flex-auto />
        </view>
      </template>
    </tm-cell>

    <tm-tabs
      show-tabs-line-ani
      item-model="text" align="around" :list="[
        { key: '1', title: '商品详情' },
        { key: '2', title: '商品参数' },
        { key: '3', title: '商品评价' },
      ]" :width="px2rpx(sysinfo.width)" default-name="1"
    />
    <image src="https://bizmid-material-online-1302115263.file.myqcloud.com/persist/ml2lzsbhmpcc/ml2lzsbhmpcc-%E4%BC%98%E6%83%A0%E5%88%B8-%E4%BA%8C%E6%AC%A1.gif?imageMogr2/ignore-error/1" uno-block uno-w-full />
    <tm-sheet :margin="[0]">
      <view uno-grid="~ cols-3 gap-10px">
        <view v-for="(item, index) in 6" :key="index" uno-flex="~ col">
          <image
            src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/ARMT013-1/08c5268445ffd11e3360ad312456ffe5797c13616d860611265917cadf81915ab38624078f777ed3.jpg?imageMogr2/ignore-error/1" alt=""
            uno-block uno-w-full uno-h-108px
          />
          <tm-text label="[2023新品] 李宁日进斗金主题针织帽AMZT0003-1" :font-size="24" uno-my-10px />
          <view uno-flex="~ row" uno-items-end>
            <tm-text label="￥78.00" color="red" />
            <tm-text label="￥149" :font-size="20" uno-opacity-50 uno-ml-10px _class="uno-line-through" />
          </view>
        </view>
      </view>
    </tm-sheet>
    <tm-html :content="content" :tag-style="{ img: 'display:block; max-width:100%;' }" />

    <tm-sheet :margin="[0]" :padding="[10]" uno-fixed uno-left-0px uno-bottom-0px uno-right-0px uno-z-9999>
      <view uno-flex="~ row gap-5px" uno-items-center>
        <view uno-flex="~ col" uno-items-center uno-mx-5px>
          <tm-icon name="tmicon-md-home" />
          <tm-text label="首页" :font-size="24" />
        </view>
        <view uno-flex="~ col" uno-items-center uno-mx-5px>
          <tm-icon name="tmicon-headset-fill" />
          <tm-text label="客服" :font-size="24" />
        </view>
        <view uno-flex="~ col" uno-items-center uno-mx-5px>
          <tm-icon name="tmicon-shopping-cart-fill" />
          <tm-text label="购物车" :font-size="24" />
        </view>
        <tm-button :margin="[0]" color="orange" uno-flex="auto">
          加入购物车
        </tm-button>
        <tm-button :margin="[0]" color="red" uno-flex="auto">
          立即购买
        </tm-button>
      </view>
    </tm-sheet>
  </tm-app>
</template>

<style lang="scss" scoped></style>
