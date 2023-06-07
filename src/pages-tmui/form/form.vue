<!-- eslint-disable unused-imports/no-unused-vars -->
<script lang="ts" setup>
import { computed, ref } from 'vue'
import * as dayjs from '@/tmui/tool/dayjs/esm/index'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import tmForm from '@/tmui/components/tm-form/tm-form.vue'

const app = ref<InstanceType<typeof tmApp> | null>(null)
const form = ref<InstanceType<typeof tmForm> | null>(null)
const DayJs = dayjs.default
const showCal = ref(false)
const showCity = ref(false)
const showTimePickerView = ref(false)
const showPicker = ref(false)

const pickerStr = ref('')
const pickerlist = ref([
  {
    text: '苹果',
    id: 1,
  },
  {
    text: '香蕉',
    id: 2,
  },
  {
    text: '李子',
    id: 3,
  },
  {
    text: '椰子',
    id: 4,
  },
])

const show = ref({
  cale: ['2022-1-4'],
  caleStr: '2022-1-4',
  time: '',
  radio: '', // bonaer
  pickerIndex: [1],
  pickerStr: '',
  checkbox: [],
  rate: -1,
  slider: [0, 50],
  segtab: '',
  switch: 'hehe',
  upload: [],
  city: [],
  cityStr: '',
  nameuser: {
    a: '测试',
  },
  testff: [],
  ha: false,
})
const timeStr = computed(() => (!show.value.time ? '' : DayJs(show.value.time).format('DD日 HH时')))
const caleStr = computed(() => {
  if (!show.value.cale || !Array.isArray(show.value.cale))
    return ''
  if (show.value.cale.length === 0)
    return ''
  return DayJs(show.value.cale[0]).format('YYYY年MM月DD日')
})

const confirm = (e: any) => {
  console.log(e)
}

const testClick = () => {
  showCity.value = !showCity.value
}

const showPickerFun = () => {
  showPicker.value = !showPicker.value
}
</script>

