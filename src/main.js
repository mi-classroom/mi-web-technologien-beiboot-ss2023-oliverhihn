import "./style.css";
import Vue from "vue";
import router from "./router";
import VueRouter from "vue-router";
import eruda from "eruda";
import PathComponent from "./components/PathComponent.vue";
import PointComponent from "./components/PointComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import { Plugin } from "vue-responsive-video-background-player";
import VueQrcodeReader from "vue-qrcode-reader";
import VueIframe from "vue-iframes";

Vue.use(VueIframe);
Vue.use(VueRouter);
Vue.use(Plugin);
Vue.use(VueQrcodeReader);
Vue.component("HeaderComponent", HeaderComponent);
Vue.component("PathComponent", PathComponent);
Vue.component("PointComponent", PointComponent);
window.eventBus = new Vue();

const app = new Vue({
  el: "#app",
  router,
  data() {
    return {};
  },
  mounted() {
    eruda.init();
  },
});

// For debugging
window.Vue = Vue;
Vue.config.devtools = true;
