import React, { useState } from "react";
import Loading from "./svgs/Loading.gif";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    from_name: email,
    message: message,
  };

  const HandleFormReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  // Email JS
  const sendMessage = () => {
    setLoading(true);
    window.emailjs
      .send("service_c96637z", "template_vbcsgpz", payload)
      .then(() => {
        setLoading(false);
        HandleFormReset();
        setAlertMessage("Email succesfully sent. x");
        document.querySelector(".alert-span").style.display = "block";
      })
      .catch(() => {
        setLoading(false);
        setAlertMessage("Email couldn't be sent. x");
        document.querySelector(".alert-span").style.display = "block";
      });
  };
  return (
    <div className="contact-div" id="contact">
      <h1>Get in touch</h1>
      <div className="alert">
        <span
          className="alert-span"
          onClick={() =>
            (document.querySelector(".alert-span").style.display = "none")
          }
        >
          {alertMessage}
        </span>
      </div>
      {loading ? (
        <img src={Loading} alt="Loading" />
      ) : (
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
      )}
    </div>
  );
};

export default Contact;
