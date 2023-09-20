import "./style.css";
import HeaderComponent from "./components/HeaderComponent.vue";
import PathComponent from "./components/PathComponent.vue";
import PointComponent from "./components/PointComponent.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import eruda from "eruda";
import router from "./router";
import { Plugin } from "vue-responsive-video-background-player";

Vue.use(VueRouter);
Vue.use(Plugin);
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
