import "./style.css";
import Vue from "vue";
import VueRouter from "vue-router";
import eruda from "eruda";
import router from "./router";

Vue.use(VueRouter);
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
