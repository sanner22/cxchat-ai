<script lang="ts" setup>
import { computed, ref } from 'vue'
const datevalue = ref([])
const datevalue_str = computed(() => datevalue.value.join('~'))
const show = ref(false)
</script>

<template>
  <tm-app>
    <tm-sheet :margin="[0, 0]" :padding="[16, 24]" :round="0">
      <tm-text label="平铺式,这是一个时间范围选择器,主要应用于数据查询" />
      <tm-divider />
      <tm-time-between v-model="datevalue" :default-value="datevalue" />
    </tm-sheet>

    <tm-cell
      :margin="[16, 16]"
      :round="6"
      :right-text="datevalue_str || '请选择时间'"
      title="弹层式选择时间"
      @click="show = true"
    />
    <tm-drawer v-model:show="show" :height="900" hide-header>
      <view class="pa-16">
        <tm-time-between v-model="datevalue" :async-model="false" :default-value="datevalue" @confirm="show = false" />
      </view>
    </tm-drawer>
  </tm-app>
</template>
