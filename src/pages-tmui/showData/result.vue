<script lang="ts" setup></script>

<template>
  <tm-app color="white">
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
    </tm-sheet>
    <tm-result color="green" status="success" />
    <tm-result :show-btn="false" />
    <tm-result :show-btn="false" color="red" status="network" />
  </tm-app>
</template>
