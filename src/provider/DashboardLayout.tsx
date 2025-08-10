import type { FC } from "react";
import Menu from "../modules/Menu";

const DashboardLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <Menu />
    </>
  )
};

export default DashboardLayout;
