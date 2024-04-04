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
    path: "/users/:id",
    component: UserDetail,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
