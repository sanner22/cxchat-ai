<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
    </tm-sheet>
    <tm-weekbar />
    <tm-weekbar :follow-theme="false" active-color="white" color="red" />
    <tm-weekbar :follow-theme="false" active-color="black" color="yellow" linear="bottom" />
    <tm-weekbar model="custom" :day-number="7" />
  </tm-app>
</template>
