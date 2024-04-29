const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "portfolio",
        component: () => import("pages/Portfolio/Index.vue"),
      },
      {
        path: "marketplace",
        component: () => import("pages/Marketplace/Index.vue"),
      },
      {
        path: "portfolio/add",
        component: () => import("pages/Portfolio/Form/Add.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
