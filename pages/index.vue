<template>
  <div id="Index"><van-button>asd</van-button><nuxt-link to="/b">hello</nuxt-link></div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "asd",
});
const { $calcPrice } = useNuxtApp();
console.log($calcPrice(1));

</script>

<style lang="scss" scoped>
#Index {
}
</style>
