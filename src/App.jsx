import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const DashboardPage = lazy(() =>
  import("./pages/Main/DashboardPage/Dashboard")
);
const ProductManagementPage = lazy(() =>
  import("./pages/Main/ProductManagementPage/ProductManagement")
);
const UserManagementPage = lazy(() =>
  import("./pages/Main/UserManagementPage/UserManagement")
);
const SalesAnalyticsPage = lazy(() =>
  import("./pages/Main/SalesAnalyticsPage/SalesAnalytics")
);
const AppIntegrationPage = lazy(() =>
  import("./pages/Main/AppIntegrationPage/AppIntegration")
);
const SettingPage = lazy(() => import("./pages/Main/SettingPage/Setting"));

const NotFoundPage = lazy(() => import("./layouts/_default/NotFoundPage"));

function App() {
  console.log("App is running in", import.meta.env.VITE_NODE_ENV);

  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route
            path="product-management"
            element={<ProductManagementPage />}
          />
          <Route path="user-management" element={<UserManagementPage />} />
          <Route path="sales-analytics" element={<SalesAnalyticsPage />} />
          <Route path="app-integrations" element={<AppIntegrationPage />} />
          <Route path="setting" element={<SettingPage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
