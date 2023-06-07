<template>
  <tm-app>
    <tm-sheet :margin="[32]">
      <tm-text label="first:class last:class" :font-size="20" unit="px" />

      <view class="uno-mt-10px">
        <tm-text :font-size="24">
          第一个子元素为 bg-red
        </tm-text>
        <tm-text :font-size="24">
          最后一个子元素为 bg-green
        </tm-text>
        <tm-text :font-size="24">
          其他为 bg-blue
        </tm-text>
      </view>

      <view class="uno-mt-20px" uno-flex="~ col gap-y-10px">
        <view class="first:uno-bg-red last:uno-bg-green uno-bg-blue uno-p-1">
          1
        </view>
        <view class="first:uno-bg-red last:uno-bg-green uno-bg-blue uno-p-1">
          2
        </view>
        <view class="first:uno-bg-red last:uno-bg-green uno-bg-blue uno-p-1">
          3
        </view>
        <view class="first:uno-bg-red last:uno-bg-green uno-bg-blue uno-p-1">
          4
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
