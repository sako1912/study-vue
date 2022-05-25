import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: Layout,
    children: [
      {
        path: "dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "dashboard",
          affix: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
