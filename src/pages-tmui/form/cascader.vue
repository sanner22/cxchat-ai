<script lang="ts" setup>
import { computed, ref } from 'vue'

interface TreeNodeType {
  text: string
  id: string
  disabled: boolean
  children?: TreeNodeType[]
}

const dlist = ref(loop())
const testValue = ref([])
const str = computed(() => testValue.value.join('/'))
function loop(path = '0', level = 2) {
  const list = []
  for (let i = 0; i < 5; i += 1) {
    const key = `${path}-${i}`
    const treeNode: TreeNodeType = {
      text: `选项${key}`,
      id: key,
      disabled: i === 1,
    }

    if (level > 0)
      treeNode.children = loop(key, level - 1)

    list.push(treeNode)
  }
  return list
}
function test(item: any) {
  console.log(item)
}
</script>

<template>
  <tm-app color="white">
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-button label="清空选择" @click="testValue = []" />
      <tm-text :label="str ? str : '请选择'" />
    </tm-sheet>
    <tm-cascader v-model="testValue" :data="dlist" @cell-click="test" />
  </tm-app>
</template>
