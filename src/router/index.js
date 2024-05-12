import Vue from "vue";
import VueRouter from "vue-router";
import Users from "@/pages/Users.vue";
import UserDetail from "@/pages/UserDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Users,
  },
  {
    path: "/:id",
    component: UserDetail,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
