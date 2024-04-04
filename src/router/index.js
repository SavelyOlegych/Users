import Vue from "vue";
import VueRouter from "vue-router";
import Users from "@/pages/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Users,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
