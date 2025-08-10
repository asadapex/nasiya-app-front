import { useCookies } from "react-cookie";
import { AuthRoutes, DashboardRoutes } from "./routes";
import DashboardLayout from "./provider/DashboardLayout";

function App() {
  const [cookies] = useCookies(["token"]);
  return <>{cookies.token ? <DashboardLayout><DashboardRoutes /></DashboardLayout> : <AuthRoutes />}</>;
}

export default App;
