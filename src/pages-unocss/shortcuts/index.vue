<template>
  <tm-app>
    <tm-sheet :margin="[32]">
      <view uno-flex="~ col gap-y-10px">
        <view class="uno-h-80px uno-bg-red-200_30 uno-center">
          <tm-text label="center" />
        </view>
        <view class="uno-h-80px uno-bg-red-200_30 uno-center uno-border-demo">
          <tm-text label="border-demo" />
        </view>
        <view class="uno-mt-10px">
          <tm-text label="快捷方式在 unocss.config.js 中设置" />
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
