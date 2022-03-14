import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import HomeViewVue from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      component: LandingView,
    },
    {
      path: "/",
      component: HomeViewVue,
    },
  ],
});

export default router;
