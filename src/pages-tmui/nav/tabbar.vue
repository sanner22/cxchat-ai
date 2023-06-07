<script lang="ts" setup>
import { ref } from 'vue'

const acc = ref(1)
function laodingfun(val: any) {
  // eslint-disable-next-line promise/param-names
  return new Promise((res) => {
    setTimeout(() => {
      console.log('选中了：', val)
      res(true)
    }, 2000)
  })
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text label="点击中间+按钮可以体验异步加载动态效果." />
    </tm-sheet>
    <tm-tabbar v-model:active="acc" :auto-select="false">
      <tm-tabbar-item
        active-color="orange"
        count="HOT"
        open-type="reLaunch"
        text="首页"
        icon="tmicon-collection-fill"
        @click="acc = 0"
      />
      <tm-tabbar-item active-color="orange" text="表单" icon="tmicon-cog-fill" @click="acc = 1" />
      <tm-tabbar-item
        :shadow="2"
        :before-click="laodingfun"
        data="中间项"
        btn-top
        font-color="white"
        active-color="white"
        linear="top"
        linear-deep="accent"
        color="yellow"
        icon="tmicon-plus"
        @click="acc = 2"
      />
      <tm-tabbar-item
        active-color="orange"
        url="/pages/feedback/index"
        text="反馈分类"
        unicon="tmicon-like"
        icon="tmicon-heart-fill"
        @click="acc = 3"
      />
      <tm-tabbar-item
        active-color="orange"
        :count="8"
        url="/pages/user/index"
        active
        text="个人中心"
        unicon="tmicon-account"
        icon="tmicon-userplus-fill"
        @click="acc = 4"
      />
    </tm-tabbar>
  </tm-app>
</template>
