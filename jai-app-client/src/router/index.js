import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginForm from "../views/LoginForm.vue";
import RegisterForm from "../views/RegisterForm.vue";
import OrderForm from "../views/OrderForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/login",
      name: "LoginForm",
      component: LoginForm,
    },
    {
      path: "/register",
      name: "RegisterForm",
      component: RegisterForm,
    },
    {
      path: "/orders",
      name: "OrderForm",
      component: OrderForm,
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (
    (localStorage.access_token && to.path === "/login") ||
    (localStorage.access_token && to.path === "/register")
  ) {
    return { path: "/" };
  }
  if (
    (!localStorage.access_token && to.path === "/") ||
    (!localStorage.access_token && to.path === "orders")
  ) {
    return { path: "/login" };
  }
});

export default router;
