import './SideBar.css';
import { NavLink } from "react-router-dom";

const SideBar = () => {

  return (
    <div className="sidebar-wrapper" >
      <div className='sidebar-container'>
        <h4>energy <span style={{color: '#A9A9A9'}}>HQ</span></h4>
        <ul>
          <NavLink className="sidebar-navlink" to='/admin/issues'><li>Issues</li></NavLink>
          <NavLink className="sidebar-navlink" to='/admin/sectors'><li>Sectors</li></NavLink>
          <NavLink className="sidebar-navlink" to='/admin/banners'><li>Banners</li></NavLink>
          <NavLink className="sidebar-navlink" to='/admin/other' target='_blank'><li>Other</li></NavLink>
        </ul>
      </div>
      <h6>Log out</h6>
    </div>
  );
};

export default SideBar;
