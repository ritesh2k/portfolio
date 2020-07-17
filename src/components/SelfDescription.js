import React from "react";
import "../styles/selfdescription.scss";
const SelfDescription = (props) => (
  <div
    className="no-margin bg-purple"
    style={{ display: "flex", padding: "10%" }}
  >
    <div>
      <h1 style={{ margin: "auto" }}>
        Ritesh Kumar
        <br /> <span>React Developer</span>
      </h1>
      <p>
        Focused on opening up the wide areas of knowledge in field of Computer
        Science and Information Technology.
      </p>
    </div>
  </div>
);

SelfDescription.propTypes = {};

export default SelfDescription;
