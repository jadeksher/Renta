import React from "react";
import Logo from "../assets/car-removebg-preview.png";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav id="nav">
      <div className="left">
        <div className="logo">
          <img src={Logo} alt="car" />
          <h2>Renta</h2>
        </div>
      </div>
      <div className="right">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "navActive" : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "navActive" : null)}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "navActive" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "navActive" : null)}
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
