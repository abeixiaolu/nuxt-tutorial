<script setup lang="ts">
definePageMeta({
  validate: ({ params }) => {
    return /^\d+$/.test(params.id as string);
  },
});
const route = useRoute();

useSeoMeta({
  title: "Posts",
  ogTitle: "Posts",
  description: "Posts",
  ogDescription: "Posts",
});
</script>

<template>
  <div>
    <h1>Posts {{ route.params.id }}</h1>
  </div>
</template>
