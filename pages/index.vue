<script setup lang="ts">
// Use a static import for server-side compatibility
// import "~/assets/css/first.scss";

// Caution: Dynamic imports are not server-side compatible
// import('~/assets/css/first.scss')
</script>

<template>
  <div>
    <p>This is an auto-imported component</p>
    <img src="~/assets/xiaolu.jpg" alt="beautiful girl" width="600px" />
  </div>
</template>

<style lang="scss" scoped>
img {
  border-radius: 10px;
  border: 4px solid $secondary;
}
</style>

<style>
@import url("~/assets/css/first.scss");
</style>
