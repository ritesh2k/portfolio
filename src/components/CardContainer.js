import React from "react";
import Card from "./Card.js";
import Chevron from "./Chevron";
const CardContainer = (props) => (
  <div
    className="bg-purple"
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <Chevron />
    <Card
      message={
        "Integration of eCommerce platforms, payment gateways, custom product templates, and more"
      }
    />
    <Card
      message={
        "Integration of eCommerce platforms, payment gateways, custom product templates, and more"
      }
    />
    <Card
      message={
        "Integration of eCommerce platforms, payment gateways, custom product templates, and more"
      }
    />
    <Chevron transform={"transform"} />
  </div>
);

CardContainer.propTypes = {};

export default CardContainer;
