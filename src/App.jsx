import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

 
const AuthLayout = lazy(() => import('./layouts/AuthLayout'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const HomePage = lazy(() => import('./pages/Main/Homepage/Homepage'));
const Aboutpage = lazy(() => import('./pages/Main/AboutPage/AboutPage'));
const LoginPage = lazy(() => import('./pages/Auth/Login/LoginPage'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('./layouts/_default/NotFoundPage'));


function App() {

  console.log('App is running in',import.meta.env.VITE_NODE_ENV);
    
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpage />} />
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
