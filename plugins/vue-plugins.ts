import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import Vant from "vant";

//在此注册vue插件
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueClipboard).use(Vant);
});
