import React from "react";
import "../styles/navbar.scss";

const Navbar = (props) => (
  <header>
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <div style={{ flexGrow: "1" }}>
        <ul>
          <li>Ritesh Kumar</li>
        </ul>
      </div>
      <div style={{ flexGrow: "4" }}>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li style={{ display: "inline-block" }}>Skills</li>
          <li style={{ display: "inline-block" }}>Projects</li>
          <li style={{ display: "inline-block" }}>Contact</li>
        </ul>
      </div>
    </nav>
  </header>
);

Navbar.propTypes = {};

export default Navbar;
