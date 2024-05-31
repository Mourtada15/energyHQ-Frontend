import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Sectors from './Pages/Sectors/Sectors';
import ContactUs from './Pages/ContactUs/ContactUs';
import Issues from './Pages/Issues/Issues';
import DashboardIssues from './Dashboard/Issues/DashboardIssues';
import DashboardBanners from './Dashboard/Banners/DashboardBanners';
import Login from './Dashboard/Login/Login';
import Articles from './Components/Articles/Articles';
import CreateIssue from '../src/Dashboard/Issues/CreateIssue/CreateIssue'
import SideBar from './Dashboard/SideBar/SideBar';
import AddSector from './Dashboard/Sectors/AddSector/AddSector';
import MediaKit from './Dashboard/MediaKit/MediaKit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/admin/*" element={<DashboardLayout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

const DashboardLayout = () => {
  return (
    <div className="dashboardhome-wrapper" >
      <SideBar />
      <Routes>
        <Route index element={<DashboardIssues />} />
        <Route path="issues" element={<DashboardIssues />} />
        <Route path="/issues/createissue" element={<CreateIssue />} />
        {/* <Route path="sectors" element={<DashboardSectors />} /> */}
        <Route path="/sectors/addsector" element={<AddSector />} />
        <Route path="banners" element={<DashboardBanners />} />
        <Route path="mediakit" element={<MediaKit />} />
      </Routes>
    </div>
  );
}

export default App;
