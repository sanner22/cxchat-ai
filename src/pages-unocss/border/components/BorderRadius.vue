<template>
  <tm-sheet :margin="[32]">
    <tm-text label="border-radius" :font-size="20" unit="px" />
    <tm-divider />

    <view uno-flex="~ col gap-y-15px">
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-none">
        <tm-text label="rounded-none" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-sm">
        <tm-text label="rounded-sm" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded">
        <tm-text label="rounded" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-md">
        <tm-text label="rounded-md" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-lg">
        <tm-text label="rounded-lg" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-xl">
        <tm-text label="rounded-xl" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-2xl">
        <tm-text label="rounded-2xl" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-3xl">
        <tm-text label="rounded-3xl" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-1_2">
        <tm-text label="rounded-1_2" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-1/2">
        <tm-text label="rounded-1/2" />
      </view>
      <view class="uno-h-80px uno-bg-blue-300_30 uno-center uno-rounded-full">
        <tm-text label="rounded-full" />
      </view>
    </view>
  </tm-sheet>
</template>
