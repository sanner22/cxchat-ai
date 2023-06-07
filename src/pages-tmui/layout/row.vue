<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet color="primary" :round="3" :shadow="2">
      <tm-text
        :font-size="24"
        label="从3.0.89开始,重新设置row,col的计算方式.如果不指定总宽的时候内容宽度是自动以父级为宽,但这会消耗性能,建议指定总宽度."
      />
    </tm-sheet>

    <view class="px-32">
      <tm-row :width="686">
        <tm-col :border-gutter="[0, 0, 2, 0]" :col="2">
          <tm-text label="2" />
        </tm-col>
        <tm-col :border-gutter="[0, 0, 2, 0]" :col="1">
          <tm-text label="1" />
        </tm-col>
        <tm-col :border-gutter="[0, 0, 2, 0]" :col="2">
          <tm-text label="2" />
        </tm-col>
        <tm-col :border-gutter="[0, 0, 2, 0]" :col="4">
          <tm-text label="4" />
        </tm-col>
        <tm-col :col="1">
          <tm-text label="1" />
        </tm-col>
        <tm-col :border-gutter="[0, 2, 0, 2]" :col="10">
          <tm-text label="10" />
        </tm-col>
        <tm-col :border-gutter="[0, 0, 0, 2]" _class="flex flex-row flex-row-center-center" :col="10" color="primary">
          <view class="flex-1 flex flex-row flex-row-center-center">
            <tm-text label="这里是演示如何让col内容100%宽度." />
          </view>
        </tm-col>
        <tm-col :border-gutter="[0, 0, 2, 0]" _class="flex flex-row flex-row-center-center" :col="3" :height="80">
          <view class="flex-1 flex flex-row flex-row-center-center">
            <tm-text label="3" />
          </view>
        </tm-col>
        <tm-col :col="7" :height="80" align="center">
          <view class="flex-1 yellow">
            <tm-text label="高100%,学会了吗？" />
          </view>
        </tm-col>
      </tm-row>
    </view>

    <tm-sheet>
      <tm-text
        :font-size="28"
        _class="font-weight-b"
        label="下面的示例,未指定row的宽度,是自动计算的.只要指定col属性的列就行."
      />
      <tm-text
        color="red"
        :font-size="24"
        _class="font-weight-b"
        label="未指定row宽时,性能会有相应的损耗.下面在微信端明显能感觉到显示速度要比上方和下方的布局要慢一点,你查看到了吗？(土豪手机请略过)"
      />
      <tm-divider />
      <tm-row :gutter="0" :column="12">
        <tm-col color="red" align="start" :col="4">
          <tm-text label="左4" />
        </tm-col>
        <tm-col color="green" :col="4">
          <tm-text label="中4" />
        </tm-col>
        <tm-col color="blue" align="end" :col="4">
          <tm-text label="右4" />
        </tm-col>
        <tm-col :margin="[0, 2]" color="orange" align="center" :col="12">
          <tm-text label="一行12" />
        </tm-col>
        <tm-col :margin="[0, 0, 0, 2]" color="blue" align="center" :col="4">
          <tm-text label="左4" />
        </tm-col>
        <tm-col :margin="[2, 0, 0, 2]" color="white" align="start" :col="8">
          <tm-row :gutter="0" :column="12">
            <tm-col color="blue-grey" align="center" :col="4">
              <tm-text label="嵌套-4" />
            </tm-col>
            <tm-col :margin="[2, 0, 2, 0]" color="red" align="center" :col="3">
              <tm-text label="嵌套-3" />
            </tm-col>
            <tm-col color="grey" align="center" :col="5">
              <tm-text label="嵌套-5" />
            </tm-col>
          </tm-row>
        </tm-col>
        <tm-col color="red" :col="2">
          <tm-text label="2" />
        </tm-col>
        <tm-col color="green" :col="3">
          <tm-text label="3" />
        </tm-col>
        <tm-col color="blue" :col="4">
          <tm-text label="4" />
        </tm-col>
        <tm-col color="green" :col="3">
          <tm-text label="3" />
        </tm-col>
      </tm-row>
    </tm-sheet>

    <tm-sheet :margin="[32, 0]">
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="下方是指定了gutter,和row的宽度,并且更改了最大列数为3,性能会更好."
      />
      <tm-divider />
      <tm-row :width="638" :column="3" color="blue-grey" :gutter="5">
        <tm-col color="green">
          <tm-text label="3" />
        </tm-col>
        <tm-col :margin="[4, 0]" color="red">
          <tm-text label="文本" />
        </tm-col>
        <tm-col color="blue">
          <tm-text label="文本" />
        </tm-col>
      </tm-row>
    </tm-sheet>
  </tm-app>
</template>
