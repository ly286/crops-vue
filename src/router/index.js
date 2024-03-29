import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Login from '@/views/Login.vue';



const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },

  {
    path: '/login',
    name: 'Login',
    component: Login, // 导入并使用登录页面组件
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
