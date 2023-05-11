import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "flag-icon-css/css/flag-icons.css";
import "@/assets/font/iconfont.css";
import "normalize.css/normalize.css";
import "@/assets/style/reset.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
