<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础评论" />
    </tm-sheet>
    <tm-comment
      author="同名自定义"
      avatar="https://picsum.photos/200/200"
      time="2022/5/20 13:25"
      content="这是一条最简单的评论内容。"
    />
    <tm-comment
      author="同名自定义"
      avatar="https://picsum.photos/200/200"
      time="2022/5/20 13:25"
      content="这是一条最简单的评论内容。"
    >
      <template #actions>
        <view class="flex flex-row norwap">
          <view class="flex flex-row flex-center pl-16">
            <tm-icon :font-size="24" name="tmicon-comment-dots" />
            <tm-text _class="pl-10" :font-size="24" label="125" />
          </view>
          <view class="flex flex-row flex-center pl-16">
            <tm-icon :font-size="24" name="tmicon-md-heart" />
            <tm-text _class="pl-10" :font-size="24" label="125" />
          </view>
        </view>
      </template>
    </tm-comment>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="可以通过插槽，样式属性配置更个性化" />
    </tm-sheet>
    <tm-comment
      author="同名自定义"
      avatar="https://picsum.photos/200/200"
      time="2022/5/20 13:25"
      content="这是一条最简单的评论内容。"
    >
      <tm-comment
        :border="1"
        :margin="[0, 8]"
        author="同名自定义"
        avatar="https://picsum.photos/200/200"
        time="2022/5/20 13:25"
        content="这是一条最简单的评论内容。"
      >
        <tm-comment
          color="grey"
          linear="left"
          text
          :border="1"
          :margin="[0, 8]"
          author="同名自定义"
          avatar="https://picsum.photos/200/200"
          time="2022/5/20 13:25"
          content="这是一条最简单的评论内容。"
        >
          <template #actions>
            <view class="flex flex-row norwap">
              <view class="flex flex-row flex-center pl-16">
                <tm-icon :font-size="24" name="tmicon-comment-dots" />
                <tm-text _class="pl-10" :font-size="24" label="125" />
              </view>
              <view class="flex flex-row flex-center pl-16">
                <tm-icon :font-size="24" name="tmicon-md-heart" />
                <tm-text _class="pl-10" :font-size="24" label="125" />
              </view>
            </view>
          </template>
        </tm-comment>
      </tm-comment>
    </tm-comment>
    <tm-comment
      author="同名自定义"
      avatar="https://picsum.photos/200/200"
      time="2022/5/20 13:25"
      content="您也可配置输入框进行回复操作。"
    >
      <tm-input />
      <view class="flex flex-row flex-row-center-end">
        <tm-button color="red" :margin="[24, 0]" label="确认评论" :font-size="24" :width="160" :height="60" />
        <tm-button color="white" label="取消" :font-size="24" :width="120" :height="60" />
      </view>
    </tm-comment>
  </tm-app>
</template>
