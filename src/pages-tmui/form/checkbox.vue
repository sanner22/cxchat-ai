<script lang="ts" setup>
import { computed, ref } from 'vue'

const listvalue = ref([
  { label: '香蕉', value: 'banner' },
  { label: '数字1', value: '2' },
  { label: '数字2', value: '8' },
  { label: '其它', value: 'other' },
])
const checkboxlist1 = ref(['banner'])

const checkboxlist = ref(['banner'])
const str = computed(() => checkboxlist.value.join(' '))
const str2 = computed(() => checkboxlist1.value.join(','))
const banxuan = ref(true)
const allCheckbox = ref(false)
function allChange(e: boolean) {
  if (e === false) {
    checkboxlist.value = []
    banxuan.value = false
  }
  else if (e === true) {
    checkboxlist.value = ['apple', 'banner', 'test', 'other']
    banxuan.value = false
  }
}
function boxlistchange(e: Array<string>) {
  if (e.length === 0) {
    banxuan.value = false
    allCheckbox.value = false
  }
  else if (e.length === 4) {
    banxuan.value = false
    allCheckbox.value = true
  }
  else {
    banxuan.value = true
    allCheckbox.value = true
  }
}

function beforChecked() {
  // eslint-disable-next-line promise/param-names
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 1000)
  })
}
checkboxlist1.value = ['3', '4']
setTimeout(() => {
  listvalue.value = [
    { label: '香蕉2', value: '3' },
    { label: '其它3', value: 'other' },
    { label: '其它34', value: '4' },
  ]
}, 3200)

// console.log(uni.getSystemInfoSync())
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <view class="flex flex-row">
        <tm-checkbox outlined label="苹果" />
        <tm-checkbox color="orange" label="香蕉" />
        <tm-checkbox color="green" label="其它水果" />
      </view>
    </tm-sheet>
    <tm-sheet :margin="[32, 0]">
      <tm-text :font-size="24" _class="font-weight-b" label="选择组" />
      <tm-divider />
      <view class="pb-24">
        <tm-text :label="str ? str : '请选择'" />
      </view>
      <tm-checkbox v-model="allCheckbox" :indeterminate="banxuan" :value="true" label="全选" @change="allChange" />
      <tm-checkbox-group v-model="checkboxlist" @change="boxlistchange">
        <tm-checkbox value="apple" label="苹果" />
        <tm-checkbox color="orange" value="banner" label="香蕉" />
        <tm-checkbox color="pink" value="test" label="测试项" />
        <tm-checkbox color="green" value="other" label="其它水果" />
      </tm-checkbox-group>
    </tm-sheet>

    <tm-sheet :margin="[32, 0]">
      <tm-text :font-size="24" _class="font-weight-b" label="常规赋值测试3.2秒后观察自动选中结果" />
      <tm-divider />
      <view class="pb-24">
        <tm-text :label="str2" />
      </view>

      <tm-checkbox-group v-model="checkboxlist1" @change="boxlistchange">
        <tm-checkbox v-for="(item, index) in listvalue" :key="index" :value="item.value" :label="item.label" />
      </tm-checkbox-group>
    </tm-sheet>

    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="一些样式属性" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-checkbox :size="54" :font-size="28" value="apple" label="大小" />
        <tm-checkbox :round="10" color="orange" value="banner" label="形状" />
        <tm-checkbox color="orange" disabled value="banner" label="禁用" />
        <tm-checkbox icon="tmicon-position-fill" color="green" value="other" label="选中图标" />
        <tm-checkbox :border="1" linear="bottom" :default-checked="true" color="green" value="other" label="渐变" />
        <tm-checkbox border-style="dashed" color="green" value="other" label="虚线边框" />
      </view>
    </tm-sheet>
    <tm-sheet :margin="[32, 0]">
      <tm-text :font-size="24" _class="font-weight-b" label="选中前的勾子" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-checkbox :befor-checked="beforChecked" label="异步选中" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
