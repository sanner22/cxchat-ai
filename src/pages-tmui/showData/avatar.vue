<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-avatar img="https://picsum.photos/200/300" />
        <tm-avatar :font-size="42" :margin="[10, 0]" icon="tmicon-QQ" />
        <tm-avatar :font-size="42" :round="12" color="pink" linear="top" icon="tmicon-QQ" />
        <tm-avatar trigger trigger-icon="tmicon-check" :round="12" text :margin="[10, 0]" label="QQ" />
        <tm-avatar
          color="orange"
          trigger
          trigger-color="red"
          trigger-icon="tmicon-check"
          :round="4"
          text
          :margin="[10, 0]"
          img="https://picsum.photos/200/300?id=99"
        />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="更多自定义属性" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-badge count="5" color="orange">
          <tm-avatar color="green" :font-size="42" :margin="[10, 0]" icon="tmicon-QQ" />
        </tm-badge>
        <tm-avatar outlined :round="12" :font-size="52" color="pink" icon="tmicon-weixin" />
        <tm-avatar :round="12" text :margin="[10, 0]" label="王" />
        <tm-avatar outlined text color="grey" :round="12" :margin="[10, 0]" label="王" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
