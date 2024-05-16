import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search operation with searchQuery
    console.log("Search query:", searchQuery);
    // setSearchQuery('')
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body" data-aos="fade-down">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand" to="/"><img src="energyHQ Logo.png" alt="logo" width="140rem" height="70rem" /></Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link nav-link-home" aria-current="page" to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-home" aria-current="page" to="/sectors">SECTORS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-home" aria-current="page" to="/issues">ISSUES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-home" aria-current="page" to="https://www.energyhq.world/energyHQ_Media%20Kit_2024.pdf" target="_blank">MEDIA KIT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-home" aria-current="page" to="/rates">RATES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-home" aria-current="page" to="/packages">PACKAGES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-home" aria-current="page" to="/contactus">CONTACT US</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search" placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-navbar-search" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;