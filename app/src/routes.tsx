import { Routes, Route } from "react-router";
import LoginPage from "./pages/auth/login";
import Home from "./pages/home";
import RegistrationPage from "./pages/auth/register";
import DashboardPage from "./pages/dasboard";
import TemplatesPage from "./pages/templates";
import MainLayout from "./layouts/main-layout";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.url} element={<route.component />} />
      ))}
      {/* Auth Routes */}
      {authRoutes.map((route, index) => (
        <Route key={index} path={route.url} element={<route.component />} />
      ))}
      {/* Private Routes */}
      {privateRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.url}
          element={
            <MainLayout>
              <route.component />
            </MainLayout>
          }
        />
      ))}
    </Routes>
  );
};

const publicRoutes = [{ url: "/", component: Home }];
const privateRoutes = [
  { url: "/dashboard", component: DashboardPage },
  { url: "/templates", component: TemplatesPage },
];
const authRoutes = [
  { url: "/auth/login", component: LoginPage },
  { url: "/auth/register", component: RegistrationPage },
];
