import DashboardBanners from "../Banners/DashboardBanners";
import SideBar from "../SideBar/SideBar";
import "./DashboardHome.css";
import { Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="dashboardhome-wrapper" >
      <SideBar />
      <DashboardBanners />
      <Outlet />
    </div>
  );
}

export default DashboardHome;