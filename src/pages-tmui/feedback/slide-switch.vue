<script lang="ts" setup>
import { ref } from 'vue'

const w = uni.$tm.u.torpx(60)
const isopen = ref(true)
const action = ref([
  { text: '操作', color: 'black' },
  { text: '删除按钮', color: 'green', icon: 'tmicon-delete' },
])

function cellClick() {
  uni.showToast({
    title: '点击了内容区域',
  })
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="通过与cell组件组合可滑动列表" />
    </tm-sheet>
    <tm-sheet :padding="[0, 0]" :margin="[32, 0, 32, 0]">
      <tm-slide-switch :right-menu="action" :width="686" :height="84" @click="cellClick">
        <tm-cell :margin="[0, 0]" title="向左滑动,并点击底部按钮" />
        <template #right>
          <view class="flex flex-row flex-row-center-end">
            <tm-sheet
              _class="flex flex-row flex-row-center-center"
              :width="w"
              :height="84"
              color="red"
              no-level
              :margin="[0]"
              :padding="[0]"
            >
              <tm-text :user-interaction-enabled="false" label="收藏" />
            </tm-sheet>
            <tm-sheet
              _class="flex flex-row flex-row-center-center"
              :width="w"
              :height="84"
              color="primary"
              no-level
              :margin="[0]"
              :padding="[0]"
            >
              <tm-text :user-interaction-enabled="false" label="删除" />
            </tm-sheet>
          </view>
        </template>
      </tm-slide-switch>
      <tm-slide-switch disabled :width="686" :height="84">
        <tm-cell :margin="[0, 0]" title="我被禁用了" />
        <template #right>
          <view class="flex flex-row flex-row-center-end">
            <tm-sheet
              _class="flex flex-row flex-row-center-center"
              :width="w"
              :height="84"
              color="red"
              no-level
              :margin="[0]"
              :padding="[0]"
            >
              <tm-text :user-interaction-enabled="false" label="收藏" />
            </tm-sheet>
            <tm-sheet
              _class="flex flex-row flex-row-center-center"
              :width="w"
              :height="84"
              color="primary"
              no-level
              :margin="[0]"
              :padding="[0]"
            >
              <tm-text :user-interaction-enabled="false" label="删除" />
            </tm-sheet>
          </view>
        </template>
      </tm-slide-switch>
      <tm-slide-switch v-for="item in 4" :key="item" :width="686" :height="84">
        <tm-cell :margin="[0, 0]" :title="`向左滑动试${item}`" />
        <template #right>
          <view class="flex flex-row flex-row-center-end">
            <tm-sheet
              _class="flex flex-row flex-row-center-center"
              :width="w"
              :height="84"
              color="green"
              no-level
              :margin="[0]"
              :padding="[0]"
            >
              <tm-text :user-interaction-enabled="false" label="哈哈" />
            </tm-sheet>
            <tm-sheet
              _class="flex flex-row flex-row-center-center"
              :width="w"
              :height="84"
              color="primary"
              no-level
              :margin="[0]"
              :padding="[0]"
            >
              <tm-text :user-interaction-enabled="false" label="删除" />
            </tm-sheet>
          </view>
        </template>
      </tm-slide-switch>
    </tm-sheet>

    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="利用插槽放置其它组件" />
    </tm-sheet>
    <view class="mx-32 round-2 overflow">
      <tm-slide-switch v-model:open-status="isopen" :width="686" :height="300" :round="0" :action="action">
        <tm-card
          :margin="[0, 0]"
          :shadow="0"
          status="2022-5-2"
          title="向左滑动试下"
          content="这是一个基础卡片示例，非常简单且实用。这是一个基础卡片示例，非常简单且实用。"
        >
          <template #action>
            <view class="flex flex-1 flex-row flex-row-center-end">
              <tm-button :margin="[24, 0]" label="确认" :font-size="24" :width="120" :height="50" />
              <tm-button color="white" label="取消" :font-size="24" :width="120" :height="50" />
            </view>
          </template>
        </tm-card>
        <template #right>
          <view class="flex flex-row flex-row-center-end">
            <tm-sheet
              _class="flex flex-row flex-row-center-center"
              :width="w"
              :height="300"
              color="red"
              no-level
              :margin="[0]"
              :padding="[0]"
            >
              <tm-text :user-interaction-enabled="false" label="收藏" />
            </tm-sheet>
            <tm-sheet
              _class="flex flex-row flex-row-center-center"
              :width="w"
              :height="300"
              color="primary"
              no-level
              :margin="[0]"
              :padding="[0]"
            >
              <tm-text :user-interaction-enabled="false" label="删除" />
            </tm-sheet>
          </view>
        </template>
      </tm-slide-switch>
    </view>
  </tm-app>
</template>

<style></style>
