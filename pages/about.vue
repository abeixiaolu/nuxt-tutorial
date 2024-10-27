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
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style
        type="text/css"
        children="body { background-color: green; }"
      ></Style>
    </Head>
    <h1 class="animate__animated animate__bounce">About</h1>
  </div>
</template>
