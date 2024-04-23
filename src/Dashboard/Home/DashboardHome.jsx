import "./DashboardHome.css";
import { Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <>
      <h1>Hello admin dashboard</h1>
      <Outlet />
    </>
  );
}

export default DashboardHome;