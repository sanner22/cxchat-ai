<script lang="ts" setup>
import { useRouter } from '@/hooks/router'

const router = useRouter()
</script>

<template>
  <tm-app>
    <tm-navbar title="商城示例" :shadow="0" hide-back />

    <tm-sheet :padding="[24, 0]" :round="5">
      <tm-cell
        show-avatar :round="3" :margin="[0]" :padding="[0, 16]" title="商城首页" label="商城示例模板" right-text="进入"
        url="/pages-demo/mall/index" bottom-border
      >
        <template #avatar>
          <tm-icon class="grey-darken-2" follow-theme :font-size="38" name="tmicon-md-home" />
        </template>
      </tm-cell>
      <tm-cell
        show-avatar :round="3" :margin="[0]" :padding="[0, 16]" title="分类" label="商城示例模板" right-text="进入"
        url="/pages-demo/mall/category" bottom-border
      >
        <template #avatar>
          <tm-icon color="grey-darken-2" follow-theme :font-size="38" name="tmicon-all-fill" />
        </template>
      </tm-cell>
      <tm-cell
        show-avatar :round="3" :margin="[0]" :padding="[0, 16]" title="商品列表" label="商城示例模板" right-text="进入"
        url="/pages-demo/mall/list" bottom-border
      >
        <template #avatar>
          <tm-icon color="grey-darken-2" follow-theme :font-size="38" name="tmicon-alignright-fill" />
        </template>
      </tm-cell>
      <tm-cell
        show-avatar :round="3" :margin="[0]" :padding="[0, 16]" title="商品详情" label="商城示例模板" right-text="进入"
        url="/pages-demo/mall/detail" bottom-border
      >
        <template #avatar>
          <tm-icon color="grey-darken-2" follow-theme :font-size="38" name="tmicon-ios-filing" />
        </template>
      </tm-cell>
      <tm-cell
        show-avatar :round="3" :margin="[0]" :padding="[0, 16]" title="购物车" label="商城示例模板" right-text="进入"
        url="/pages-demo/mall/cart"
      >
        <template #avatar>
          <tm-icon color="grey-darken-2" follow-theme :font-size="38" name="tmicon-shopping-cart-fill" />
        </template>
      </tm-cell>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]" :padding="[24, 0]" :round="5">
      <tm-cell
        show-avatar :round="3" :margin="[0]" :padding="[0, 16]" title="用户中心" label="商城示例模板" right-text="进入"
        url="/pages/user/index" bottom-border @click="router.go('/pages/user/index')"
      >
        <template #avatar>
          <tm-icon color="grey-darken-2" follow-theme :font-size="38" name="tmicon-user-fill" />
        </template>
      </tm-cell>
      <tm-cell
        show-avatar :round="3" :margin="[0]" :padding="[0, 16]" title="用户登录" label="商城示例模板" right-text="进入"
        url="/pages/login/index" bottom-border
      >
        <template #avatar>
          <tm-icon color="grey-darken-2" follow-theme :font-size="38" name="tmicon-unlock-fill" />
        </template>
      </tm-cell>
    </tm-sheet>
  </tm-app>
</template>

<style lang="scss" scoped></style>
