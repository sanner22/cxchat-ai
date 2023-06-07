<template>
  <tm-sheet :margin="[32, 0, 32, 32]">
    <tm-text label="border-width" :font-size="20" unit="px" />
    <tm-divider />

    <view uno-flex="~ col gap-y-15px">
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-border-solid uno-border-0px uno-border-yellow">
        <tm-text label="border-0px" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-border-solid uno-border uno-border-yellow">
        <tm-text label="border" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-border-solid uno-border-base uno-border-yellow">
        <tm-text label="border-base" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-border-solid uno-border-2px uno-border-yellow">
        <tm-text label="border-2" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-border-solid uno-border-4px uno-border-yellow">
        <tm-text label="border-4" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-border-solid uno-border-6px uno-border-yellow">
        <tm-text label="border-6" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-border-solid uno-border-8px uno-border-yellow">
        <tm-text label="border-8" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-border-solid uno-border-10px uno-border-yellow">
        <tm-text label="border-10" />
      </view>
    </view>
  </tm-sheet>
  <view class="uno-p-2" />
</template>
