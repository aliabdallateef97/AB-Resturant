import { lazy } from "react";

export const publicRoutes = [
  {
    path: "/auth",
    element: lazy(() => import("@/core/pages/Auth/index.tsx")),
  },
];

export const privateRoutes = [
  {
    path: "/orders",
    element: lazy(() => import("@/core/pages/Orders/index.tsx")),
  },
]

export const sharedRoutes = [
    {
      path: "/home",
      element: lazy(() => import("@/core/pages/Home/index.tsx")),
    },
    {
        path: "/meal-items",
        element: lazy(() => import("@/core/pages/MealsPage/index.tsx")),
      },
      {
        path: "/meal-details/:id",
        element: lazy(() => import("@/core/pages/MealDetails/index.tsx")),
      },
]