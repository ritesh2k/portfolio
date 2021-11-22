import React from "react";
import "../styles/app.scss";
import Navbar from "./Navbar.js";
import SelfDescription from "./SelfDescription.js";
import VectorDesign from "./VectorDesign.js";
import CardContainer from "./CardContainer";
import Contact from "./Contact";
import Footer from "./Footer";
import { Project } from "./Project";
import { Asteroid } from "./Asteroid";

const App = (props) => (
  <div>
    <Navbar />
    <SelfDescription />
    <VectorDesign />
    <CardContainer />
    <Project />
    <Asteroid/>
    <Contact />
    <Footer />
  </div>
);

App.propTypes = {};

export default App;
