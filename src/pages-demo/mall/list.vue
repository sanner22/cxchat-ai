<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import tmFilterMenu from '@/tmui/components/tm-filterMenu/tm-filterMenu.vue'

const filter = ref<InstanceType<typeof tmFilterMenu>>(null)
const checbox: Ref<Array<string | number>> = ref([])
const checbox2: Ref<Array<string | number>> = ref([])
const radiobox: Ref<string | number> = ref('')
const inputValue = ref('')
const checboxList = ref([
  { text: '测试项目1-1', id: '1' },
  { text: '测试项目2-1', id: '2' },
  { text: '测试项目3-1', id: '3' },
  { text: '测试项目4-1', id: '4' },
  { text: '测试项目5-1', id: '5' },
])
const checboxList2 = ref([
  { text: '哈哈1', id: '1' },
  { text: '哈哈2-1', id: '2' },
  { text: '哈哈3-1', id: '3' },
  { text: '哈哈4-1', id: '4' },
  { text: '哈哈5-1', id: '5' },
])
const radioList3 = ref([
  { text: 'radio1', id: '1' },
  { text: 'radio12-1', id: '2' },
  { text: 'radio13-1', id: '3' },
  { text: 'radio14-1', id: '4' },
  { text: 'radio15-1', id: '5' },
])

const px2rpx = (px: number) => uni.$tm.u.torpx(px)
const searchFocus = ref(false)

onLoad((query) => {
  query && query.focus as string === '1' && (searchFocus.value = true)
})

let stickyOffset = 0
// #ifdef H5
// h5 模式有个导航栏需要加上
stickyOffset += px2rpx(uni.$tm.u.getWindow().statusBarHeight + 44)
// #endif
</script>

<template>
  <tm-app>
    <tm-input prefix="tmicon-search" placeholder="查找你喜欢的商品吧" :focus="searchFocus" :round="0" />
    <tm-sticky :offset="stickyOffset">
      <template #sticky>
        <tm-filterMenu ref="filter">
          <tm-filterMenu-item :height="450" title="综合(多选)">
            <tm-checkbox-group v-model="checbox" direction="customCol" :default-value="checbox">
              <tm-checkbox v-for="(item, index) in checboxList" :key="index" :value="item.id" :custom="false">
                <template #default="{ checked }">
                  <view :user-interaction-enabled="false" hover-class="opactiy-7" class="flex-1 flex-row flex flex-row-center-between" style="height: 76rpx;">
                    <tm-text :color="checked.checked ? 'primary' : ''" :label="item.text" />
                    <tm-icon v-if="checked.checked" :font-size="24" color="primary" name="tmicon-check" />
                  </view>
                </template>
              </tm-checkbox>
            </tm-checkbox-group>
            <view class="flex flex-row flex-row-between ">
              <view class="pl-24 pr-12 flex-1">
                <tm-button :shadow="0" text :outlined="true" block label="取消" @click="filter.close()" />
              </view>
              <view class="pr-24 pl-12 flex-1">
                <tm-button block :border="1" label="确认" @click="filter.close()" />
              </view>
            </view>
          </tm-filterMenu-item>
          <tm-filterMenu-item title="男子">
            <tm-radio-group v-model="radiobox" direction="customCol" :default-value="radiobox">
              <tm-radio v-for="(item, index) in radioList3" :key="index" :value="item.id" :custom="false">
                <template #default="{ checked }">
                  <view :user-interaction-enabled="false" hover-class="opactiy-7" class="flex-1 flex-row flex flex-row-center-between" style="height: 76rpx;">
                    <tm-text :color="checked.checked ? 'primary' : ''" :label="item.text" />
                    <tm-icon v-if="checked.checked" :font-size="24" color="primary" name="tmicon-check" />
                  </view>
                </template>
              </tm-radio>
            </tm-radio-group>
          </tm-filterMenu-item>
          <tm-filterMenu-item :height="650" title="杂类选项" un-icon="tmicon-stepmode" icon="tmicon-menu">
            <tm-text :font-size="28" _class="font-weight-b" label="可以随便放自己想要的组件作为过滤" />
            <tm-divider />
            <tm-text :font-size="32" _class="font-weight-b py-24" label="输入框" />
            <tm-input v-model="inputValue" />
            <tm-text :font-size="32" _class="font-weight-b py-24" label="tag选项" />
            <tm-checkbox-group v-model="checbox2" :default-value="checbox2">
              <tm-checkbox v-for="(item, index) in checboxList2" :key="index" :value="item.id" :custom="false">
                <template #default="{ checked }">
                  <tm-tag :user-interaction-enabled="false" :label="item.text" :border="1" :shadow="0" :text="!checked.checked" />
                </template>
              </tm-checkbox>
            </tm-checkbox-group>
          </tm-filterMenu-item>
          <!-- <tm-filterMenu-item is-button title="按钮选项" un-icon="tmicon-ios-radio-button-off" icon="tmicon-ios-radio-button-on" /> -->
        </tm-filterMenu>
      </template>

      <view uno-p-15px>
        <view uno-grid="~ cols-2 gap-10px">
          <tm-sheet v-for="(item, index) in 10" :key="index" :margin="[0]" :padding="[16]" :round="5">
            <img uno-w-full uno-h-151px src="https://lining-goods-online-1302115263.file.myqcloud.com/data/lining/goods/image/AJMS107-9/bb93c3ec2a434625b656d1c2c10843f4.jpg?imageMogr2/quality/90/strip/format/webp">
            <tm-text label="[2023新品] 李宁日进斗金主题针织帽AMZT0003-1" :font-size="24" uno-my-15px />
            <view uno-flex="~ row" uno-items-end>
              <tm-text label="￥ 78.00" color="red" />
              <tm-text label="￥ 149" :font-size="20" uno-opacity-50 uno-ml-10px _class="uno-line-through" />
            </view>
          </tm-sheet>
        </view>
      </view>
    </tm-sticky>
  </tm-app>
</template>

<style lang="scss" scoped></style>
