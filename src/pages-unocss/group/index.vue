<template>
  <tm-app>
    <tm-sheet :round="5">
      <tm-text :font-size="16" unit="px">
        uno-flex="~ row wrap" 等效于 class="uno-flex uno-flex-row uno-flex-wrap"
      </tm-text>
      <tm-divider />

      <view uno-flex="~ row wrap gap-10px">
        <view v-for="(item, index) in 10" :key="index" class="uno-w-1/5 uno-bg-blue_30 hover:uno-bg-yellow_30">
          <tm-text :label="item" class="uno-p-5px" />
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
