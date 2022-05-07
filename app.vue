<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>
<script lang="ts" setup>
//所有路由都会进入的地方 可以做一些初始化 客户端和服务端都会执行 仅在首次进入执行
//可以使用useAsyncData来进行初始化 只会在服务端执行 客户端不执行 直接使用缓存
import {sleep} from "~/utils";

await useAsyncData("GlobalInit",async (ctx)=>{
  console.log("start");
  return Promise.resolve();
});
</script>
<style lang="scss">
@import "vant/lib/index.css";
</style>
