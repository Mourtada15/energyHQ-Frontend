// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Sectors from './Pages/Sectors/Sectors';
import ContactUs from './Pages/ContactUs/ContactUs';
import Issues from './Pages/Issues/Issues';
import DashboardHome from './Dashboard/Home/DashboardHome';
import DashboardIssues from './Dashboard/Issues/DashboardIssues';
import DashboardBanners from './Dashboard/Banners/DashboardBanners';
import Login from './Dashboard/Login/Login';
import Articles from './Components/Articles/Articles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/admin" element={<DashboardHome />} >
          <Route path="issues" element={<DashboardIssues />} />
          {/* <Route path="sectors" element={<DashboardIssues />} /> */}
          <Route path="banners" element={<DashboardBanners />} />
        </Route>
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
