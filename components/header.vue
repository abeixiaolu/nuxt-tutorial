<script setup lang="ts">
const route = useRoute();
const id = computed(() => Number(route.params.id || 1));
const prev = computed(() => "/albums/" + (id.value - 1));
const next = computed(() => "/albums/" + (id.value + 1));
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/albums/2">Album 2</NuxtLink></li>
        <li><NuxtLink to="/dynamic-title">Dynamic Title</NuxtLink></li>
        <li><NuxtLink to="/external">External</NuxtLink></li>
      </ul>
    </nav>
    <div v-if="$route.params.id">
      <NuxtLink :to="prev">⬅️</NuxtLink> |
      <NuxtLink :to="next">➡️</NuxtLink>
    </div>
  </header>
</template>
