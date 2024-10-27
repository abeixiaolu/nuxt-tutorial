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

const counter = useState("counter");
</script>

<template>
  <div>
    <h1 class="animate__animated animate__bounce">About {{ counter }}</h1>
    <div class="grid grid-cols-3 gap-4">
      <p>
        Nuxt
        是一个可以在服务器和客户端环境中运行同构（或通用）代码的框架。如果在 Vue
        组件的 setup 函数中使用 $fetch
        函数来执行数据获取，这可能会导致数据被获取两次，一次在服务器上（渲染
        HTML），另一次在客户端（当 HTML
        被激活时）。这可能会导致水合问题，增加交互时间并导致不可预知的行为。
      </p>
      <p>
        在上面的示例中，useFetch
        将确保请求发生在服务器中，并正确转发到浏览器。$fetch
        没有这样的机制，当请求仅从浏览器发出时，它是一个更好的选择。 也就是说
        post 请求时，使用 $fetch 更合适。 获取数据时使用 useFetch 更合适。
        建议将 $fetch 用于客户端交互（基于事件），或在获取初始组件数据时与
        useAsyncData 结合使用。
      </p>
      <p>
        useFetch 可组合项应在 setup
        方法中调用，或在生命周期钩子中直接在函数的顶层调用，否则应使用$fetch方法。
      </p>
    </div>
  </div>
</template>
