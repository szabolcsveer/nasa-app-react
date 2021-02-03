import React from "react";
import "./Header.scss";
import logo from "../../assets/nasa-worm-logo.jpg";

function Header() {
  return (
    <nav className="navbar">
      <div className="left-side">
        <button className="button"> Astronomy picture of the day</button>
        <button className="button"> Media Lib</button>
      </div>
      <img className="logo" src={logo} alt="logo" />
    </nav>
  );
}

export default Header;
