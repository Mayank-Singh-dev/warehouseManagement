import React, { useState } from "react";
import "./Navbar.css";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const handleNav = () => {
    setNavVisible(!navVisible);
  };


  return (
    <nav className="Nav">
      <div className="Head">
        <Link className="linkss" to='/'>
        <FaWarehouse style={{ marginRight: "12px" }} />
        Warehouse
        </Link>
      </div>
      <ul className="Navbars">
          <li className="NavName"><Link className="linkss" to="/">Home</Link></li>
          <li className="NavName"><Link className="linkss" to='/details'>Details</Link></li>
        </ul>
      {navVisible && (
        <ul className="NavbarsMobile">
          <li className="NavName"><Link className="linkss" to="/">Home</Link></li>
          <li className="NavName"><Link className="linkss" to='/details'>Details</Link></li>
        </ul>
      )}
      <div className="menuIcon" onClick={handleNav}>
        <AiOutlineMenu />
      </div>
    </nav>
  );
};

export default Navbar;
