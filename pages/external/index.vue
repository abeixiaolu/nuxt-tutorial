<script setup lang="ts">
const id = ref(1);
const headers = useRequestHeaders(["cookie"]);
const {
  data: product,
  status,
  error,
  execute,
} = useFetch(() => `https://dummyjson.com/products/${id.value}`, {
  lazy: true,
  server: false,
  key: "product" + id.value,
  immediate: false,
  // pick: ["title", "description"] as any,
  transform: (product: any) => {
    return {
      title: product.title,
      description: product.description,
    };
  },
  headers,
});
const cacheData = useNuxtData("product" + id.value);
watchEffect(() => {
  console.log("cacheData", cacheData.data.value);
});
/* Same as:
const { data: product, pending, error } = await useAsyncData(() => {
  return $fetch(`https://dummyjson.com/products/${id.value}`)
}, {
  watch: [id]
})
*/

const canDecrease = computed(() => id.value > 1);
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="flex items-center gap-2">
      Result of <code>https://dummyjson.com/products/</code>
      <UInput v-model="id" type="number" />
    </p>
    <p>
      <template v-if="status === 'idle'">
        <UButton @click="execute">Get data</UButton>
        -
      </template>
      <UButton :disabled="!canDecrease" @click="canDecrease ? id-- : null">
        Previous
      </UButton>
      -
      <UButton @click="id++"> Next </UButton>
    </p>
    <p v-if="status === 'pending'">Fetching...</p>
    <pre v-else-if="error">{{ error }}</pre>
    <pre v-else>{{ product }}</pre>
    <NuxtLink class="underline" to="/"> Back to Home </NuxtLink>
  </div>
</template>
