<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text label="优惠券样例" />
    </tm-sheet>
    <tm-coupon extra thumb="https://picsum.photos/200/300">
      <template #extra>
        <tm-text :font-size="22" _class="opacity-7" label="1.使用不受限制" />
        <tm-text :font-size="22" _class="opacity-7" label="2.使用不受限制" />
      </template>
    </tm-coupon>
    <tm-coupon extra :show-right="false">
      <template #extra>
        <tm-text :font-size="22" _class="opacity-7" label="1.使用不受限制" />
        <tm-text :font-size="22" _class="opacity-7" label="2.使用不受限制" />
      </template>
    </tm-coupon>
    <tm-coupon main-color="pink" />
    <tm-coupon main-color="pink">
      <template #btn>
        <tm-checkbox color="pink" :round="24" />
      </template>
    </tm-coupon>
    <tm-coupon disable btn-label="已经使用" />
    <tm-sheet>
      <tm-text label="其它样式设定" />
    </tm-sheet>
    <tm-coupon
      color="orange"
      linear="right"
      linear-deep="accent"
      main-color="orange"
      font-color=""
      thumb="https://picsum.photos/200/300"
    />
    <tm-coupon color="pink" linear="right" linear-deep="accent" main-color="yellow" font-color="" extra>
      <template #extra>
        <tm-text :font-size="22" _class="opacity-7" label="1.使用不受限制" />
        <tm-text :font-size="22" _class="opacity-7" label="2.使用不受限制" />
      </template>
    </tm-coupon>
    <tm-coupon color="yellow" main-color="pink" font-color="" extra>
      <template #extra>
        <tm-text :font-size="22" _class="opacity-7" label="1.使用不受限制" />
        <tm-text :font-size="22" _class="opacity-7" label="2.使用不受限制" />
      </template>
    </tm-coupon>
  </tm-app>
</template>
