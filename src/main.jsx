import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import SearchOverlayContextProvider from "./context/SearchOverlayContext.jsx";
import ShowFilterSidebarContextProvider from "./context/ShowFilterSidebarContext.jsx";
import ProtectedRoute from "./features/auth/ProtectedRoute.jsx";
import DarkModeContextProvider from "./context/DarkModeContext.jsx";
import FullPageSpinner from "./components/FullPageSpinner.jsx";
const AppLayout = lazy(() => import("./AppLayout.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const ProductPage = lazy(() => import("./pages/ProductPage.jsx"));
const BrandPage = lazy(() => import("./pages/BrandPage.jsx"));
const ProductTypePage = lazy(() => import("./pages/ProductTypePage.jsx"));
const AllProducts = lazy(() => import("./pages/AllProducts.jsx"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage.jsx"));
const CartPage = lazy(() => import("./pages/CartPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const MostRated = lazy(() => import("./pages/MostRated.jsx"));
const ErrorBoundary = lazy(() => import("./pages/ErrorBoundary.jsx"));
const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FullPageSpinner />}>
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/most-rated",
        element: <MostRated />,
      },
      {
        path: "/all",
        element: <AllProducts />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/brand",
        element: <BrandPage />,
        children: [
          {
            path: "/brand/:name",
            element: <BrandPage />,
          },
        ],
      },
      {
        path: "/product_type",
        element: <ProductTypePage />,
        children: [
          {
            path: "/product_type/:name",
            element: <ProductTypePage />,
          },
        ],
      },
      {
        path: "/product",
        element: <ProductPage />,
        children: [
          {
            path: "/product/:id",
            element: <ProductPage />,
          },
        ],
      },
      {
        path: "*",
        element: <div className="">sss</div>,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
]);

let queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <SearchOverlayContextProvider>
        <ShowFilterSidebarContextProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={route}>
              <AppLayout />
            </RouterProvider>
          </QueryClientProvider>
        </ShowFilterSidebarContextProvider>
      </SearchOverlayContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
