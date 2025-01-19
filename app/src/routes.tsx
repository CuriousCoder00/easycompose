import { Routes, Route } from "react-router";
import LoginPage from "./pages/auth/login";
import Home from "./pages/home";
import RegistrationPage from "./pages/auth/register";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegistrationPage />} />
    </Routes>
  );
};
