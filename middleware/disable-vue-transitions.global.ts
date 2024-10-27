export default defineNuxtRouteMiddleware((to) => {
  // @ts-expect-error no check
  if (import.meta.server || !document.startViewTransition) {
    return;
  }

  // Disable built-in Vue transitions
  to.meta.pageTransition = false;
  to.meta.layoutTransition = false;
});
