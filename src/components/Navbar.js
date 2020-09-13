import React from "react";
import "../styles/navbar.scss";

const Navbar = (props) => (
  <nav className="nav">
    <h3>Ritesh Kumar</h3>
    <ul>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
    <div className="burger">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
);

Navbar.propTypes = {};

export default Navbar;
