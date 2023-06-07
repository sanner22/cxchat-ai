<script lang="ts" setup>
// import { ref } from 'vue';
// import { onShow, onLoad } from '@dcloudio/uni-app';
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基本示例" />
      <tm-divider />
      <tm-text label="这是文本标签，文本显示必需要使用此标签" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="其它示例" />
      <tm-divider />
      <tm-text color="red" label="颜色，这是文本标签，文本显示必需要使用此标签" />
      <tm-text color="grey" :font-size="24" label="文字大小，这是文本标签，文本显示必需要使用此标签" />
    </tm-sheet>
    <tm-sheet>
      <tm-text
        _class="text-overflow-1"
        label="1行带省略，这是文本标签，文本显示必需要使用此标签，文本显示必需要使用此标"
      />
    </tm-sheet>
    <tm-sheet>
      <tm-text
        _class="text-overflow-2"
        label="2行带省略，这是文本标签，文本显示必需要使用此标签，文本显示必需要使用此标示必需要使用此标签，文本显示必需要使用此标"
      />
    </tm-sheet>
    <tm-sheet>
      <tm-text selectable label="长按文本可以复制" />
    </tm-sheet>
  </tm-app>
</template>
