export default defineNuxtRouteMiddleware((to, from) => {
  //  此处可以做一些校验拦截
  if (to.path.includes("/asd")) return navigateTo("/");
});
