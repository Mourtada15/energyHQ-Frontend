// import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Sectors from './Pages/Sectors/Sectors';
import ContactUs from './Pages/ContactUs/ContactUs';
import Issues from './Pages/Issues/Issues';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/issues" element={<Issues />} />
      </Routes>
    </Router>
  );
}

export default App;
