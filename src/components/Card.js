import React from "react";

const Card = ({ message }) => (
  <div style={{width:"30%", height:"200px", padding:"5%"}}>
    <p>{message}</p>
  </div>
);
Card.propTypes = {};

export default Card;
