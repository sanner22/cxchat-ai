<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="30" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <view class="flex-row flex flex-wrap">
        <tm-tag size="xs" label="标签" />
        <tm-tag color="green" size="s" label="标签" />
        <tm-tag color="orange" size="m" label="标签" />
        <tm-tag color="red" size="n" label="标签" />
        <tm-tag color="blue" size="g" label="标签" />
        <tm-tag color="teal" size="lg" label="大号标签" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="30" _class="font-weight-b" label="允许关闭" />
      <tm-divider />
      <view class="flex-row flex flex-wrap">
        <tm-tag closable size="n" label="标签" />
        <tm-tag closable color="green" size="n" label="标签" />
        <tm-tag closable color="orange" size="n" label="标签" />
        <tm-tag closable color="red" size="n" label="标签" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="30" _class="font-weight-b" label="放置图标，一些其它属性" />
      <tm-divider />
      <view class="flex-row flex flex-wrap">
        <tm-tag text :shadow="0" icon="tmicon-weixinzhifu" color="orange" size="m" label="标签" />
        <tm-tag text :shadow="0" color="red" size="m" label="标签" />
        <tm-tag text outlined :shadow="0" color="red" size="m" label="浅边框" />
        <tm-tag outlined :shadow="0" color="red" size="m" label="深边框" />
        <tm-tag :round="10" text :border="1" border-style="dashed" :shadow="0" color="red" size="m" label="标签" />
        <tm-tag load text :border="1" border-style="dashed" :shadow="0" color="green" size="m" label="加载中" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="30" _class="font-weight-b" label="设置为可选状态" />
      <tm-divider />
      <view class="flex-row flex flex-wrap">
        <tm-tag checkable color="orange" size="m" label="点我切换选中" />
      </view>
    </tm-sheet>
  </tm-app>
</template>
