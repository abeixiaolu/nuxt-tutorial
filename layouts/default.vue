<script setup lang="ts">
const route = useRoute();
console.log("route: ", route);

useHead({
  meta: [{ property: "og:title", content: "App Name - " + route.meta.title }],
});
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
