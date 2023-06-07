<script setup lang="ts">
import { useRouter } from '@/hooks/router'

const router = useRouter()
</script>

<template>
  <tm-app>
    <tm-result
      class="uno-mt-1/3vh"
      title="购物车空空如也" sub-title="登陆后可同步购物车中的商品" icon="tmicon-folder" btn-text="登录"
      @click="router.go('/pages/login/index')"
    />
    <!-- 这里放置你的内容 -->
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
  </tm-app>
</template>

<style lang="scss" scoped></style>
