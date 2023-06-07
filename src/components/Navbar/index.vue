<script lang="ts" setup name="Navbar">
/**
   * 头部导航栏
   * @description 所有尺寸都用px2rpx做适配
   */
import { computed, ref } from 'vue'
import { useSystem } from '@/hooks/useSystem'
import { px2rpx } from '@/utils/uniapi'
import { useRoute, useRouter } from '@/hooks/router'
import { useGlobalStyle } from '@/hooks/useGlobalStyle'
import Iconify from '@/components/Iconify/index.vue'
import { HOME_PAGE } from '@/enums/routerEnum'

const props = defineProps({
  bgColor: { type: String },
  title: { type: String },
  titleColor: { type: String },
  titleSize: { type: [String, Number] },
  iconSize: { type: [String, Number] },
  gap: { type: Number, default: 8 },
  isBackShow: { type: Boolean, default: true },
  isHomeShow: { type: Boolean },
  shadow: { type: Boolean, default: true },
  fixed: { type: Boolean, default: true },
})

const { navigationBarBackgroundColor, navigationBarTitleText, navigationBarTextStyle } = useGlobalStyle()

const { currentRoute, currentPages } = useRoute()

const { statusBarHeight } = useSystem()
const statusHeight = computed(() => `${px2rpx(statusBarHeight!)}rpx`)
const defaultNavbarHeight = ref(44)
const defaultTitleSize = ref(16)
const defaultIconSize = ref(24)
const navbarHeight = computed(() => `${px2rpx(defaultNavbarHeight.value)}rpx`)
const headHeight = computed(() => `${px2rpx((statusBarHeight || 0) + defaultNavbarHeight.value)}rpx`)
const sideGap = computed(() => `${px2rpx(props.gap)}rpx`)
const navbarBgColor = computed(() => props.bgColor || navigationBarBackgroundColor)
const navbarTitle = computed(
  () => props.title || currentRoute?.style?.navigationBarTitleText || navigationBarTitleText,
)
const navbarTitleColor = computed(
  () => props.titleColor || currentRoute?.style?.navigationBarTextStyle || navigationBarTextStyle,
)
const navbarTitleSize = computed(() => {
  return `${px2rpx(defaultTitleSize.value) || props.titleSize}rpx`
})
const navbarLeftIconSize = computed(() => {
  return `${px2rpx(defaultIconSize.value) || props.titleSize}`
})
const backShow = computed(() => {
  return currentPages.length > 1 && props.isBackShow
})
const backHomeShow = computed(() => {
  return !currentRoute?.meta?.tabBar && props.isHomeShow
})

const router = useRouter()
const onBack = () => {
  router.back()
}
const onBackHome = () => {
  router.pushTab(HOME_PAGE)
}
</script>

<template>
  <view class="head-wrapper">
    <view class="page-head uno-shadow" :class="[props.fixed ? 'uno-head-fixed' : '']">
      <!-- 顶部状态栏 -->
      <view class="status-bar" />
      <!-- navbar -->
      <view class="navbar-wrapper uno-flex uno-flex-nowrap uno-justify-between uno-items-center">
        <view class="uno-flex uno-flex-nowrap uno-items-center uno-h-full uno-w3/10 uno-min-w3/10">
          <slot name="left">
            <view class="uno-h-full uno-flex uno-items-center">
              <template v-if="backShow">
                <iconify
                  :size="navbarLeftIconSize"
                  :color="navbarTitleColor as string"
                  icon="i-humbleicons-chevron-left"
                  @click="onBack"
                />
              </template>
              <template v-if="backHomeShow">
                <iconify
                  :size="navbarLeftIconSize"
                  :color="navbarTitleColor as string"
                  icon="i-iconoir-home-simple-door"
                  @click="onBackHome"
                />
              </template>
            </view>
          </slot>
        </view>
        <view class="navbar__center uno-center uno-flex-nowrap uno-h-full uno-w2/5 uno-min-w2/5">
          <slot>
            <text>{{ navbarTitle }}</text>
          </slot>
        </view>
        <view class="uno-flex uno-flex-nowrap uno-justify-end uno-items-center uno-h-full uno-w3/10 uno-min-w3/10">
          <slot name="right" />
        </view>
      </view>
    </view>
    <!-- 占位符 -->
    <view class="placeholder" />
  </view>
</template>

<style lang="scss" scoped>
  .head-wrapper {
    .page-head {
      background: v-bind(navbarBgColor);
      .status-bar {
        height: v-bind(statusHeight);
      }
      .navbar-wrapper {
        height: v-bind(navbarHeight);
        padding-left: v-bind(sideGap);
        padding-right: v-bind(sideGap);
        .navbar__center {
          font-weight: bold;
          font-size: v-bind(navbarTitleSize);
          color: v-bind(navbarTitleColor);
        }
      }
    }
    &,
    .placeholder {
      height: v-bind(headHeight);
      min-height: v-bind(headHeight);
    }
  }
</style>
