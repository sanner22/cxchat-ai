<script setup lang="ts" name="NavbarSearch">
import type { PropType } from 'vue'
import { computed, onMounted, ref } from 'vue'

import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const props = defineProps({
  margin: {
    type: Array as PropType<Array<number>>,
    default: () => [24, 0, 0, 0],
  },
  padding: {
    type: Array as PropType<Array<number>>,
    default: () => [20, 0],
  },
  round: {
    type: Number,
    default: 15,
  },
  fontSize: {
    type: Number,
    default: 24,
  },
  placeholder: {
    type: String,
    default: '搜索',
  },
})

const emit = defineEmits(['click'])
const onClick = () => {
  emit('click')
}

const darkMode = useTmpiniaStore().tmStore.dark
const theme = {
  sheet: darkMode ? 'grey-darken-3' : 'grey-2',
}

const pages = ref(0)
const _margin = computed(() => {
  const m = [...props.margin]
  if (pages.value > 1)
    m[0] = 0
  return m
})

onMounted(() => {
  pages.value = getCurrentPages().length
})
</script>

<template>
  <tm-sheet :margin="_margin" :padding="padding" :round="round" :border="1" :height="60" :color="theme.sheet" @click="onClick">
    <view uno-flex="~ row" uno-items-center uno-my-auto>
      <tm-text _class="i-uil-search" :font-size="fontSize" />
      <tm-divider vertical real-color :height="fontSize" :margin="[12]" color="#aaa" />
      <tm-text :label="placeholder" _class="uno-ellipsis" uno-flex-auto :font-size="fontSize" />
    </view>
  </tm-sheet>
</template>
