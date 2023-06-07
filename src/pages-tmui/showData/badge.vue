<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="应用在其它任何元素上" />
      <tm-divider />
      <view class="flex flex-row flex-between">
        <tm-badge dot color="red">
          <tm-sheet no-level :shadow="2" :width="100" :height="100" :margin="[6, 6]" :padding="[0, 0]" />
        </tm-badge>
        <tm-badge :count="99999" :max-count="99" color="red" linear="top">
          <tm-sheet no-level :shadow="2" :width="100" :height="100" :margin="[6, 6]" :padding="[0, 0]" />
        </tm-badge>
        <tm-badge count="热门" color="pink" linear="right" linear-deep="accent">
          <tm-sheet no-level :shadow="2" :width="100" :height="100" :margin="[6, 6]" :padding="[0, 0]" />
        </tm-badge>
        <tm-badge icon="tmicon-check" color="green">
          <tm-sheet no-level :shadow="2" :width="100" :height="100" :margin="[6, 6]" :padding="[0, 0]" />
        </tm-badge>
      </view>
    </tm-sheet>

    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例" />
      <tm-divider />
      <view class="flex flex-row flex-between">
        <tm-badge dot color="red">
          <tm-text label="文本模式" />
        </tm-badge>
        <tm-badge dot color="green">
          <tm-text label="文本模式" />
        </tm-badge>
        <tm-badge dot color="blue">
          <tm-text label="文本模式" />
        </tm-badge>
        <tm-badge dot color="pink">
          <tm-text label="文本模式" />
        </tm-badge>
      </view>
    </tm-sheet>

    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="作为文本状态使用" />
      <tm-divider />
      <view class="flex flex-row flex-between">
        <tm-badge status dot label="未处理好" color="red" />
        <tm-badge status dot label="正确处理" color="green" />
        <tm-badge status dot label="正常" color="primary" />
        <tm-badge status dot label="非常nice" color="orange" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
