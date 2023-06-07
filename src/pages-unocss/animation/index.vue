<script setup lang="ts"></script>

<template>
  <tm-app>
    <tm-sheet :margin="[32]">
      <view uno-flex="~ col gap-y-15px">
        <view class="uno-animate-[4s_linear_0s_infinite_alternate_bounce] uno-bg-indigo uno-center uno-p-2">
          <tm-text label="animate-[4s_linear_0s_infinite_alternate_bounce]" />
        </view>
        <view class="uno-animate-my-animation uno-bg-indigo uno-center uno-p-2">
          <tm-text label="my-animation" />
        </view>
        <view class="uno-animate-bounce uno-bg-indigo uno-center uno-p-2">
          <tm-text label="bounce" />
        </view>
        <view class="uno-animate-flash uno-bg-indigo uno-center uno-p-2">
          <tm-text label="flash" />
        </view>
        <view class="uno-animate-pulse uno-bg-sky uno-center uno-p-2">
          <tm-text label="pulse" />
        </view>
        <view class="uno-animate-pulse-alt uno-bg-sky uno-center uno-p-2">
          <tm-text label="pulse-alt" />
        </view>
        <view class="uno-animate-pulse-bck uno-bg-sky uno-center uno-p-2">
          <tm-text label="pulse-bck" />
        </view>
        <view class="uno-animate-pulse-fwd uno-bg-sky uno-center uno-p-2">
          <tm-text label="pulse-fwd" />
        </view>
        <view class="uno-animate-rubber-band uno-animate-iteration-infinite uno-bg-purple uno-center uno-p-2">
          <tm-text label="rubber-band" />
        </view>
        <view class="uno-animate-shake-x uno-animate-iteration-infinite animate-duration-1500 uno-bg-purple uno-center uno-p-2">
          <tm-text label="shake-x" />
        </view>
        <view class="uno-animate-shake-y uno-animate-iteration-infinite animate-duration-1500 uno-bg-purple uno-center uno-p-2">
          <tm-text label="shake-y" />
        </view>
        <view class="uno-animate-head-shake uno-animate-iteration-infinite uno-bg-purple uno-center uno-p-2">
          <tm-text label="head-shake" />
        </view>
        <view class="uno-animate-swing uno-animate-iteration-infinite uno-bg-purple uno-center uno-p-2">
          <tm-text label="swing" />
        </view>
        <view class="uno-animate-tada uno-animate-iteration-infinite uno-bg-purple uno-center uno-p-2">
          <tm-text label="tada" />
        </view>
        <view class="uno-animate-wobble uno-animate-iteration-infinite uno-bg-purple uno-center uno-p-2">
          <tm-text label="wobble" />
        </view>
        <view class="uno-animate-jello uno-animate-iteration-infinite uno-bg-purple uno-center uno-p-2">
          <tm-text label="jello" />
        </view>
        <view class="uno-animate-heart-beat uno-animate-iteration-infinite uno-bg-purple uno-center uno-p-2">
          <tm-text label="heartBeat" />
        </view>
        <view class="uno-animate-spin uno-bg-cyan uno-center uno-p-2">
          <tm-text label="spin" />
        </view>
        <view class="uno-animate-ping uno-bg-fuchsia uno-center uno-p-2">
          <tm-text label="ping" />
        </view>
        <view class="uno-animate-back-in-down uno-animate-iteration-infinite uno-bg-purple uno-center uno-p-2">
          <tm-text label="back-in-down" />
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>

<style lang="scss" scoped></style>
