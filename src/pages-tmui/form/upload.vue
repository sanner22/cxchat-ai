<!-- eslint-disable unused-imports/no-unused-vars -->
<script lang="ts" setup>
import { ref } from 'vue'
import type { file } from '@/tmui/components/tm-upload/upload'
import tmUpload from '@/tmui/components/tm-upload/tm-upload.vue'

const dateStr = ref('')

const showdate = ref(false)
const up = ref<InstanceType<typeof tmUpload> | null>(null)
const list = ref([])
/**
   * 以下是测试上传后。如果服务返回 的不是json对象数据就让其失败。
   */
const test = (item: file) => {
  const d = item.response
  let isOk = true
  try {
    const p = JSON.parse(d)
    if (p?.code !== 0)
      isOk = false
  }
  catch (e) {
    isOk = false
  }

  return isOk
}
const onStart = (item: any) => {
  console.log(item)
  return true
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="更多属性见文档：上传前勾子，上传前添加头部参数，是否允许删除非常多的人性化配置等等"
      />
      <tm-divider />
      <tm-upload
        ref="up"
        v-model="list"
        show-sort
        :on-start="onStart"
        :width="636"
        :rows="4"
        url="https://mockapi.eolink.com/tNYKNA7ac71aa90bcbe83c5815871a5b419601e96a5524d/upload"
      />
      <tm-divider />
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="通过插槽修改上传图标,以下是测试上传后。如果服务返回 的不是json对象数据就让其失败。"
      />
      <tm-divider />
      <tm-upload
        ref="up"
        v-model="list"
        :image-height="200"
        :rows="2"
        show-sort
        :default-value="list"
        :on-success-after="test"
        :width="636"
        url="https://mockapi.eolink.com/tNYKNA7ac71aa90bcbe83c5815871a5b419601e96a5524d/upload"
      >
        <template #icon>
          <tm-text label="上传" />
        </template>
      </tm-upload>
    </tm-sheet>
  </tm-app>
</template>
