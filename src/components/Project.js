import React from "react";
import Chat from "./svgs/Chat";

export const Project = () => {
  return (
    <div
      style={{
        "background-color": "#5b43d6",
        "background-image": "linear-gradient(180deg, #575ff5, #5b43d6)",
      }}
      id="project"
    >
      <h2 style={{ textAlign: "center", padding: "1em" }}>Project</h2>

      <div className="project-container">
        <div className="svg-container">
          <Chat />
        </div>
        <div className="desc-container">
          <h3>Chat App</h3>
          <p>A simple chat application created using React and Firebase.</p>
          <br />
          <a
            href="https://chat-app-cac10.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Visit</button>
          </a>
        </div>
      </div>
    </div>
  );
};
