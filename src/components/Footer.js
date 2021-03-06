import React from "react";
import LinkedIn from "./svgs/LinkedIn";
import StackOverFlow from "./svgs/StackOverFlow";
import Email from "./svgs/Email";

const Footer = () => {
  return (
    <div className="footer">
      <Email />
      <StackOverFlow />
      <LinkedIn />
    </div>
  );
};

export default Footer;
