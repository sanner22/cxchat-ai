<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet :margin="[32]" :round="3" :shadow="2">
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="本组件，是所有组件的基石，拥有众多个性化属性，请查看文档了解更多属性。边线，背景、圆角、投影、渐变、内外边距轻松设置，还能兼容全端。"
      />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]" :shadow="4" :round="2" color="primary">
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="不同的方向，还有更多丰富属性见文档,这是基础组件,只要套在外面用来自动配色使用,适应暗黑效果,切不可无限套的太多,影响性能."
      />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]" :shadow="4" :round="2" color="pink" linear="right">
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="不同的方向，还有更多丰富属性见文档,这是基础组件,只要套在外面用来自动配色使用,适应暗黑效果,切不可无限套的太多,影响性能."
      />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]" :shadow="4" :round="2" color="yellow" linear="right" liear-deep="accent">
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="不同的方向，还有更多丰富属性见文档,这是基础组件,只要套在外面用来自动配色使用,适应暗黑效果,切不可无限套的太多,影响性能."
      />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]" :shadow="4" :round="2" color="orange" text>
      <tm-text :font-size="24" _class="font-weight-b" label="文本浅色背景，圆角" />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]" :shadow="4" :round="2" color="orange" outlined>
      <tm-text :font-size="24" _class="font-weight-b" label="带边框,背景透明" />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]" :shadow="4" :round="2" color="green" :border="1" border-style="dashed" text>
      <tm-text :font-size="24" _class="font-weight-b" label="虚线边框" />
    </tm-sheet>
    <tm-sheet :margin="[32, 0, 32, 32]" :shadow="0" :round="0" color="blue-grey" :border="1" border-direction="y" text>
      <tm-text :font-size="24" _class="font-weight-b" label="上下边线" />
    </tm-sheet>
    <tm-sheet color="blue-grey" outlined :round="3">
      <tm-sheet color="green" outlined :round="3">
        <tm-sheet color="red" outlined :round="3">
          <tm-sheet color="green" outlined text :round="3">
            <tm-text :font-size="24" _class="font-weight-b" label="可以无限嵌套" />
          </tm-sheet>
        </tm-sheet>
      </tm-sheet>
    </tm-sheet>
  </tm-app>
</template>
