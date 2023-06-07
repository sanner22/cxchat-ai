<script lang="ts" setup>
const text
    = '英国广播公司（BBC）24日再次“爆料”，称黑客从新疆警方电存数据，其中包括“存数据，其中包括“存数据，其中包括“存数据，其中包括“脑服务器中获取了大量缓存数据，其中包括“再教育中心”“囚犯”照片。该报道刚刚发出，美国国务院和英国外交部就一齐上阵，夸张地表示“震惊”和“愤慨”。不得不说，在编造涉疆谎言方面，美西方舆论和政客的相互配合，已经熟练到“肌肉记忆”的程度。'
function beforeOpen() {
  uni.showLoading({ title: '...' })
  // eslint-disable-next-line promise/param-names
  return new Promise((res, rej) => {
    setTimeout(() => {
      uni.hideLoading()
      rej(new Error('不允许阅读'))
      uni.showToast({ title: '不允许阅读', icon: 'none' })
    }, 1500)
  })
}
</script>

<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档" />
      <tm-divider />
      <tm-more>
        <tm-text :label="text" />
      </tm-more>
      <tm-divider />
      <tm-text :font-size="24" _class="font-weight-b" label="下面是打开前的勾子，不允许查看" />
      <tm-divider />
      <tm-more :before-open="beforeOpen">
        <tm-image :width="636" :height="120" src="https://picsum.photos/636/120" />
        <tm-text :label="text" />
      </tm-more>
    </tm-sheet>
  </tm-app>
</template>
