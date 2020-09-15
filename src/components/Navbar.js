import React, { useState } from "react";
import "../styles/navbar.scss";

const Navbar = (props) => {
  // textInput must be declared here so the ref can refer to it
  const [slide, setDisplay] = useState("");

  function handleClick() {
    setDisplay(slide ? "" : "slide");
  }
  return (
    <nav className="nav">
      <h3>Ritesh Kumar</h3>
      <ul className={`nav-links ${slide}`}>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className={`burger`} id="burger" onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
