import React from "react";

const Card = ({ message, icon, children }) => (
  <div className="card">
    <div>
      {children}
    </div>
    <p style={{marginTop:"1em"}}>{message}</p>
  </div>
);

export default Card;
