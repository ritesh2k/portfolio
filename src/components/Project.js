import React from "react";
import Chat from "./svgs/Chat";

export const Project = () => {
  return (
    
      <div id ="project" className="project-container">
        <div className="svg-container">
          <Chat />
        </div>
        <div className="desc-container">
          <h3>Chat App</h3>
          <br/>
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
  );
};
