<script lang="ts" setup>
// eslint-disable-next-line unused-imports/no-unused-vars
function beforeEnter() {
  // eslint-disable-next-line promise/param-names
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 1000)
  })
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-rate :default-value="2" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="只读" />
      <tm-divider />
      <tm-rate color="green" readonly :default-value="4" show-label />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="根据星数不同颜色不一样" />
      <tm-divider />
      <tm-rate :color="['red', 'orange', 'primary', 'pink', 'green']" show-label />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="更换不同的图标" />
      <tm-divider />
      <tm-rate
        :default-value="1"
        icon="tmicon-smile-fill"
        :color="['red', 'orange', 'primary', 'pink', 'green']"
        show-label
      />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="禁用" />
      <tm-divider />
      <tm-rate :default-value="1" disabled />
    </tm-sheet>
  </tm-app>
</template>
