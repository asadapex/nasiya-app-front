import { Route, Routes } from "react-router-dom";
import { PATH } from "../../hooks/Path";
import { Home } from "../../pages";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.main} element={<Home />} />
    </Routes>
  );
};

export default DashboardRoutes;
