<script lang="ts" setup>
import { ref } from 'vue'
import { cellItem, headresItem } from '@/tmui/components/tm-table/interface'

const showFixed = ref(true)
const header = ref([
  {
    title: '支付时间',
    bgColor: 'green',
    width: 120,
    key: 'paytime',
  },
  {
    title: '未付订金',
    bgColor: 'green',
    width: 150,
    key: 'unpayamount',
    sort: true,
  },
  {
    title: '备注',
    bgColor: 'yellow',
    width: 160,
    key: 'desc',
  },
  {
    title: '固定行/列',
    bgColor: 'pink',
    cellColor: 'pink',
    width: 160,
    key: 'status',
    fixed: true,
  },
  {
    title: '已付订金',
    bgColor: 'green',
    width: 150,
    key: 'amount',
  },
])
const tableData = ref([
  {
    data: {
      unpayamount: 100,
      paytime: '2022/2/5',
      amount: '100',
      desc: '没有',
      status: '行1',
    },
  },
  {
    data: {
      unpayamount: 25,
      paytime: {
        text: '获取',
        type: 'button',
      },
      amount: '100',
      desc: {
        text: '好吧',
        color: 'orange',
        light: true,
      },
      status: '行2',
    },
  },
  {
    data: {
      unpayamount: 36,
      paytime: '2022/2/5',
      amount: '100',
      desc: {
        text: '嘿',
        type: 'button',
      },
      status: '行3',
    },
  },
  {
    color: 'green',
    light: true,
    data: {
      unpayamount: 200,
      paytime: '2022/2/5',
      amount: '100',
      desc: '没有',
      status: '行4',
    },
  },
  {
    data: {
      unpayamount: 80,
      paytime: '2022/2/5',
      amount: {
        text: '100',
      },
      desc: '没有',
      status: '行5',
    },
  },
  {
    data: {
      unpayamount: {
        text: 180,
        color: 'green',
      },
      paytime: '2022/2/5',
      amount: '100',
      desc: '没有',
      status: '行6',
    },
  },
  {
    data: {
      unpayamount: 20,
      paytime: '2022/2/5',
      amount: '100',
      desc: '没有',
      status: '行7',
    },
  },
  {
    data: {
      unpayamount: 35,
      paytime: '2022/2/5',
      amount: '100',
      desc: '没有',
      status: '行8',
    },
  },
  {
    data: {
      unpayamount: 40,
      paytime: '2022/2/5',
      amount: '100',
      desc: '没有',
      status: '行9',
    },
  },
])

function onClick(row: any, col: any) {
  console.log(row)
  uni.$tm.u.toast(`行:${String(row)},列${String(col)}`)
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-tag label="显示左固定栏" @click="showFixed = !showFixed" />
      <tm-divider />
      <tm-table
        :show-header="true"
        :show-fixed="showFixed"
        :height="550"
        :width="638"
        :table-data="tableData as Array<cellItem>"
        :header="header as Array<headresItem>"
        @row-click="onClick"
      />
    </tm-sheet>
  </tm-app>
</template>
