<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
    </tm-sheet>
    <view class="mb-32 mx-32 round-3 overflow">
      <tm-cell :margin="[0, 0]" :title-font-size="30" title="头像 Avatar" />
      <tm-cell :margin="[0, 0]" :title-font-size="30" title="徽标 Badge" />
      <tm-cell :margin="[0, 0]" :title-font-size="30" title="卡片 Card" />
    </view>
    <view class="mb-32 mx-32 round-3 overflow">
      <tm-cell :round="3" :margin="[0, 0, 0, 16]" :title-font-size="30" title="头像 Avatar" />
      <tm-cell
        :round="3"
        :margin="[0, 0, 0, 16]"
        right-text="简单组件简单组件"
        :title-font-size="30"
        title="徽标 Badge"
      />
      <tm-cell
        :round="3"
        :margin="[0, 0, 0, 16]"
        right-color="red"
        right-text="2个"
        :title-font-size="30"
        title="卡片 Card"
      />
    </view>
    <view class="mb-32 mx-32 round-3 overflow">
      <tm-cell bottom-border :margin="[0, 0]" :title-font-size="30" title="头像 Avatar" />
      <tm-cell bottom-border :margin="[0, 0]" :title-font-size="30" title="徽标 Badge" />
      <tm-cell :margin="[0, 0]" :title-font-size="30" title="卡片 Card" />
    </view>
    <view class="mb-32 mx-32 round-3 overflow">
      <tm-cell
        show-avatar
        avatar="https://picsum.photos/200"
        right-text="简单组件简单组件"
        :margin="[0, 0]"
        :title-font-size="30"
        title="头像 Avatar"
      />
      <tm-cell :margin="[0, 0]" :title-font-size="30" title="徽标 Badge">
        <template #right>
          <tm-checkbox :round="12" />
        </template>
      </tm-cell>
      <tm-cell :margin="[0, 0]" :title-font-size="30" title="卡片 Card" />
    </view>
  </tm-app>
</template>
