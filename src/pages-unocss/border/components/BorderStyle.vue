<template>
  <tm-sheet :margin="[32, 0, 32, 32]">
    <tm-text label="border-style" :font-size="20" unit="px" />
    <tm-divider />
    <view uno-flex="~ col gap-y-15px">
      <view class="uno-h-80rpx uno-bg-blue-300_30 uno-center uno-border-none uno-border-4px uno-border-yellow">
        <tm-text label="border-none" />
      </view>

      <view class="uno-h-80rpx uno-bg-blue-300_30 uno-center uno-border-solid uno-border-4px uno-border-yellow">
        <tm-text label="border-solid" />
      </view>

      <view class="uno-h-80rpx uno-bg-blue-300_30 uno-center uno-border-dashed uno-border-4px uno-border-yellow">
        <tm-text label="border-dashed" />
      </view>

      <view class="uno-h-80rpx uno-bg-blue-300_30 uno-center uno-border-dotted uno-border-4px uno-border-yellow">
        <tm-text label="border-dotted" />
      </view>

      <view class="uno-h-80rpx uno-bg-blue-300_30 uno-center uno-border-double uno-border-4px uno-border-yellow">
        <tm-text label="border-double" />
      </view>
    </view>
  </tm-sheet>
</template>
