<template>
  <tm-app>
    <tm-sheet>
      <view class="bg-to-t">
        apply bg-to-t
      </view>
      <view class="bg-unocss" />
      <view class="bg-to-r">
        apply bg-to-r
      </view>
    </tm-sheet>
  </tm-app>
</template>

<style lang="scss" scoped>
.bg-to-t {
  @apply uno-center uno-h-100px uno-rounded-md uno-bg-gradient-to-t uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-15px;
}

.bg-unocss {
  --logo: url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg);
  background-image: var(--logo);
  @apply uno-w-100px uno-h-100px uno-bg-cover uno-mx-auto uno-mb-15px;
}

.bg-to-r {
  // --at-apply 会编译 ;; 导致小程序编译错误
  // --at-apply: uno-center uno-h-100px uno-rounded-md uno-bg-gradient-to-r uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70
  @apply uno-center uno-h-100px uno-rounded-md uno-bg-gradient-to-r uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70;
}
</style>
