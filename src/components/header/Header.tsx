import React from "react";
import "./Header.scss";
import logo from "../../assets/nasa-worm-logo.jpg";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="navbar">
      <div className="left-side">
        <Link to="/apod">
          <button className="button"> Astronomy picture of the day</button>
        </Link>
        <Link to="/media">
        <button className="button"> Media Lib</button>
        </Link>
      </div>
      <img className="logo" src={logo} alt="logo" />
    </nav>
  );
}

export default Header;
