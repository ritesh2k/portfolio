import React, { useState } from "react";
import Card from "./Card";
import Chevron from "./svgs/Chevron";
const message =
  "Integration of eCommerce platforms, payment gateways";
let cardArr = [message, message];

const CardContainer = (props) => {
  const HandleClick = () => {
    setCurrent(current + 1);
  };
  const [current, setCurrent] = useState(0);
  return (
    <div
      className="bg-purple"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Chevron />
      {cardArr.map((item, index) => (
        <Card message={item} key={index} />
      ))}
      <Chevron transform={"transform"} HandleClick={HandleClick} />
    </div>
  );
};

CardContainer.propTypes = {};

export default CardContainer;
