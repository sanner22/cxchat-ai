<script setup lang="ts">
import FontSize from './components/FontSize.vue'
import FontBold from './components/FontBold.vue'
import LetterSpacing from './components/LetterSpacing.vue'
import LineHeight from './components/LineHeight.vue'
import TextAlign from './components/TextAlign.vue'
import TextColor from './components/TextColor.vue'
import TextDecoration from './components/TextDecoration.vue'
import TextDecorationStyle from './components/TextDecorationStyle.vue'
import TextIndent from './components/TextIndent.vue'
import TextOpacity from './components/TextOpacity.vue'
import TextShadow from './components/TextShadow.vue'
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const store = useTmpiniaStore()
</script>

<template>
  <tm-app :class="store.tmStore.dark ? 'uno-text-white' : ''">
    <tm-sheet>
      <font-size />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <font-bold />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <letter-spacing />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <line-height />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <text-align />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <text-color />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <text-decoration />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <text-decoration-style />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <text-indent />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <text-opacity />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]">
      <text-shadow />
    </tm-sheet>
  </tm-app>
</template>
