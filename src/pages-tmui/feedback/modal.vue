<script lang="ts" setup>
import { ref } from 'vue'
import tmModal from '@/tmui/components/tm-modal/tm-modal.vue'

const modal = ref<InstanceType<typeof tmModal> | null>(null)
uni.getSystemInfoSync()
const showWin = ref(false)
const showWin1 = ref(false)
const showWin2 = ref(false)
const showWin3 = ref(false)
function beforeClose() {
  // eslint-disable-next-line promise/param-names
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 1500)
  })
}

function test(_e: any) {
  console.log('ok事件点击')
}
async function openDrawer() {
  modal.value
    ?.open()
    ?.then(() => {
      console.log('点了确认按钮')
      uni.showToast({ title: '确认按钮', icon: 'none' })
    })
    .catch(() => {
      console.log('取消关闭')
      uni.showToast({ title: '被关闭取消', icon: 'none' })
    })
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="下面是基础演示属性,更多玩法请前往文档。" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-button
          :margin="[0, 12]"
          color="white"
          :width="120"
          :height="56"
          :font-size="24"
          label="默认"
          @click="showWin = true"
        />
        <tm-button
          :margin="[12, 12]"
          color="red"
          :width="120"
          :height="56"
          :font-size="24"
          label="分离按钮"
          @click="showWin1 = true"
        />
        <tm-button
          :margin="[0, 12]"
          color="orange"
          :width="120"
          :height="56"
          :font-size="24"
          label="个性化"
          @click="showWin2 = true"
        />
        <tm-button
          :margin="[12, 12]"
          color="pink"
          :width="120"
          :height="56"
          :font-size="24"
          label="异步关闭"
          @click="showWin3 = true"
        />
      </view>
    </tm-sheet>
    <tm-sheet :margin="[32, 0]">
      <tm-text :font-size="24" _class="font-weight-b" label="下面是通过ref.open打开返回Promise示例。" />
      <tm-divider />
      <view class="">
        <tm-button block color="green" :font-size="28" label="Ref打开,返回Promise" @click="openDrawer" />
      </view>
    </tm-sheet>
    <tm-modal v-model:show="showWin" title="信息框" content="主体内容哦" />
    <tm-modal
      v-model:show="showWin1"
      color="white"
      ok-color="red"
      cancel-color="red"
      ok-linear="left"
      split-btn
      title="信息框"
      content="主体内容哦"
    />
    <tm-modal
      ref="modal"
      v-model:show="showWin2"
      color="grey-5"
      :height="500"
      :border="0"
      text
      ok-color="black"
      cancel-color="white"
      linear="bottom"
      title="信息框"
    >
      <view>
        <tm-input />
        <tm-image src="https://picsum.photos/450/150" :height="150" :width="450" />
        <tm-text
          label="主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦主体内容哦"
        />
        <tm-image src="https://picsum.photos/450/150?id=36" :height="150" :width="450" />
      </view>
    </tm-modal>
    <tm-modal
      v-model:show="showWin3"
      closeable
      color="white"
      ok-color="pink"
      cancel-color="pink"
      ok-linear="left"
      split-btn
      title="信息框"
      content="关闭后会延迟关闭窗体"
      :before-close="beforeClose"
      @ok="test"
    />
  </tm-app>
</template>
