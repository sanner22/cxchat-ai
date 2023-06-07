<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref } from 'vue'
import tmFilterMenu from '@/tmui/components/tm-filterMenu/tm-filterMenu.vue'

const filter = ref<InstanceType<typeof tmFilterMenu | null>>(null)
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
</script>

<template>
  <tm-app>
    <tm-filter-menu>
      <tm-filterMenu-item icon="tmicon-filter-fill" un-icon="tmicon-filter" :height="450" title="筛选">
        <tm-text
          :font-size="24"
          _class="font-weight-b"
          label="为了针对性的数据结构体设计问题.本下拉菜单过滤器,不提供数据结构,也不处理数据,全交由用户自行处理,我只处理动效."
        />
      </tm-filterMenu-item>
      <tm-filterMenu-item title="价格排序">
        <tm-text :font-size="24" _class="font-weight-b" label="数据由用户处理" />
      </tm-filterMenu-item>
      <tm-filterMenu-item :height="650" title="更多" un-icon="tmicon-stepmode" icon="tmicon-menu">
        <tm-text :font-size="24" _class="font-weight-b" label="数据由用户处理" />
      </tm-filterMenu-item>
      <tm-filterMenu-item is-button title="价格排序" un-icon="tmicon-sort" icon="tmicon-sort" />
    </tm-filter-menu>
    <tm-sheet :margin="[0, 24]">
      <tm-text :font-size="24" _class="font-weight-b" label="下面是一个非常简单的示例." />
    </tm-sheet>
    <tm-filter-menu ref="filter">
      <tm-filterMenu-item icon="tmicon-filter-fill" un-icon="tmicon-filter" :height="450" title="多选项">
        <tm-checkbox-group v-model="checbox" direction="customCol" :default-value="checbox">
          <tm-checkbox v-for="(item, index) in checboxList" :key="index" :value="item.id" :custom="false">
            <template #default="{ checked }">
              <view
                :user-interaction-enabled="false"
                hover-class="opactiy-7"
                class="flex-1 flex-row flex flex-row-center-between"
                style="height: 76rpx"
              >
                <tm-text :color="checked.checked ? 'primary' : ''" :label="item.text" />
                <tm-icon v-if="checked.checked" :font-size="24" color="primary" name="tmicon-check" />
              </view>
            </template>
          </tm-checkbox>
        </tm-checkbox-group>
        <view class="flex flex-row flex-row-between">
          <view class="pl-24 pr-12 flex-1">
            <tm-button :shadow="0" text :outlined="true" block label="取消" @click="filter.close()" />
          </view>
          <view class="pr-24 pl-12 flex-1">
            <tm-button block :border="1" label="确认" @click="filter.close()" />
          </view>
        </view>
      </tm-filterMenu-item>
      <tm-filterMenu-item title="单选项">
        <tm-radio-group v-model="radiobox" direction="customCol" :default-value="radiobox">
          <tm-radio v-for="(item, index) in radioList3" :key="index" :value="item.id" :custom="false">
            <template #default="{ checked }">
              <view
                :user-interaction-enabled="false"
                hover-class="opactiy-7"
                class="flex-1 flex-row flex flex-row-center-between"
                style="height: 76rpx"
              >
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
              <tm-tag
                :user-interaction-enabled="false"
                :label="item.text"
                :border="1"
                :shadow="0"
                :text="!checked.checked"
              />
            </template>
          </tm-checkbox>
        </tm-checkbox-group>
      </tm-filterMenu-item>
      <tm-filterMenu-item
        is-button
        title="按钮选项"
        un-icon="tmicon-ios-radio-button-off"
        icon="tmicon-ios-radio-button-on"
      />
    </tm-filter-menu>
  </tm-app>
</template>
