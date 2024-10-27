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

const website = useWebsiteStore();
</script>

<template>
  <div class="text-cyan-600">
    <h1>Posts {{ route.params.id }}</h1>
    <p class="text-cyan-600">{{ website.name }}</p>
    <p class="text-cyan-600">{{ website.description }}</p>
  </div>
</template>
