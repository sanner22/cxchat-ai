<script lang="ts" setup>
import { ref } from 'vue'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import Iconify from '@/components/Iconify/index.vue'
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const store = useTmpiniaStore()

// 切换暗黑模式
const app = ref<InstanceType<typeof tmApp> | null>(null)
const toggleDark = () => {
  // 切换暗黑模式
  app.value?.setDark()
}
</script>

<template>
  <tm-app>
    <tm-navbar title="Uniapp Starter" :shadow="0" hide-home>
      <template #left>
        <view class="uno-flex uno-flex-row uno-items-center uno-gap-10px uno-ml-12px">
          <iconify
            :icon="store.tmStore.dark ? 'i-line-md-moon-filled-to-sunny-filled-loop-transition' : 'i-line-md-sunny-filled-loop-to-moon-filled-loop-transition'"
            :color="store.tmStore.dark ? '#FFFB01' : ''"
            size="20px"
            @click="toggleDark"
          />
        </view>
      </template>
    </tm-navbar>

    <!-- 这里放置你的内容 -->
    <tm-sheet :round="5">
      <tm-text label="页面模板,新建pages,将此页面内容复制粘贴到新建.vue文件" />
    </tm-sheet>
  </tm-app>
</template>

<style lang="scss" scoped></style>
