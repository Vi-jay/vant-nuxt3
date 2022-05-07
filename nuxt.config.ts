import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components: false,
    buildModules: [["@pinia/nuxt", { disableVuex: true }]],
    runtimeConfig:{
        public:{
            xx:123,
        }
    },
    // vite:{
    //     // @ts-ignore
    //     plugins:[
    //         styleImport({
    //             resolves: [VantResolve()],
    //         }),
    //     ]
    // }
});
