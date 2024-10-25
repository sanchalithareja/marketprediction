import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>IntelliTrade</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/chart-analyser">Chart Analyser</Link>
        </li>
      </ul>
      <div className="button">
        <button className="navbar-button">Sign In</button>
        <button className="navbar-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
