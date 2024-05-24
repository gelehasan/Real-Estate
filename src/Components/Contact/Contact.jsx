import React from "react";
import "./ContactMe.css";
import Footer from "../Footer/Footer";
const ContactMe = () => {
  return (
   <>   <div className="contactMeContainer">
      <div className="contactMeContent">
        <h1>Contact Me</h1>
        <p>If you have any questions or comments, please don't hesitate to contact us.</p>
        <form className="contactForm" action="https://formspree.io/f/xleqkpbq" method="POST">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message" rows="5"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>

    
    </div>
    <Footer /> </>
  );
};

export default ContactMe;
