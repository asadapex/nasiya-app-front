import { lazy } from "react";
import LoginHome from "./auth/Home";
import Home from "./dashboard/Home";
import Customer from "./dashboard/Customer";
import Reports from "./dashboard/Reports";
import Settings from "./dashboard/Settings";
import Calendar from "./dashboard/Calendar";

const Login = lazy(() => new Promise((resolve: any) => {
  return setTimeout(() => resolve(import("./auth/Login")), 1500)
}))

export { LoginHome, Login, Home, Customer, Reports, Settings, Calendar };
