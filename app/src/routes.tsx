import { Routes, Route, Outlet, Navigate } from "react-router";
import LoginPage from "./pages/auth/login";
import Home from "./pages/home";
import RegistrationPage from "./pages/auth/register";
import DashboardPage from "./pages/dashboard";
import TemplatesPage from "./pages/templates";
import { useSession } from "./hooks/use-session";
import { DefaultTemplatePreview } from "./components/main/templates/shared/template-preview";
import TemplateEditorPage from "./pages/editor";

interface AuthenticatedRouteProps {
  isAuthenticated: boolean;
  [key: string]: any;
}

const AuthenticatedRoute = ({ isAuthenticated }: AuthenticatedRouteProps) => {
  return isAuthenticated ? <Outlet /> : <Navigate replace to="/auth/login" />;
};

const UnauthenticatedRoute = ({ isAuthenticated }: AuthenticatedRouteProps) => {
  return isAuthenticated ? <Navigate replace to="/" /> : <Outlet />;
};

export const AppRouter = () => {
  const isLoggedIn = useSession().session.isLoggedIn;
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.url} element={<route.component />} />
      ))}
      {/* Auth Routes */}
      <Route element={<UnauthenticatedRoute isAuthenticated={isLoggedIn} />}>
        {authRoutes.map((route, index) => (
          <Route key={index} path={route.url} element={<route.component />} />
        ))}
      </Route>
      {/* Private Routes */}
      <Route element={<AuthenticatedRoute isAuthenticated={isLoggedIn} />}>
        {privateRoutes.map((route, index) => (
          <Route key={index} path={route.url} element={<route.component />} />
        ))}
      </Route>
    </Routes>
  );
};

const publicRoutes = [{ url: "/", component: Home }];
const privateRoutes = [
  { url: "/dashboard", component: DashboardPage },
  { url: "/templates", component: TemplatesPage },
  { url: "/template/editor", component: TemplateEditorPage },
  { url: "/template/preview", component: DefaultTemplatePreview },
  { url: "/template/preview?templateId", component: DefaultTemplatePreview },
  { url: "/templates/newsletter", component: TemplatesPage },
  { url: "/templates/verification-emails", component: TemplatesPage },
  { url: "/templates/invites", component: TemplatesPage },
  { url: "/templates/webinars", component: TemplatesPage },
];
const authRoutes = [
  { url: "/auth/login", component: LoginPage },
  { url: "/auth/register", component: RegistrationPage },
];
