<script lang="ts" setup>
function beforeChecked() {
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
      <view class="flex flex-row">
        <tm-switch size="mini" />
        <tm-switch size="normal" color="red" :default-value="true" :margin="[12, 0]" />
        <tm-switch size="large" color="green" :default-value="true" :margin="[12, 0]" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="其它样式属性" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-switch linear="left" linear-deep="accent" :default-value="true" :margin="[12, 0]" />
        <tm-switch un-checked-color="red" color="red" text :label="['开', '关']" />
        <tm-switch
          :label="['形状', '方形']"
          :width="200"
          :height="58"
          :round="2"
          color="green"
          :default-value="true"
          :margin="[12, 0]"
        />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="加载和禁用" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-switch load linear="left" linear-deep="accent" color="red" :default-value="true" :margin="[12, 0]" />
        <tm-switch disabled linear="left" linear-deep="accent" color="green" :default-value="true" :margin="[12, 0]" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="异步开关" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-switch :before-checked="beforeChecked" linear="left" linear-deep="accent" color="blue" :margin="[12, 0]" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
