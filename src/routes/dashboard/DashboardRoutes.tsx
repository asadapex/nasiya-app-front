import { Route, Routes } from "react-router-dom";
import { PATH } from "../../hooks/Path";
import { Customer, Home, Reports, Settings, Calendar } from "../../pages";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.main} element={<Home />} />
      <Route path={PATH.customer} element={<Customer />} />
      <Route path={PATH.reports} element={<Reports />} />
      <Route path={PATH.settings} element={<Settings />} />
      <Route path={PATH.calendar} element={<Calendar />} />
    </Routes>
  );
};

export default DashboardRoutes;
