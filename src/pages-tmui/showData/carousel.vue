<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref } from 'vue'

const listimg = [
  'https://picsum.photos/200/300?id=43335',
  'https://picsum.photos/200/300?id=433',
  'https://picsum.photos/200/300?id=439',
  'https://picsum.photos/200/300?id=459',
]

const listvedio: Ref<any[]> = ref([
  { test: 'https://picsum.photos/200/300?id=43335' },
  {
    test: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    img: 'https://picsum.photos/200/300?id=43335',
    type: 'video',
  },
  'https://picsum.photos/200/300?id=433',
])
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="更多指示点位置，属性等请看文档" />
    </tm-sheet>
    <tm-carousel autoplay :margin="[0, 16]" :round="3" :width="686" :height="300" :list="listimg" />
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="指示点对齐" />
    </tm-sheet>
    <tm-carousel autoplay :margin="[0, 16]" align="right" :round="3" :width="686" :height="300" :list="listimg" />
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="指示位置，包含视频播放" />
    </tm-sheet>
    <tm-carousel
      rang-key="test"
      autoplay
      :margin="[0, 16]"
      dot-position="right"
      vertical
      model="rect"
      :round="3"
      :width="686"
      :height="300"
      :list="listvedio"
    />
  </tm-app>
</template>
