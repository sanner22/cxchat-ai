<template>
  <tm-app>
    <tm-sheet :margin="[32]">
      <tm-text label="odd:class even:class" :font-size="20" unit="px" />

      <view class="uno-mt-10px">
        <tm-text :font-size="24">
          odd:class 奇数为 bg-green
        </tm-text>
        <tm-text :font-size="24">
          even:class 偶数为 bg-red
        </tm-text>
      </view>

      <view class="uno-mt-20px" uno-flex="~ col gap-y-10px">
        <view class="even:uno-bg-red odd:uno-bg-green uno-p-1">
          1
        </view>
        <view class="even:uno-bg-red odd:uno-bg-green uno-p-1">
          2
        </view>
        <view class="even:uno-bg-red odd:uno-bg-green uno-p-1">
          3
        </view>
        <view class="even:uno-bg-red odd:uno-bg-green uno-p-1">
          4
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
