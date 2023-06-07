<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础属性,更多玩法请前往文档。" />
      <tm-divider />
      <tm-skeleton />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="类型分为：line ,rect,card,chat," />
      <tm-divider />
      <tm-skeleton model="chat" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="也可以自定义骨架布局" />
      <tm-divider />
      <tm-skeleton-line :height="50" />
      <tm-skeleton-line :height="50" />
      <view style="width: 300rpx">
        <tm-skeleton-line :height="50" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
