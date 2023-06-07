<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <view class="flex flex-row">
        <view class="mx-32">
          <tm-popover position="tl">
            <tm-text label="汽泡上左" />
          </tm-popover>
        </view>
        <view class="mx-32">
          <tm-popover color="red">
            <tm-text label="汽泡上中" />
          </tm-popover>
        </view>
        <view class="mx-32">
          <tm-popover position="tr" color="primary" text>
            <tm-text label="汽泡上右" />
          </tm-popover>
        </view>
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="不同的位置，颜色渐变等十余种属性见文档" />
      <tm-divider />
      <view class="flex flex-row">
        <view class="mx-32">
          <tm-popover position="bl" linear="bottom" color="green">
            <tm-text label="汽泡底左" />
          </tm-popover>
        </view>
        <view class="mx-32">
          <tm-popover position="bc" color="black">
            <tm-text label="汽泡底中" />
          </tm-popover>
        </view>
        <view class="mx-32">
          <tm-popover position="br" color="primary">
            <tm-text label="汽泡底右" />
          </tm-popover>
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
