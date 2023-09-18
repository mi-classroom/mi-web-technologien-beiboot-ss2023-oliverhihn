import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import SceneHome from "./components/SceneHome.vue";
import SceneHome2 from "./components/SceneHome2.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/menu",
      name: "Menu",
      component: Menu,
    },
    {
      path: "/session",
      name: "SceneHome",
      component: SceneHome,
    },
    {
      path: "/session2",
      name: "SceneHome2",
      component: SceneHome2,
    },
  ],
});

export default router;
