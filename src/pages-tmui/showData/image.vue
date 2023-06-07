<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <view>
        <tm-image preview :width="300" :height="200" src="https://picsum.photos/200/300" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="关闭按钮" />
      <tm-divider />
      <view>
        <tm-image delete preview :width="300" :height="200" src="https://picsum.photos/200/300?id=666" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="展示额外的内容" />
      <tm-divider />
      <tm-image extra preview :width="300" :height="200" src="https://picsum.photos/200/300?id=022">
        <template #extra>
          <tm-sheet :margin="[0, 0]" :padding="[12, 10]" _class="flex-row flex-between " paren-class="opacity-6">
            <view class="flex flex-row flex-center pl-16">
              <tm-icon :font-size="24" name="tmicon-comment-dots" />
              <tm-text _class="pl-10" :font-size="24" label="125" />
            </view>
            <view class="flex flex-row flex-center pl-16">
              <tm-icon :font-size="24" name="tmicon-md-heart" />
              <tm-text _class="pl-10" :font-size="24" label="125" />
            </view>
          </tm-sheet>
        </template>
      </tm-image>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="图片组，组成简单的相册集" />
      <tm-divider />
      <tm-image-group>
        <tm-image
          v-for="item in 14"
          :key="item"
          :padding="[2, 2]"
          preview
          :width="155"
          :height="156"
          :src="`https://picsum.photos/312/312?id=${item}`"
        />
      </tm-image-group>
    </tm-sheet>
  </tm-app>
</template>
