import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import HomeViewVue from "../views/HomeView.vue";
import BoardView from "../views/BoardView.vue";
import NotFound from "../components/NotFound.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeViewVue,
    },
    {
      //for testing need to move this to dynamic teams route
      path: "/board",
      name: "card",
      component: BoardView,
    },
    {
      path: "/teams/:id",
      component: null,
      children: [
        {
          path: ":teamId",
          component: null,
        },
        {
          path: "member",
          component: null,
        },
        {
          path: "board",
          component: null,
        },
        {
          path: "board/flow/:id",
          component: null,
        },
      ],
    },
    {
      path: "/board/:id",
      component: null,
    },
    {
      path: "/register",
      component: null,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
