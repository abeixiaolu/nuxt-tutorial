<script setup lang="ts">
const websiteStore = useWebsiteStore();

await callOnce(websiteStore.fetch);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <NuxtLoadingIndicator />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotateZ(360deg);
}
</style>
