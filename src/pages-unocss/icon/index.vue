<script setup lang="ts">
import Iconify from '@/components/Iconify/index.vue'
import { SetClipboardData } from '@/utils/uniapi'
import { Toast } from '@/utils/uniapi/prompt'

const group = [
  {
    name: 'Material Line Icons',
    alias: 'line-md',
    icons: [
      'i-line-md-account',
      'i-line-md-alert',
      'i-line-md-align-center',
      'i-line-md-arrow-align-bottom',
      'i-line-md-beer-alt-twotone',
      'i-line-md-bell-twotone',
      'i-line-md-calendar',
      'i-line-md-cancel',
      'i-line-md-check-list-3-twotone',
      'i-line-md-chevron-small-triple-right',
      'i-line-md-cloud',
      'i-line-md-cloud-braces-loop',
      'i-line-md-cloud-tags-loop',
      'i-line-md-cloud-upload-loop',
      'i-line-md-coffee-arrow-twotone',
    ],
  },
  {
    name: 'Material Symbols',
    alias: 'material-symbols',
    icons: [
      'i-material-symbols-ac-unit',
      'i-material-symbols-accessibility',
      'i-material-symbols-accessible',
      'i-material-symbols-account-balance',
      'i-material-symbols-account-balance-wallet',
      'i-material-symbols-account-box',
      'i-material-symbols-acute',
      'i-material-symbols-adb',
      'i-material-symbols-add-a-photo',
    ],
  },
  {
    name: 'Material Design Icons',
    alias: 'mdi',
    icons: [
      'i-mdi-ab-testing',
      'i-mdi-abacus',
      'i-mdi-abjad-arabic',
      'i-mdi-abjad-hebrew',
      'i-mdi-access-point',
      'i-mdi-access-point-check',
      'i-mdi-account',
      'i-mdi-account-hard-hat-outline',
      'i-mdi-account-tie-woman',
      'i-mdi-advertisements',
      'i-mdi-air-filter',
      'i-mdi-airbag',
      'i-mdi-airplane',
      'i-mdi-alarm',
      'i-mdi-alarm-light-outline',
    ],
  },
]

const copyLink = (url: string) => {
  SetClipboardData(url, false).then(_ => Toast('复制成功', { icon: 'success' }))
}
</script>

<template>
  <tm-app>
    <tm-sheet _class="uno-gap-10px">
      <tm-text
        label="unocss 预设 iconify，支持全网所有开源图标，这里只陈列了随机挑选的3个图标集"
        :font-size="14" unit="px"
      />
      <view uno-flex="~ row" class="uno-justify-between uno-items-center">
        <tm-text
          label="图标集：https://icon-sets.iconify.design/"
          :font-size="12" unit="px"
          selectable
          class="uno-opacity-70"
        />
        <iconify icon="i-bx-copy-alt" @click="copyLink('https://icon-sets.iconify.design/')" />
      </view>
    </tm-sheet>
    <tm-sheet v-for="(g, index) in group" :key="index" :margin="[32, 0, 32, 32]">
      <view uno-flex="~ row" class="uno-items-center uno-justify-between">
        <tm-text :label="g.name" />
        <tm-text :font-size="10" unit="px" :label="`i-${g.alias}-[name]`" class="uno-opacity-75" />
      </view>
      <tm-divider :margin="[10, 20]" />
      <view class="uno-grid uno-grid-cols-3 uno-gap-10px uno-justify-items-center">
        <tm-sheet
          v-for="(iconName, index) in g.icons"
          :key="index"
          :margin="[0, 0]"
          :padding="[0, 0]"
          :round="5"
          :height="72"
          unit="px"
          class="uno-w-full"
          _class="uno-center uno-text-center"
        >
          <iconify :icon="iconName" size="32px" />
          <tm-text :font-size="12" class="uno-mt-10px">
            {{ iconName.replace(`i-${g.alias}-`, '') }}
          </tm-text>
        </tm-sheet>
      </view>
    </tm-sheet>
    <!-- <iconify icon="i-line-md-coffee-arrow-twotone" :color="store.tmStore.dark ? '#fff' : ''" size="32px" /> -->
  </tm-app>
</template>
