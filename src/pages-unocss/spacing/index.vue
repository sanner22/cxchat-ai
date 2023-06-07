<template>
  <tm-app>
    <tm-sheet :margin="[32, 32, 32, 32]">
      <tm-text label="padding 内边距" :font-size="20" unit="px" />
      <tm-divider />
      <!--  -->
      <view uno-flex="~ row wrap gap-10px" class="uno-items-start">
        <view class="uno-bg-blue-300_30 uno-center uno-p-0px">
          <tm-text label="p-0px" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-1">
          <tm-text label="p-1" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-2">
          <tm-text label="p-2" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-3">
          <tm-text label="p-3" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-4">
          <tm-text label="p-4" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-none">
          <tm-text label="p-none" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-xs">
          <tm-text label="p-xs" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-sm">
          <tm-text label="p-sm" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-lg">
          <tm-text label="p-lg" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-xl">
          <tm-text label="p-xl" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center uno-p-2xl">
          <tm-text label="p-2xl" />
        </view>
        <view class="uno-bg-blue-300_30 uno-center -uno-p-2xl">
          <tm-text label="-p-2xl" />
        </view>
      </view>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]">
      <tm-text label="margin 外边距" :font-size="20" unit="px" />
      <tm-divider />
      <!--  -->
      <view uno-flex="~ row wrap gap-10px">
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-0px">
            <tm-text label="m-0px" />
          </view>
        </view>

        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-1">
            <tm-text label="m-1" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-2">
            <tm-text label="m-2" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-3">
            <tm-text label="m-3" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-4">
            <tm-text label="m-4" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-none">
            <tm-text label="m-none" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-xs">
            <tm-text label="m-xs" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-sm">
            <tm-text label="m-sm" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-md">
            <tm-text label="m-md" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-lg">
            <tm-text label="m-lg" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-xl">
            <tm-text label="m-xl" />
          </view>
        </view>
        <view class="uno-bg-blue-300_30">
          <view class="uno-bg-yellow-300_30 uno-m-2xl">
            <tm-text label="m-2xl" />
          </view>
        </view>
      </view>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]">
      <tm-text label="position 定位" :font-size="20" unit="px" />
      <tm-divider />
      <!--  -->
      <view class="uno-bg-blue-300_30 uno-relative uno-w-full uno-h-90vw">
        <view class="uno-bg-yellow-300_30 uno-absolute uno-top-40px">
          <tm-text label="top-40px" />
        </view>
        <view class="uno-bg-yellow-300_30 uno-absolute uno-bottom-40px">
          <tm-text label="bottom-40px" />
        </view>
        <view class="uno-bg-yellow-300_30 uno-absolute uno-left-40px">
          <tm-text label="left-40px" />
        </view>
        <view class="uno-bg-yellow-300_30 uno-absolute uno-right-40px">
          <tm-text label="right-40px" />
        </view>
        <view class="uno-bg-yellow-300_30 uno-absolute uno-top-45vw uno-left-45vw">
          <tm-text label="top-45vw left-45vw" />
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
