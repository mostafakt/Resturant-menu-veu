export interface INavigationRoute {
  name: string;
  displayName: string;
  meta: { icon: string };
  children?: INavigationRoute[];
}

export default {
  root: {
    name: "/",
    displayName: "navigationRoutes.home",
  },
  routes: [
    {
      name: "categories",
      displayName: "categories",
      meta: {
        icon: "vuestic-iconset-forms",
      },

      children: [
        {
          name: "categories-form",
          displayName: "Add categories",
        },
        {
          name: "categories-show",
          displayName: "categories",
        },
      ],
    },
    {
      name: "items",
      displayName: "Items",
      meta: {
        icon: "vuestic-iconset-forms",
      },
      disabled: true,
      children: [
        {
          name: "items-form",
          displayName: "Add items",
        },
        {
          name: "items-show",
          displayName: "Items",
        },
      ],
    },
    {
      name: "menus",
      displayName: "menus",
      meta: {
        icon: "vuestic-iconset-forms",
      },
      disabled: true,
      children: [
        {
          name: "menus-form",
          displayName: "Add menus",
        },
        {
          name: "menus-show",
          displayName: "Menus",
        },
      ],
    },
  ] as INavigationRoute[],
};
