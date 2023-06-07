<script lang="ts" setup>
import { ref } from 'vue'
const tabsTitle = ref([
  { key: '1', title: '选项1', icon: 'tmicon-ios-leaf' },
  { key: '2', title: '选项2', icon: 'tmicon-ios-umbrella' },
  { key: '3', title: '选项3', dot: true, dotColor: 'yellow', icon: 'tmicon-ios-rocket' },
  { key: '4', title: '选项4', dot: false, count: '3', icon: 'tmicon-ios-partly-sunny' },
])

function tabschange(key: string | number) {
  console.log(key)
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-tabs show-tabs-line-ani :item-width="140" :width="636" :height="500" default-name="2" @change="tabschange">
        <tm-tabs-pane
          v-for="(item, index) in 15"
          :key="index"
          :dot="item === 3"
          :count="item === 4 ? 33 : 0"
          :name="item"
          :title="item % 2 ? '标题开滑动' : '标题'"
        >
          <tm-sheet :margin="[0, 0]">
            <tm-text
              :font-size="30"
              _class="font-weight-b"
              color="red"
              :label="`${item};本组件可以开启swiper属性，你现在可以尝试左右滑动。开启左右滑动，页面最好禁用滚动，以防与页面事件冲突。(当然是兼容了WEB pc端)`"
            />
            <tm-text
              :font-size="30"
              _class="font-weight-b"
              label="开启左右滑动后，本组件已优化性能，只会渲染本身，以及前后的页面内容，也就是三个页面的内容，其它页面隐藏不显示。"
            />
            <tm-divider />
          </tm-sheet>
        </tm-tabs-pane>
      </tm-tabs>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="下面的示例为单独使用" />
      <tm-divider />
      <tm-tabs :list="tabsTitle" :width="636" :height="300" default-name="1" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="其它一些属性特性" />
      <tm-divider />
      <tm-tabs
        :list="tabsTitle"
        :border="1"
        :width="636"
        :height="300"
        default-name="1"
        :round="2"
        color="grey"
        text
        active-font-color="primary"
        un-selected-color="grey-darken-2"
      />
      <tm-divider />
      <tm-text :font-size="24" _class="font-weight-b" label="渐变背景" />
      <tm-divider />
      <tm-tabs
        :list="tabsTitle"
        :width="636"
        :height="300"
        default-name="1"
        :round="2"
        color="red"
        active-font-color="yellow"
        linear="left"
      />
      <tm-divider />
      <tm-text :font-size="24" _class="font-weight-b" label="卡片式" />
      <tm-divider />
      <tm-tabs
        :list="tabsTitle"
        align="center"
        :width="636"
        :height="300"
        default-name="1"
        :round="2"
        color="black"
        item-model="card"
        active-color="yellow"
        active-font-color="black"
        @change="tabschange"
      />
      <tm-divider />
      <tm-text :font-size="24" _class="font-weight-b" label="线式" />
      <tm-divider />
      <tm-tabs
        :list="tabsTitle"
        align="center"
        :width="636"
        :height="300"
        default-name="1"
        item-model="line"
        active-color="primary"
        active-font-color="primary"
      />
    </tm-sheet>
  </tm-app>
</template>
