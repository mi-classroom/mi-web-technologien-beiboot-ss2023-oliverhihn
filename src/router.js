import Browse from "./components/Browse.vue";
import Home from "./components/Home.vue";
import Wiehl from "./components/Wiehl.vue";
import Menu from "./components/Menu.vue";
import SceneHome from "./components/SceneHome.vue";
import Vue from "vue";
import VueRouter from "vue-router";

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
      path: "/browse",
      name: "Browse",
      component: Browse,
    },
    {
      path: "/wiehl",
      name: "Wiehl",
      component: Wiehl,
    },
  ],
});

export default router;
