import './SideBar.css';
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {

  return (
    <div className="sidebar-wrapper" >
      <div className='sidebar-container'>
        <Link to="/admin"><h4>energy <span style={{color: '#A9A9A9'}}>HQ</span></h4></Link>
        <ul>
          <NavLink className="sidebar-navlink" to='/admin/issues'><li>Issues</li></NavLink>
          <NavLink className="sidebar-navlink" to='/admin/sectors/addsector'><li>Sectors</li></NavLink>
          <NavLink className="sidebar-navlink" to='/admin/banners'><li>Banners</li></NavLink>
          <NavLink className="sidebar-navlink" to='/admin/mediakit'><li>Media Kit</li></NavLink>
        </ul>
      </div>
      <h6>Log out</h6>
    </div>
  );
};

export default SideBar;
