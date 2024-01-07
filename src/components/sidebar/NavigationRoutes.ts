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
          displayName: "add categories",
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
          displayName: "add items",
        },
        {
          name: "items-show",
          displayName: "Items",
        },
      ],
    },
  ] as INavigationRoute[],
};
