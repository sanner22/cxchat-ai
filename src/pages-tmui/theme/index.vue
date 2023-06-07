<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'
import type { colorThemeType } from '@/tmui/tool/lib/interface'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'

const app = ref<InstanceType<typeof tmApp> | null>(null)
const store = useTmpiniaStore()
const themeList = ref<colorThemeType[]>([])

onMounted(() => {
  themeList.value = [...store.tmStore.colorList.filter(i => !i.name.startsWith('#'))]
})

function setTheme(colorname: string) {
  app.value?.setTheme(colorname)
  uni.navigateBack()
}
</script>

<template>
  <tm-app ref="app">
    <tm-navbar color="blue" linear="right" title="设置主题" />

    <view class="uno-m-10px">
      <view class="uno-flex uno-flex-wrap">
        <view v-for="(theme, index) in themeList" :key="index" style="width: 50%">
          <tm-sheet :round="3" :margin="[15, 15]" :color="theme.name" @click="setTheme(theme.name)">
            <tm-sheet :round="3" :margin="[0, 0]">
              <tm-text :label="theme.name" />
              <tm-text :label="theme.value" />
            </tm-sheet>
          </tm-sheet>
        </view>
      </view>
    </view>
  </tm-app>
</template>
