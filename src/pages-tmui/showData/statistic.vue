<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-statistic :end-val="2022" :font-size="62" suffix="年" color="primary" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <view class="flex flex-row flex-between">
        <view class="px-12">
          <tm-statistic
            prefix="↑"
            :start-val="0"
            :decimals="2"
            :end-val="86.32"
            :font-size="32"
            suffix="%"
            color="green"
          />
        </view>
        <view class="px-12">
          <tm-statistic
            prefix="↓"
            :start-val="0"
            :decimals="2"
            :end-val="1050.98"
            :font-size="32"
            suffix="元"
            color="red"
          />
        </view>
        <view class="px-12">
          <tm-statistic :font-size="32" suffix="元" color="orange" />
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
