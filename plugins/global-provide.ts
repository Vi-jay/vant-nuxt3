export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      calcPrice: (num: number) => num.toFixed(2),
    },
  };
});
