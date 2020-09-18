import React from "react";

const Contact = () => {
  return (
    <div className="contact-div">
      <h1>Get in Touch</h1>

      <form>
        <div className = "wrapper">
          <div>
            <label htmlFor="name">Name</label>
            <input className="" type="text" name="name" id="name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input className="" type="email" name="email" id="email" />
          </div>
        </div>

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
