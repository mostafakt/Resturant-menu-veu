/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AuthLayout from "../layouts/AuthLayout.vue";
import AppLayout from "../layouts/AppLayout.vue";
import Page404Layout from "../layouts/Page404Layout.vue";

import RouteViewComponent from "../layouts/RouterBypass.vue";
import UIRoute from "../pages/admin/ui/route";
import { ACCESS_TOKEN } from "../utils/constants";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:catchAll(.*)",
    redirect: { name: "categories" },
  },
  {
    name: "admin",
    path: "/admin",
    component: AppLayout,
    children: [
      {
        name: "categories",
        path: "categories",
        component: RouteViewComponent,
        children: [
          {
            name: "categories-form",
            path: "categories-form",
            component: () =>
              import("../pages/admin/forms/categories-form/CategoryForm.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/inputs",
            },
          },
          {
            name: "categories-show",
            path: "categories-show",
            component: () =>
              import(
                "../pages/admin/tables/categories-table/CategoriesTable.vue"
              ),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/Tables",
            },
          },
        ],
      },
      {
        name: "items",
        path: "items",
        component: RouteViewComponent,
        children: [
          {
            name: "items-form",
            path: "items-form",
            component: () =>
              import("../pages/admin/forms/items-form/ItemsForm.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/inputs",
            },
          },
          {
            name: "items-show",
            path: "items-show",
            component: () =>
              import("../pages/admin/tables/items-table/ItemsTable.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor",
            },
          },
        ],
      },
      {
        name: "menus",
        path: "menus",
        component: RouteViewComponent,
        children: [
          {
            name: "menus-form",
            path: "menus-form",
            component: () =>
              import("../pages/admin/forms/menus-form/MenusForm.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/inputs",
            },
          },
          {
            name: "menus-show",
            path: "menus-show",
            component: () =>
              import("../pages/admin/tables/menus-table/MenusTable.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor",
            },
          },
          {
            name: "menu-details",
            path: "/menu-details/:id",
            component: () =>
              import("../pages/admin/details/menus-details/MenuDetails.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor",
            },
          },
        ],
      },

      UIRoute,
    ],
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        name: "login",
        path: "login",
        component: () => import("../pages/auth/login/Login.vue"),
      },
      {
        name: "signup",
        path: "signup",
        component: () => import("../pages/auth/signup/Signup.vue"),
      },
      {
        name: "recover-password",
        path: "recover-password",
        component: () =>
          import("../pages/auth/recover-password/RecoverPassword.vue"),
      },
      {
        path: "",
        redirect: { name: "login" },
      },
    ],
  },
  {
    path: "/404",
    component: Page404Layout,
    children: [
      {
        name: "not-found-advanced",
        path: "not-found-advanced",
        component: () => import("../pages/404-pages/VaPageNotFoundSearch.vue"),
      },
      {
        name: "not-found-simple",
        path: "not-found-simple",
        component: () => import("../pages/404-pages/VaPageNotFoundSimple.vue"),
      },
      {
        name: "not-found-custom",
        path: "not-found-custom",
        component: () => import("../pages/404-pages/VaPageNotFoundCustom.vue"),
      },
      {
        name: "not-found-large-text",
        path: "/pages/not-found-large-text",
        component: () =>
          import("../pages/404-pages/VaPageNotFoundLargeText.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      document.querySelector(".app-layout__page")?.scrollTo(0, 0);
    }
  },
  routes,
});
router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (!accessToken && to.path !== "/auth/login") {
    next("/auth/login");
  } else {
    next();
  }
});
export default router;
