interface GlobalProvide {
  $calcPrice(num: number): number;
}
declare module "#app" {
  interface NuxtApp extends GlobalProvide {}
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties extends GlobalProvide {}
}

export {};
