<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="30" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="为了切实解决复杂索引布局,与官方(或者说同类索引组件)的拉开差距,我重新升级了,子项目不再要求设定高度,你可以随意的布局复杂的子项目来提供快速索引功能.请注意子项目:不一定是要列表型,可以随意表单啊,城市列表哈,单选,多选之类的复杂布局轻松应付"
      />
    </tm-sheet>

    <tm-indexes>
      <tm-indexes-item title="热门热门" nav-title="热">
        <view class="my-10 flex flex-row flex-wrap" style="height: 150rpx">
          <tm-tag outlined label="北京" />
          <tm-tag outlined label="南昌" />
          <tm-tag outlined label="长沙" />
          <tm-tag outlined label="广东" />
          <tm-tag outlined label="福建" />
          <tm-tag outlined label="安徽" />
          <tm-tag outlined label="长沙" />
          <tm-tag outlined label="广东" />
          <tm-tag outlined label="福建" />
          <tm-tag label="安徽" />
        </view>
      </tm-indexes-item>
      <tm-indexes-item
        v-for="(item, index) in 60"
        :key="index"
        :title="index % 10 === 0 ? index : ''"
        :nav-title="index"
      >
        <view class="my-16">
          <tm-text :label="`想要什么的.-${index}`" />
        </view>
      </tm-indexes-item>
    </tm-indexes>
  </tm-app>
</template>
