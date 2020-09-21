import React, { useState } from "react";
import "../styles/navbar.scss";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const [slide, setDisplay] = useState("");

  function handleClick() {
    setDisplay(slide ? "" : "slide");
  }
  return (
    <nav className="nav" id ="nav-bar">
      <Link to="description-container" offset ={-100} smooth={true} duration={700}>
        <h3>Ritesh Kumar</h3>
      </Link>
      <ul className={`nav-links ${slide}`}>
        <Link to="skills" smooth={true} duration={700}>
          <p>Skills</p>
        </Link>
        <p>Projects</p>
        <Link to="contact" smooth={true} duration={700}>
          <p>Contact</p>
        </Link>
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
