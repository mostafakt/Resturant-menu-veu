/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AuthLayout from "../layouts/AuthLayout.vue";
import AppLayout from "../layouts/AppLayout.vue";
import Page404Layout from "../layouts/Page404Layout.vue";

import RouteViewComponent from "../layouts/RouterBypass.vue";
import UIRoute from "../pages/admin/ui/route";

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
      // {
      //   name: "dashboard",
      //   path: "dashboard",
      //   component: () => import("../pages/admin/dashboard/Dashboard.vue"),
      // },
      // {
      //   name: "statistics",
      //   path: "statistics",
      //   component: RouteViewComponent,
      //   children: [
      //     {
      //       name: "charts",
      //       path: "charts",
      //       component: () =>
      //         import("../pages/admin/statistics/charts/Charts.vue"),
      //       meta: {
      //         wikiLink:
      //           "https://github.com/epicmaxco/vuestic-admin/wiki/Charts",
      //       },
      //     },
      //     {
      //       name: "progress-bars",
      //       path: "progress-bars",
      //       component: () =>
      //         import(
      //           "../pages/admin/statistics/progress-bars/ProgressBars.vue"
      //         ),
      //       meta: {
      //         wikiLink:
      //           "https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars",
      //       },
      //     },
      //   ],
      // },
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
      // {
      //   name: "maps",
      //   path: "maps",
      //   component: RouteViewComponent,
      //   children: [
      //     {
      //       name: "maplibre-maps",
      //       path: "maplibre-maps",
      //       component: () =>
      //         import("../pages/admin/maps/maplibre-maps/MapLibreMapsPage.vue"),
      //       meta: {
      //         wikiLink: "https://github.com/epicmaxco/vuestic-admin/wiki/Maps",
      //       },
      //     },
      //     {
      //       name: "yandex-maps",
      //       path: "yandex-maps",
      //       component: () =>
      //         import("../pages/admin/maps/yandex-maps/YandexMapsPage.vue"),
      //       meta: {
      //         wikiLink: "https://github.com/epicmaxco/vuestic-admin/wiki/Maps",
      //       },
      //     },
      //     {
      //       name: "leaflet-maps",
      //       path: "leaflet-maps",
      //       component: () =>
      //         import("../pages/admin/maps/leaflet-maps/LeafletMapsPage.vue"),
      //       meta: {
      //         wikiLink: "https://github.com/epicmaxco/vuestic-admin/wiki/Maps",
      //       },
      //     },
      //     {
      //       name: "bubble-maps",
      //       path: "bubble-maps",
      //       component: () =>
      //         import("../pages/admin/maps/bubble-maps/BubbleMapsPage.vue"),
      //       meta: {
      //         wikiLink: "https://github.com/epicmaxco/vuestic-admin/wiki/Maps",
      //       },
      //     },
      //     {
      //       name: "line-maps",
      //       path: "line-maps",
      //       component: () =>
      //         import("../pages/admin/maps/line-maps/LineMapsPage.vue"),
      //       meta: {
      //         wikiLink: "https://github.com/epicmaxco/vuestic-admin/wiki/Maps",
      //       },
      //     },
      //   ],
      // },

      // {
      //   name: "pages",
      //   path: "pages",
      //   component: RouteViewComponent,
      //   children: [
      //     {
      //       name: "404-pages",
      //       path: "404-pages",
      //       component: () => import("../pages/admin/pages/404PagesPage.vue"),
      //     },
      //     {
      //       name: "faq",
      //       path: "faq",
      //       component: () => import("../pages/admin/pages/FaqPage.vue"),
      //     },
      //   ],
      // },
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

export default router;
