import React from "react";
import Card from "./Card";
import ReactIcon from "./svgs/ReactIcon";
import DesignIcon from "./svgs/DesingIcon";
import NetworkIcon from "./svgs/NetworkIcon";
import ToolsIcon from "./svgs/ToolsIcon";

const CardContainer = () => {
  const frameWork = "React.js, React-Router, Redux,";
  const design = "HTML, CSS, JavaScript, Bootstrap .";
  const network = "HTTP, HTTPS, Cookies, Local Storage.";
  const css = "Git, Postman, React-Proto, VS Code";

  return (
    <div className="bg-purple card-container">
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
