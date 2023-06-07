<script lang="ts" setup>
import { computed, ref } from 'vue'

const radio = ref<string | number | boolean | undefined>()

const radiolist = ref('banner')
const str = computed(() => radiolist.value)
function beforChecked() {
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
      <view class="pb-24">
        <tm-text :label="str ? str : '请选择'" />
      </view>

      <tm-radio-group v-model="radiolist">
        <tm-radio outlined value="apple" label="苹果基础示例" />
        <tm-radio color="orange" value="banner" label="香蕉" />
        <tm-radio color="pink" value="test" label="测试项" />
        <tm-radio color="green" value="other" label="其它水果" />
      </tm-radio-group>
    </tm-sheet>

    <tm-sheet :margin="[32, 0]">
      <tm-text :font-size="24" _class="font-weight-b" label="其它属性和checkbox一样，拥有丰富的属性设置" />
      <tm-divider />
      <view class="pb-24">
        <tm-text :label="str ? str : '请选择'" />
      </view>
      <tm-radio-group v-model="radiolist">
        <tm-radio :befor-checked="beforChecked" value="apple" label="苹果异步选中" />
        <tm-radio color="orange" value="banner" label="香蕉" />
        <tm-radio disabled color="pink" value="test" label="测试项" />
        <tm-radio border-style="dashed" color="green" value="other" label="其它水果" />
      </tm-radio-group>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="按钮样式" />
      <tm-divider />
      <tm-radio-group v-model="radio" model="button">
        <tm-radio :value="true" label="选我呀" />
        <tm-radio :value="false" label="不要选我呀" />
      </tm-radio-group>
    </tm-sheet>
  </tm-app>
</template>
