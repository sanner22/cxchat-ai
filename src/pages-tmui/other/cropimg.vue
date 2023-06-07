<script lang="ts" setup>
const cropimgConfig = (e: any) => {
  // h5为base64
  console.log(e)
}
</script>

<template>
  <tm-app>
    <tm-cropimg @confirm="cropimgConfig" />
  </tm-app>
</template>
