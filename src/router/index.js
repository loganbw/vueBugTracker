import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import HomeViewVue from "../views/HomeView.vue";
import BoardView from "../views/BoardView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeViewVue,
    },
    {
      path: "/board",
      name: "card",
      component: BoardView,
    },
    {
      path:"/teams",
      component: null,
      children:[
        {
          path:":id",
          component: null
        },
        {
          path:"member",
          component: null
        },
        {
          path:"board",
          component: null
        },
        {
          path:"board/flow/:id",
          component: null
        },
      ]
    },
    {
      path:"/board/:id",
      component: null
    },
    {
      path:"/register",
      component: null
    },
    {
      path:"/:notFound(.*)",
      component: null
    },
  ],
});

export default router;
