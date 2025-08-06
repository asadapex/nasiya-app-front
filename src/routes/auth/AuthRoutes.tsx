import { Route, Routes } from "react-router-dom";
import { Login, LoginHome } from "../../pages";
import { PATH } from "../../hooks/Path";
import { Suspense } from "react";
import PageLoading from "../../components/PageLoading";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.main} element={<LoginHome />} />
      <Route
        path={PATH.login}
        element={
          <Suspense fallback={<PageLoading />}>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AuthRoutes;
