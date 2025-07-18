import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/RegisterPage";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import NotFound from "../pages/NotFoundPage";
import Dashboard from "../features/dashboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Layout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Layout */}
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard />
          }
        />
      </Route>

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
