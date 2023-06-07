<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-navbar title="标题导航栏" color="primary" linear="right" linear-deep="accent">
      <template #right>
        <tm-icon _class="px-32" name="tmicon-plus" />
      </template>
    </tm-navbar>

    <tm-sheet>
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="使用时必须放置在页面的顶部，它有非多的属性,请行配置其属性,当为渐变背景时,背景磨砂效果将会消失."
      />
    </tm-sheet>
  </tm-app>
</template>
