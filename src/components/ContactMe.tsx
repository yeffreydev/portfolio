import React from "react";
import "./../assets/ContactMe.css";
const ContactMe = () => {
  return (
    <div id="contact_me" className="main-content">
      <div className="contact_me-info-container">
        <div className="contact_me-info">
          <div className="contact_me-info-head">
            <h3>Contact Me</h3>
          </div>
          <div className="contact_me-info-body">
            <p>
              Lorem ipsum dolor sit amet
              <br />
              adipisicing elit. Atque illo nisi architecto
              <br />
              aut asperiores laborum culpa placeat nam quam. Hic mollitia
              voluptatem consequuntur labore? Ipsam eveniet sit natus qui
              labore.
            </p>
          </div>
          <div className="contact_me-info-footer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="contact_me-form-container">
        <form className="contact_me-form" action="">
          <h3 className="contact_me-form-title">Send Me A Message</h3>
          <input
            className="contact_me-form-inputname"
            placeholder="Your Name"
            type="text"
          />
          <textarea
            className="contact_me-form-inputmessage"
            placeholder="Message"
          />
          <input
            className="contact_me-form-inputsubmit"
            type="submit"
            value="send"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
