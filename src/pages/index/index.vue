<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from '@/hooks/router'
import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum'
import { judgePlatform } from '@/utils/platform'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'
import { componentGroups } from '@/pages/tmui-components/components'
const store = useTmpiniaStore()

const platform = CURRENT_PLATFORM
const isVue3 = judgePlatform(PLATFORMS.VUE3)
const showf = ref(false)

const router = useRouter()
const sysinfo = uni.$tm.u.getWindow()

const handleGetStarted = () => {
  router.pushTab('/pages/tmui-components/index')
}
const handleGoDemo = () => {
  router.pushTab('/pages/demo/index')
}

const app = ref<InstanceType<typeof tmApp> | null>(null)
// 切换暗黑模式
const toggleDark = () => {
  // 切换暗黑模式
  app.value?.setDark()
}

const setTheme = (colorname: string) => {
  app.value?.setTheme(colorname)
}

const toThemes = () => {
  uni.navigateTo({ url: '/pages-tmui/theme/index' })
}

const defaultLogoSize = 100
/* #ifndef MP */
const defaultLogoColor = '#009fe8'
const logoColor = computed(() => {
  // if (store.tmStore.dark) return defaultColor;
  const theme = store.tmStore.color
  return (theme && store.tmStore.colorList.find(i => i.name === theme)?.value) || defaultLogoColor
})
/* #endif */
</script>

<template>
  <tm-app ref="app" v-model:show-menu="showf">
    <template #menu="{ sys }">
      <tm-sheet
        :margin="[0, 0]"
        :padding="[0, 0]"
        color="primary"
        linear-deep="accent"
        linear="bottom"
        unit="px"
        :height="sys.height"
        _class="uno-h-full uno-flex uno-flex-col"
      >
        <!-- 状态栏 -->
        <view :style="{ height: `${sysinfo.statusBarHeight}px` }" />

        <!-- 菜单部分 -->
        <view uno-flex="auto">
          <view class="uno-flex uno-justify-between uno-items-center uno-p-10px">
            <tm-text label="Uniapp Starter" />
            <tm-icon :font-size="32" name="tmicon-times" @click="showf = false" />
          </view>
          <template v-for="(item, index) in componentGroups" :key="index">
            <tm-cell
              :url="`/pages-tmui/${item.group.key}/index`"
              color="primary"
              transprent
              :margin="[10, 0]"
              :title="item.group.title"
            />
          </template>
        </view>

        <!-- 边栏底部 -->
        <view class="uno-p-8px uno-flex uno-justify-between">
          <tm-text label="@tntgroup" />
          <tm-text label="v1.0.0" />
        </view>
      </tm-sheet>
    </template>

    <tm-navbar title="Uniapp Starter" :shadow="0" hide-home hide-back>
      <template #left>
        <view class="uno-flex uno-items-center uno-gap-10px uno-ml-12px">
          <tm-text
            _class="i-line-md-menu-fold-right uno-text-20px"
            :font-size="18"
            unit="px"
            :color="store.tmStore.dark ? '#009fe8' : undefined"
            @click="showf = true"
          />
          <tm-text
            _class="i-ion-color-palette"
            :font-size="18"
            unit="px"
            :color="store.tmStore.dark ? '#cc8500' : undefined"
            @click="toThemes"
          />
          <tm-text
            :_class="store.tmStore.dark ? 'i-line-md-moon-filled-to-sunny-filled-loop-transition' : 'i-line-md-sunny-filled-loop-to-moon-filled-loop-transition'"
            :color="store.tmStore.dark ? '#FFFB01' : undefined"
            :font-size="18"
            unit="px"
            @click="toggleDark"
          />
        </view>
      </template>
    </tm-navbar>

    <tm-sheet :margin="[0, 0]" follow-theme>
      <view class="uno-flex uno-items-center">
        <tm-image :width="64" :height="64" src="/static/svg/favicon.svg" />
        <view class="uno-flex-auto uno-pl-8px uno-w-0px">
          <tm-text _class="uno-font-bold" :font-size="36" label="Uniapp Starter" />
          <tm-text
            _class="uno-mt-3px uno-opacity-60"
            :font-size="24"
            label="cli 方式 uniapp vue next 快速开发解决方案"
          />
        </view>
      </view>
    </tm-sheet>

    <view class="uno-my-40px uno-center logo-color">
      <!-- #ifndef H5 -->
      <tm-image
        src="/static/svg/favicon.svg"
        :width="defaultLogoSize"
        :height="defaultLogoSize"
        unit="px"
        show-menu-by-long-press
      />
      <!-- #endif -->
      <!-- #ifdef H5 -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g data-name="图层 2">
          <g data-name="图层 1" fill="currentColor">
            <path
              filter="brightness(80%)"
              d="M512 0H136l-.05.19-56.99 214.54L168.24 304H55.25L0 512h376l.05-.19 56.99-214.54L343.76 208h112.99L512 0z"
            />
            <path d="M433.04 297.27L135.95.19 78.96 214.73l297.09 297.08 56.99-214.54z" />
          </g>
        </g>
      </svg>
      <!-- #endif -->
    </view>

    <view class="uno-center uno-flex-wrap">
      <tm-tag color="#42d392" :label="isVue3 ? 'Vue:3' : 'Vue:2'" :round="25" size="s" />
      <tm-tag color="#bd34fe" label="Vite:4" :round="25" size="s" />
      <tm-tag color="#007acd" label="TS:4.9.4" :round="25" size="s" />
      <tm-tag color="#cca438" label="pinia:2.0.33" :round="25" size="s" />
      <tm-tag color="#0062ff" label="tmui:3.1.02" :round="25" size="s" />
      <tm-tag color="#2b993a" label="UNIAPP" :round="25" size="s" />
      <tm-tag color="#30a15f" :label="`${platform}`" :round="25" size="s" />
      <tm-tag color="#515351" label="UnoCSS:0.50.6" :round="25" size="s" />
      <!-- <tm-tag color="#3f9eef" label="windicss:3.5.6" :round="25" size="s" /> -->
    </view>

    <tm-sheet :margin="[30, 30]" :round="3">
      <tm-text :font-size="24" _class="uno-font-bold" label="主题" />
      <tm-divider :margin="[0, 10]" />
      <view class="uno-flex uno-justify-around">
        <tm-button :width="120" size="small" label="默认" icon="tmicon-redo" @click="setTheme('')" />
        <tm-button :width="100" color="red" size="small" label="红色" @click="setTheme('red')" />
        <tm-button :width="100" color="yellow" size="small" label="黄色" @click="setTheme('yellow')" />
        <tm-button :width="100" color="green" size="small" label="绿色" @click="setTheme('green')" />
        <tm-button :width="100" color="teal" size="small" label="更多.." @click="toThemes()" />
      </view>
    </tm-sheet>

    <view class="uno-center uno-gap-15px">
      <tm-button size="small" color="pink" :width="180" @click="handleGetStarted">
        快速开始 🚀
      </tm-button>
      <tm-button size="small" color="pink" :width="180" @click="handleGoDemo">
        demo ✨
      </tm-button>
    </view>
  </tm-app>
</template>

<style scoped lang="scss">
  /* #ifndef MP */
  .logo-color {
    color: v-bind('logoColor');
    svg {
      width: v-bind('`${defaultLogoSize}px`');
      height: v-bind('`${defaultLogoSize}px`');
    }
  }
  /* #endif */
</style>
