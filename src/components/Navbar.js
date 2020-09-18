import React, { useState } from "react";
import "../styles/navbar.scss";

const Navbar = (props) => {
  const [slide, setDisplay] = useState("");

  function handleClick() {
    setDisplay(slide ? "" : "slide");
  }
  return (
    <nav className="nav">
      <h3>Ritesh Kumar</h3>
      <ul className={`nav-links ${slide}`}>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
      </ul>
      <div className={`burger`} id="burger" onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
