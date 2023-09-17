import React from "react";
import Card from "./Card";
import ReactIcon from "./svgs/ReactIcon";
import DesignIcon from "./svgs/DesingIcon";
import NetworkIcon from "./svgs/NetworkIcon";
import ToolsIcon from "./svgs/ToolsIcon";

const CardContainer = () => {
  const frameWork = "React.js, React-Router, Redux, Redux-toolkit";
  const design = "HTML, CSS, Material UI, Tailwind, Bootstrap";
  const network = "RTK/query, Axios, Fetch API";
  const css = "Git, Postman, React-Proto, VS Code";

  return (
    <div className="bg-purple card-container" id ="skills">
      <Card message={frameWork}>
        <ReactIcon />
      </Card>
      <Card message={design}>
        <DesignIcon />
      </Card>
      <Card message={network}>
        <NetworkIcon />
      </Card>
      <Card message={css}>
        <ToolsIcon />
      </Card>
    </div>
  );
};

CardContainer.propTypes = {};

export default CardContainer;
