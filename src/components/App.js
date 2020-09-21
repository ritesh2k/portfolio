import React from "react";
import "../styles/app.scss";
import Navbar from "./Navbar.js";
import SelfDescription from "./SelfDescription.js";
import VectorDesign from "./VectorDesign.js";
import CardContainer from "./CardContainer";
import Contact from "./Contact";
import Footer from "./Footer";

const App = (props) => (
  <div>
    <Navbar />
    <SelfDescription />
    <VectorDesign />
    <CardContainer />
    <Contact />
    <Footer />
  </div>
);

App.propTypes = {};

export default App;
