<script lang="ts" setup>
import { ref } from 'vue'

const content = ref([
  {
    icon: 'tmicon-alert',
    content:
        '这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻22这是一条新闻这是一条新闻这是一条新闻',
  },
])
const content2 = ref([
  {
    title: '我是标题',
    content: '我是介绍内容哦',
  },
])
</script>

<template>
  <tm-app>
    <tm-alert :shadow="2" :content="content" :height="80" />
    <tm-alert color="orange" linear="right" :content="content" :height="80" />
    <tm-alert color="pink" linear-deep="accent" linear="right" :content="content2" :height="140" />
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="下面是一些其它属性,更多玩法请前往文档。" />
    </tm-sheet>
    <tm-alert :content="content" text :height="80" />
    <tm-alert color="green" text :border="1" :content="content" :height="80" />
    <tm-alert color="blue" outlined border-style="dashed" :border="1" :content="content" :height="80" />
  </tm-app>
</template>
