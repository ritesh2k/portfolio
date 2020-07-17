import React from "react";
// import Img from "../../public/images/pro.jpg"
const propTypes = {};

const defaultProps = {};

const Contact = () => {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding:"10px"
      }}
    >
      <h1>Get in touch</h1>
      <form>
        <div style={{ display: "grid", gap: "10px", padding: "10px" }}>
          <div>
            <label htmlFor="name">
              Name <br />
              <input type="text" name="name" id="name" />
            </label>
            <label htmlFor="email">
              Email
              {/* <br /> */}
              <input type="email" name="email" id="email" />
            </label>
          </div>
          <label htmlFor="message">
            Message
            <br />
            <textarea name="message" id="message" cols="55" rows="10" />
          </label>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;
// #endregion

export default Contact;
