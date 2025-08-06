import { useCookies } from "react-cookie";
import { AuthRoutes, DashboardRoutes } from "./routes";

function App() {
  const [cookies] = useCookies(["token"]);
  return <>{cookies.token ? <DashboardRoutes /> : <AuthRoutes />}</>;
}

export default App;
