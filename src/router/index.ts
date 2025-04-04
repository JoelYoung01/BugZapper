import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import { useSessionStore } from "@/stores/session";
import LandingPage from "@/views/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/landing",
      alias: "/",
      name: "Landing Page",
      component: LandingPage,
      meta: {
        noAuthReq: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
      meta: {
        noAuthReq: true
      }
    }
  ]
});

// Verify user is logged in before routing
router.beforeEach((to) => {
  const sessionStore = useSessionStore();

  if (!sessionStore.currentUser && !to.meta.noAuthReq) {
    return `/login?redirectUrl=${to.fullPath}`;
  }
});

export default router;
