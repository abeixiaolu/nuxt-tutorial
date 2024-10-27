<script setup lang="ts">
definePageMeta({
  validate: (params) => {
    if (/^\d+$/.test(params.id)) return true;
    return {
      statusCode: 404,
      statusMessage: "Post not found",
    };
  },
});
const route = useRoute();
</script>

<template>
  <div>
    <h1>Posts {{ route.params.id }}</h1>
  </div>
</template>
