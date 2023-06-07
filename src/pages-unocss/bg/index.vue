<template>
  <tm-app>
    <tm-sheet _class="uno-flex uno-flex-col uno-flex-gap-y-15px">
      <view class="uno-flex uno-justify-around !uno-p-10px">
        <view class="uno-w-100rpx uno-h-100rpx uno-bg-cover bg-local-logo" />
        <view class="uno-w-100rpx uno-h-100rpx uno-bg-cover bg-romote-logo" />
      </view>

      <view class="uno-center uno-h-60px uno-rounded-md uno-bg-gradient-to-t uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70">
        <tm-text label="to-t" />
      </view>
      <view class="uno-center uno-h-60px uno-rounded-md uno-bg-gradient-to-tr uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70">
        <tm-text label="to-tr" />
      </view>
      <view class="uno-center uno-h-60px uno-rounded-md uno-bg-gradient-to-r uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70">
        <tm-text label="to-r" />
      </view>
      <view class="uno-center uno-h-60px uno-rounded-md uno-bg-gradient-to-br uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70">
        <tm-text label="to-br" />
      </view>
      <view class="uno-center uno-h-60px uno-rounded-md uno-bg-gradient-to-b uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70">
        <tm-text label="to-b" />
      </view>
      <view class="uno-center uno-h-60px uno-rounded-md uno-bg-gradient-to-bl uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70">
        <tm-text label="to-bl" />
      </view>
      <view class="uno-center uno-h-60px uno-rounded-md uno-bg-gradient-to-l uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70">
        <tm-text label="to-l" />
      </view>
      <view class="uno-center uno-h-60px uno-rounded-md uno-bg-gradient-to-tl uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70">
        <tm-text label="to-tl" />
      </view>
    </tm-sheet>
  </tm-app>
</template>

<style lang="scss" scoped>
  .bg-local-logo {
    --logo: url(../../static/logo.png);
    background-image: var(--logo);
  }
  .bg-romote-logo {
    --logo: url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg);
    background-image: var(--logo);
  }
</style>
