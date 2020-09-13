import React from "react";

const Contact = () => {
  return (
    <>
      <h1 style={{ width: "fit-content", color:"#000", margin:"auto", padding:"1em" }}>Get in Touch</h1>
      <form style={{ width: "50%", margin: "auto" }}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <label htmlFor="message">
          Message
          <textarea name="message" id="message" cols ="50" rows="10" />
        </label>
        <button>Send</button>
      </form>
    </>
  );
};

export default Contact;
