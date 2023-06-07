<script lang="ts" setup>
import { ref } from 'vue'

const showWin = ref(false)
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="下面是基础演示属性,更多玩法请前往文档。更多属性动画时长这些请前文档"
      />
      <tm-divider />
      <tm-button block label="显示" @click="showWin = true" />
    </tm-sheet>
    <tm-overlay v-model:show="showWin" content-animation>
      <view @click.stop="">
        <tm-sheet :width="500" :height="500">
          <tm-text label="更多属性动画时长这些请前文档" />
        </tm-sheet>
      </view>
    </tm-overlay>
  </tm-app>
</template>
