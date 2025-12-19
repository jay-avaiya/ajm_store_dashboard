import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProductManagement from "./pages/Main/ProductManagementPage/ProductManagement";
import UserManagement from "./pages/Main/UserManagementPage/UserManagement";
import Dashboard from "./pages/Main/DashboardPage/Dashboard";

const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));

const LoginPage = lazy(() => import("./pages/Auth/Login/LoginPage"));
const RegisterPage = lazy(() =>
  import("./pages/Auth/RegisterPage/RegisterPage")
);
const NotFoundPage = lazy(() => import("./layouts/_default/NotFoundPage"));

function App() {
  console.log("App is running in", import.meta.env.VITE_NODE_ENV);

  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product-management" element={<ProductManagement />} />
          <Route path="user-management" element={<UserManagement />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
