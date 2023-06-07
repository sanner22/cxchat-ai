<template>
  <tm-app>
    <tm-sheet>
      <tm-text label="divide-x" :font-size="20" unit="px" />
      <tm-divider />

      <view class="uno-flex uno-h-50rpx uno-divide-x uno-divide-yellow-500:50">
        <view class="uno-flex-1 uno-center">
          <tm-text label="view" />
        </view>
        <view class="uno-flex-1 uno-center">
          <tm-text label="view" />
        </view>
        <view class="uno-flex-1 uno-center">
          <tm-text label="view" />
        </view>
      </view>
    </tm-sheet>

    <tm-sheet>
      <tm-text label="divide-y" :font-size="20" unit="px" />
      <tm-divider />

      <view class="uno-divide-y uno-divide-blue">
        <view class="uno-center">
          <tm-text label="view" />
        </view>
        <view class="uno-center">
          <tm-text label="view" />
        </view>
        <view class="uno-center">
          <tm-text label="view" />
        </view>
      </view>
    </tm-sheet>

    <tm-sheet>
      <tm-text label="divide-(number)" :font-size="20" unit="px" />
      <tm-divider />

      <view class="uno-divide-y-20 uno-divide-red-500 uno-divide-opacity-50">
        <view class="uno-center">
          <tm-text label="view" />
        </view>
        <view class="uno-center">
          <tm-text label="view" />
        </view>
        <view class="uno-center">
          <tm-text label="view" />
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
