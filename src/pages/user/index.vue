<script lang="ts" setup>
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { useAuthStore } from '@/state/modules/auth'
import Iconify from '@/components/Iconify/index.vue'
import { Toast } from '@/utils/uniapi/prompt'

const authStore = useAuthStore()
const isLogin = ref(false)
onShow(() => {
  isLogin.value = authStore.isLogin
})

// 登出
const handleLoginOut = () => {
  authStore.loginOut()
    .then(() => {
      Toast('成功退出')
      isLogin.value = false
    })
    .catch((err) => {
      Toast(err)
    })
}

const vipList = [
  'https://lining-common-front-1302115263.file.myqcloud.com/assets/miniapp/home/new-user/vip-share-v1.png?imageMogr2/thumbnail/330x/strip/ignore-error/1%20HTTP/1.1',
  'https://lining-common-front-1302115263.file.myqcloud.com/assets/miniapp/home/new-user/walk-v1.png?imageMogr2/thumbnail/330x/strip/ignore-error/1%20HTTP/1.1',
]
</script>

<template>
  <tm-app>
    <tm-navbar title="用户中心" :shadow="0" />

    <view class="uno-bg-gradient-to-br uno-from-#007dbf:10 uno-via-#009fe8:20 uno-to-#007dbf:10 uno-flex-auto">
      <tm-sheet :round="6" :padding="[30]" :url="!isLogin ? '/pages/login/index' : ''">
        <view uno-flex="~ row" uno-items-center>
          <tm-image v-if="isLogin" src="/static/svg/favicon.svg" :height="48" :width="48" unit="px" />
          <tm-image v-else src="/static/images/avatar.png" :height="48" :width="48" unit="px" />
          <view uno-flex="~ col auto" uno-mx-10px>
            <tm-text :label="isLogin ? '测试用户' : '点此登录'" :font-size="18" unit="px" uno-font-bold uno-mb-5px uno-ml-5px />
            <tm-tag v-if="isLogin" label="新锐会员 ⭐" color="orange" text :round="25" size="m" :shadow="0" :margin="[0]" />
          </view>
          <view uno-flex="~ row gap-x-10px" :class="[isLogin ? 'uno-self-start' : '']">
            <!-- 右侧3个管理按钮，登录后靠顶对齐 -->
            <iconify icon="i-ri-customer-service-2-line" />
            <iconify icon="i-ri-settings-5-line" />
            <iconify v-if="isLogin" icon="i-ri-logout-box-r-fill" color="orange" @click="handleLoginOut" />
          </view>
        </view>
        <view v-if="isLogin" uno-mt-15px>
          <tm-text label="距离铜牌还差980.00元" :font-size="24" />
          <tm-progress :percent="5" linear="right" color="red" :width="635" />
          <view uno-flex="~ row" uno-justify-between>
            <tm-text label="新锐" :font-size="12" unit="px" uno-opacity-75 />
            <tm-text label="铜牌" :font-size="12" unit="px" uno-opacity-75 />
            <tm-text label="银牌" :font-size="12" unit="px" uno-opacity-75 />
            <tm-text label="金牌" :font-size="12" unit="px" uno-opacity-75 />
          </view>
        </view>
      </tm-sheet>

      <tm-sheet :round="6" :padding="[30]" :margin="[32, 0, 32, 32]">
        <view uno-flex="~ row" uno-justify-between uno-items-center uno-mb-15px>
          <tm-text label="我的订单" :font-size="36" uno-font-bold />
          <tm-text label="查看全部订单" :font-size="24" uno-opacity-75 />
        </view>

        <view uno-grid="~ cols-4 gap-15px">
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-fluent-credit-card-clock-24-regular" :size="32" />
            <tm-text label="待付款" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-fluent-cart-24-regular" :size="32" />
            <tm-text label="待收货" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-fluent-gift-card-24-regular" :size="32" />
            <tm-text label="待评价" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-fluent-wallet-credit-card-24-regular" :size="32" />
            <tm-text label="售后" :font-size="24" />
          </view>
        </view>
      </tm-sheet>

      <tm-sheet :round="6" :padding="[30]" :margin="[32, 0, 32, 32]">
        <view uno-grid="~ cols-4 gap-15px">
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <tm-text :label="isLogin ? 0 : '-'" :font-size="36" />
            <tm-text label="优惠券" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <tm-text :label="isLogin ? 0 : '-'" :font-size="36" />
            <tm-text label="会员券" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <tm-text :label="isLogin ? 0 : '-'" :font-size="36" />
            <tm-text label="礼品码" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <tm-text :label="isLogin ? 0 : '-'" :font-size="36" />
            <tm-text label="免邮卡" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <tm-text :label="isLogin ? 0 : '-'" :font-size="36" />
            <tm-text label="积分" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <tm-text :label="isLogin ? '￥ 0.00' : '-'" :font-size="36" />
            <tm-text label="红包" :font-size="24" />
          </view>
        </view>
      </tm-sheet>

      <tm-sheet :round="6" :padding="[30]" :margin="[32, 0, 32, 32]">
        <view uno-grid="~ cols-4 gap-15px">
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-clarity-favorite-line" :size="32" />
            <tm-text label="商品收藏" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-clarity-alarm-clock-outline-badged" :size="32" />
            <tm-text label="浏览记录" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-clarity-search-line" :size="32" />
            <tm-text label="防伪查询" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-clarity-store-line" :size="32" />
            <tm-text label="附近门店" :font-size="24" />
          </view>
        </view>
      </tm-sheet>

      <tm-sheet :round="6" :padding="[30]" :margin="[32, 0, 32, 32]" border="1px" text color="orange" linear="bottom" linear-deep="light">
        <view uno-flex="~ row" uno-justify-between uno-items-center uno-mb-15px>
          <tm-text label="会员专享福利" :font-size="36" uno-font-bold />
          <tm-text label="查看会员权益" :font-size="24" uno-opacity-75 />
        </view>
        <view uno-grid="~ cols-4 gap-15px">
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-icon-park-solid-coupon" :size="48" color="#ecc276" />
            <tm-text label="50元券" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-icon-park-solid-coupon" :size="48" color="#ecc276" />
            <tm-text label="6折券" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-icon-park-solid-coupon" :size="48" color="#ecc276" />
            <tm-text label="6折生日券" :font-size="24" />
          </view>
          <view uno-flex="~ col gap-y-8px" uno-items-center>
            <iconify icon="i-icon-park-solid-coupon" :size="48" color="#ecc276" />
            <tm-text label="88折专券" :font-size="24" />
          </view>
        </view>
      </tm-sheet>

      <view uno-grid="~ cols-2 gap-15px" uno-mx-15px uno-mb-15px>
        <img v-for="(item, index) in vipList" :key="index" :src="item" uno-block uno-w-full uno-h-170px>
      </view>
      <view uno-p-15px>
        <view uno-flex="~ row" uno-justify-center uno-mb-15px>
          <tm-text label="💕 猜你喜欢" :font-size="32" />
        </view>
        <view uno-grid="~ cols-2 gap-10px">
          <tm-sheet v-for="(item, index) in 10" :key="index" :margin="[0]" :padding="[16]" :round="5">
            <img uno-w-full uno-h-151px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/goods/image/AJMS107-9/bb93c3ec2a434625b656d1c2c10843f4.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="[2023新品] 李宁日进斗金主题针织帽AMZT0003-1" :font-size="24" uno-my-15px />
            <view uno-flex="~ row" uno-items-end>
              <tm-text label="￥ 78.00" color="red" />
              <tm-text label="￥ 149" :font-size="20" uno-opacity-50 uno-ml-10px _class="uno-line-through" />
            </view>
          </tm-sheet>
        </view>
      </view>
    </view>
  </tm-app>
</template>

<style lang="scss" scoped></style>
