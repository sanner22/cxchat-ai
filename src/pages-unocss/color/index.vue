<template>
  <tm-app>
    <tm-sheet :margin="[32]">
      <view uno-flex="~ col gap-y-8px">
        <view class="uno-bg-[#3498db]">
          <tm-text label="bg-[#3498db]" />
        </view>
        <view class="uno-bg-[#3498db]/80">
          <tm-text label="bg-[#3498db]/80" />
        </view>
        <view class="uno-bg-[#3498db]:60">
          <tm-text label="bg-[#3498db]:60" />
        </view>
        <view class="uno-bg-[#3498db]_40">
          <tm-text label="bg-[#3498db]_40" />
        </view>
        <view class="uno-bg-hex-e74c3c">
          <tm-text label="bg-hex-e74c3c" />
        </view>
        <view class="uno-text-hex-8e44ad">
          text-hex-8e44ad
        </view>
        <view class="uno-text-hex-8e44ad/80">
          text-hex-8e44ad/80
        </view>
        <view class="uno-text-hex-8e44ad:60">
          text-hex-8e44ad:60
        </view>
        <view class="uno-text-hex-8e44ad_40">
          text-hex-8e44ad_40
        </view>
        <view class="uno-bg-hex-000/80 uno-text-hex-fff:60">
          bg-hex-000/80 text-hex-fff:60
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