<template>
  <tm-app ref="app" color="grey-5">
    <tm-form ref="form" v-model="show" :label-width="190" @submit="confirm">
      <tm-form-item
        desc="你可以点击提交表单来验证"
        required
        label="身份证号码"
        field="nameuser.a"
        :rules="[{ required: true, message: '请输入66', validator: (val: string) => val === '66' }]"
      >
        <!-- 不要问我为什么用v-model.lazy，我很受伤。 -->
        <tm-input
          v-model.lazy="show.nameuser.a"
          :input-padding="[0, 0]"
          :transprent="true"
          :show-bottom-botder="false"
        />
      </tm-form-item>
      <tm-form-item required label="选择日期" field="cale" :rules="[{ required: true, message: '请选择日期哦' }]">
        <view class="flex flex-row flex-row-center-between" @click="showCal = !showCal">
          <tm-text :user-interaction-enabled="false" :label="caleStr || '请选择有效日期'" />
          <tm-icon :user-interaction-enabled="false" :font-size="24" name="tmicon-angle-right" />
        </view>
      </tm-form-item>
      <tm-form-item
        :padding="[0, 0]"
        required-title-change-color
        label="选择地区"
        field="city"
        required
        :rules="[{ required: true, message: '请选择地区' }]"
      >
        <view class="flex flex-row flex-row-center-between" @click="testClick">
          <tm-text :user-interaction-enabled="false" :label="show.cityStr || '请选择所在地区地址'" />
          <tm-icon :user-interaction-enabled="false" :font-size="24" name="tmicon-angle-right" />
        </view>
      </tm-form-item>
      <tm-form-item required label="时间选择" field="time" :rules="[{ required: true, message: '请选择时间+++' }]">
        <view class="flex flex-row flex-row-center-between" @click="showTimePickerView = !showTimePickerView">
          <tm-text :user-interaction-enabled="false" :label="timeStr || '请选择时间'" />
          <tm-icon :user-interaction-enabled="false" :font-size="24" name="tmicon-angle-right" />
        </view>
      </tm-form-item>

      <tm-form-item
        required
        label="弹出选择"
        field="pickerStr"
        :rules="[{ required: true, message: '请选择水果种类' }]"
      >
        <view class="flex flex-row flex-row-center-between" @click="showPicker = !showPicker">
          <tm-text :user-interaction-enabled="false" :label="show.pickerStr || '请选择水果呀'" />
          <tm-icon :user-interaction-enabled="false" :font-size="24" name="tmicon-angle-right" />
        </view>
      </tm-form-item>
      <tm-form-item required label="选择水果" field="radio" :rules="[{ required: true, message: '请选择水果' }]">
        <tm-radio-group v-model="show.radio">
          <tm-radio label="苹果" value="apple" />
          <tm-radio label="香焦" value="bonaer" />
        </tm-radio-group>
      </tm-form-item>

      <tm-form-item required label="多选水果种类" field="checkbox" :rules="[{ required: true, message: '请选择' }]">
        <tm-checkbox-group v-model="show.checkbox">
          <tm-checkbox label="苹果" value="apple" />
          <tm-checkbox label="香焦" value="bonaer" />
          <tm-checkbox label="香焦" value="bonaer2" />
          <tm-checkbox label="香焦" value="bonaer3" />
          <tm-checkbox label="香焦" value="bonaer4" />
        </tm-checkbox-group>
      </tm-form-item>

      <tm-form-item required label="评分" field="rate" :rules="[{ required: true, message: '请选择' }]">
        <tm-rate v-model="show.rate" :default-value="show.rate" />
      </tm-form-item>

      <tm-form-item
        required
        label="价格选择"
        field="slider"
        :rules="[{ required: true, message: '请选择', validator: (val: any[]) => val.reduce((a: number, b: number) => Math.abs(a - b)) !== 0 }]"
      >
        <tm-slider v-model="show.slider" :width="450" :default-value="show.slider" />
      </tm-form-item>

      <tm-form-item required label="分割选择" field="segtab" :rules="[{ required: true, message: '请选择' }]">
        <tm-segtab
          v-model="show.segtab"
          :width="420"
          :list="[
            { id: '1', text: '苹果' },
            { id: '2', text: '香蕉' },
          ]"
          :default-value="show.segtab"
        />
      </tm-form-item>

      <tm-form-item label="开关" field="switch" :rules="{ required: true, message: '没有选中哦' }">
        <tm-switch v-model="show.switch" :default-value="show.switch" selected="hehe" />
      </tm-form-item>

      <tm-form-item required label="上传截图" field="upload" :rules="{ required: true, message: '请上传' }">
        <tm-upload
          v-model="show.upload"
          :rows="3"
          :width="420"
          :default-value="show.upload"
          url="https://mockapi.eolink.com/tNYKNA7ac71aa90bcbe83c5815871a5b419601e96a5524d/upload"
        />
      </tm-form-item>

      <tm-form-item :border="false">
        <view class="flex flex-row">
          <view class="flex-1 mr-32">
            <tm-button form-type="submit" label="提交表单" block />
          </view>
          <view class="flex-1">
            <tm-button :shadow="0" text form-type="reset" label="重置表单" block />
          </view>
        </view>
      </tm-form-item>
    </tm-form>
    <tm-calendar v-model="show.cale" v-model:show="showCal" :default-value="show.cale" />
    <tm-city-picker
      v-model="show.city"
      v-model:model-str="show.cityStr"
      v-model:show="showCity"
      :default-value="show.city"
    />
    <tm-time-picker
      v-model="show.time"
      v-model:show="showTimePickerView"
      :show-detail="{ year: false, month: false, day: true, hour: true }"
    />

    <tm-picker
      v-model:model-str="show.pickerStr"
      v-model:show="showPicker"
      v-model="show.pickerIndex"
      :columns="pickerlist"
      :default-value="show.pickerIndex"
    />
  </tm-app>
</template>
