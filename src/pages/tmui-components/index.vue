<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { componentGroups } from './components'

// loading
const loading = ref(true)
onLoad(() => {
  loading.value = false
})
</script>

<template>
  <tm-app>
    <tm-navbar title="TMUI 组件" :shadow="0" hide-back />

    <view class="uno-my-20px uno-center">
      <tm-image src="https://tmui.design/images/logoGreat.png" :width="80" :height="80" unit="px" />
    </view>

    <view v-if="loading" class="uno-p-15px">
      <tm-skeleton :rows="3" />
    </view>

    <tm-collapse v-else :accordion="true">
      <tm-collapse-item
        v-for="(g, index) in componentGroups"
        :key="index"
        :title="`${g.group.title} ${g.group.key}`"
        :name="g.group.key"
      >
        <view class="uno-m-15px uno-rounded-3px uno-overflow-hidden">
          <tm-cell
            v-for="(item, index) in g.list"
            :key="index"
            bottom-border
            :margin="[0, 0]"
            :title="item.title"
            :url="item.path"
          />
        </view>
      </tm-collapse-item>
    </tm-collapse>
  </tm-app>
</template>

<style lang="scss" scoped></style>
