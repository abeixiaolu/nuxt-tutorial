<script setup lang="ts">
// 动态添加样式表
// useHead({
//   link: [
//     {
//       rel: "stylesheet",
//       href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
//     },
//   ],
// });

definePageMeta({
  pageTransition: { name: "rotate" },
});

useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
const title = "About";
</script>

<template>
  <div>
    <h1 class="animate__animated animate__bounce">About</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In cupiditate
      velit, minus illo eligendi expedita quidem labore magni dolore sit
      repudiandae iure commodi ex! Deserunt perspiciatis aliquid at quod minus?
    </p>
  </div>
</template>
