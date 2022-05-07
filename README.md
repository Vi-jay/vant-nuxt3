app.vue 相当于store 的 nuxtServerInit
page.vue 中使用useLazyAsyncData("asd",()=>Promise.resolve(),{initialCache:false}) 相当于fetch
