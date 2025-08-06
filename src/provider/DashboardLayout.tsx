import type { FC } from "react";

const DashboardLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default DashboardLayout;
