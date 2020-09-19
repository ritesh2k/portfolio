import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const payload = {
    from_name: email,
    message: message,
  };

  // Email JS
  const sendMessage = () =>
    window.emailjs.send("gmail", "template_vbcsgpz", payload);

  return (
    <div className="contact-div">
      <h1>Get in Touch</h1>

      <form onSubmit={(event) => event.preventDefault()}>
        <div className="wrapper">
          <div>
            <label htmlFor="name">Name</label>
            <input
              className=""
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              className=""
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
