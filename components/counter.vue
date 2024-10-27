<script setup lang="ts">
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>

<template>
  <div class="text-rose-500">
    Counter: {{ counter }}
    <div class="flex gap-2">
      <UButton color="rose" @click="counter++">+</UButton>
      <UButton color="rose" @click="counter--">-</UButton>
    </div>
  </div>
</template>
