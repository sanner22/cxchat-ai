<script lang="ts" setup>
const list = [
  { label: '同步时间', value: '22/5/12' },
  { label: '同步时间', value: '22/5/12' },
  { label: '同步时间', value: '22/5/12' },
  { label: '同步时间', value: '22/5/12' },
]
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例" />
      <tm-divider />
      <tm-descriptions :data="list" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="配置颜色和字体大小，以及标题，插槽" />
      <tm-divider />
      <tm-descriptions transprent :round="3" text title="时间工具标题">
        <tm-descriptions-item
          v-for="(item, index) in list"
          :key="index"
          :font-size="24"
          :label="item.label"
          :value="item.value"
        />
        <tm-descriptions-item :font-size="24" color="red" label="开发工具" value="vscode">
          <tm-sheet color="red" text :border="1" :margin="[12, 0]" :padding="[12, 4]" :round="2">
            <tm-text :font-size="24" label="插槽配置" />
          </tm-sheet>
        </tm-descriptions-item>
      </tm-descriptions>
    </tm-sheet>
  </tm-app>
</template>
