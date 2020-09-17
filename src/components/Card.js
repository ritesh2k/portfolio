import React from "react";

const Card = ({ message, icon, children }) => (
  <div className="card">
    <div>
      {children}
    </div>
    <p>{message}</p>
  </div>
);

export default Card;
