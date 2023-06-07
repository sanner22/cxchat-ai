<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="卡片可以完全通过插槽自定义" />
    </tm-sheet>
    <tm-card
      status="2022-5-2"
      title="卡片标题"
      content="这是一个基础卡片示例，非常简单且实用。这是一个基础卡片示例，非常简单且实用。"
    >
      <template #action>
        <view class="flex flex-row flex-row-center-end">
          <tm-button :round="24" :margin="[24, 0]" label="确认" :font-size="24" :width="120" :height="64" />
          <tm-button :round="24" color="white" label="取消" :font-size="24" :width="120" :height="64" />
        </view>
      </template>
    </tm-card>
    <tm-card
      status="2022-5-2"
      title="卡片标题"
      content="这是一个基础卡片示例，非常简单且实用。这是一个基础卡片示例，非常简单且实用。"
    />
    <tm-card
      :border="1"
      status-color="red"
      status="2022-5-2"
      title="看到边线卡片标题了吗？"
      content="这是一个基础卡片示例，非常简单且实用。这是一个基础卡片示例，非常简单且实用。"
    />
    <tm-card
      status="2022-5-2"
      title="卡片标题"
      content="这是一个基础卡片示例，非常简单且实用。这是一个基础卡片示例，非常简单且实用。"
    >
      <template #action>
        <view class="flex flex-row flex-row-center-end">
          <tm-button :round="24" color="red" :margin="[24, 0]" label="确认" :font-size="24" :width="120" :height="64" />
          <tm-button :round="24" color="white" label="取消" :font-size="24" :width="120" :height="64" />
        </view>
      </template>
    </tm-card>
  </tm-app>
</template>
