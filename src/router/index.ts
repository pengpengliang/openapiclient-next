/*
 * @Date: 2020-09-15 16:52:51
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/index/Index.vue";
import Login from "../views/login/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "/dataResource",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue")
      },
      {
        path: "/dataServices",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
