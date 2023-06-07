<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基本示例" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-button :width="120" :margin="[10]" :shadow="0" size="large" label="large" />
        <tm-button :margin="[10]" :shadow="0" size="normal" label="normal" />
        <tm-button :margin="[10]" size="small" :shadow="0" label="small" />
        <tm-button :margin="[10]" size="mini" :shadow="0" label="mini" />

        <tm-button :margin="[10]" :shadow="0" text size="normal" outlined label="浅边框" />
        <tm-button :margin="[10]" :shadow="0" :border="6" outlined size="normal" label="深边框" />
        <tm-button :margin="[10]" transprent text :shadow="0" size="normal" label="透明背景" />
      </view>
      <tm-button block label="block" />
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="带图标" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-button icon="tmicon-tongzhifill" size="normal" label="按钮" />
        <tm-button
          color="red"
          icon="tmicon-account"
          :width="86"
          :round="10"
          :height="86"
          :font-size="40"
          :margin="[10]"
          :shadow="0"
          size="normal"
        />
        <tm-button
          color="green"
          icon="tmicon-account"
          :width="86"
          :round="10"
          :height="86"
          :font-size="40"
          :margin="[10]"
          :shadow="0"
          text
          size="normal"
        />
        <tm-button
          icon="tmicon-account"
          color="pink"
          :margin="[10]"
          :shadow="0"
          text
          :border="2"
          border-style="dashed"
          size="normal"
          label="按钮"
        />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="带图标" />
      <tm-divider />
      <view class="flex flex-row flex-wrap">
        <tm-button :margin="[0]" disabled icon="tmicon-tongzhifill" size="normal" label="禁用" />
        <tm-button :margin="[24, 0]" loading icon="tmicon-tongzhifill" size="normal" label="加载中" />
        <tm-button :margin="[0, 24]" icon="tmicon-tongzhifill" size="normal" label="正常" />
      </view>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="渐变样式,更多属性见文档" />
      <tm-divider />
      <tm-button :linear-color="['#ea3c2d', '#ff9d14']" color="orange" font-color="white" linear="left" block label="自定义渐变背景" />
      <tm-button linear="right" block label="light" />
      <tm-button linear="right" linear-deep="dark" block label="dark" />
      <tm-button linear="right" linear-deep="accent" block label="accent" />
    </tm-sheet>
  </tm-app>
</template>
