<script lang="ts" setup></script>

<template>
  <tm-app>
    <tm-sheet _class="flex-col">
      <tm-text :font-size="30" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <view>
        <tm-timeline>
          <tm-timeline-item color="green" :size="32" type="fill" icon="tmicon-check" time="20222-3-25">
            <tm-sheet no-level :shadow="2" :round="3" :margin="[0, 10]">
              <tm-text
                label="已经到了中转站，请注意查收已经到了中转站，请注意查收已经到了中转站，请注意查收已经到了中转站，请注意查收"
              />
            </tm-sheet>
          </tm-timeline-item>
          <tm-timeline-item color="red" time="20222-3-25">
            <tm-sheet no-level :shadow="2" :round="3" :margin="[0, 10]">
              <tm-text
                label="已经到了中转站，请注意查收已经到了中转站，请注意查收已经到了中转站，请注意查收已经到了中转站，请注意查收"
              />
            </tm-sheet>
          </tm-timeline-item>
          <tm-timeline-item color="blue" time="20222-3-25">
            <tm-sheet no-level :shadow="2" :round="3" :margin="[0, 10]">
              <tm-text
                label="已经到了中转站，请注意查收已经到了中转站，请注意查收已经到了中转站，请注意查收已经到了中转站，请注意查收"
              />
            </tm-sheet>
          </tm-timeline-item>
        </tm-timeline>
      </view>
    </tm-sheet>
  </tm-app>
</template>
