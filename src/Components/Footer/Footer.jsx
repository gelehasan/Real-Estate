import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png"
const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footerLogoSection">
          <img src={logo}/>

        </div>
        <div className="footerSection">
          <h3>About Gadooy</h3>
          <p>
            Gadooy is your number one source for all types of properties. We're
            dedicated to giving you the very best of properties, with a focus on
            reliability, customer service, and uniqueness.
          </p>
        </div>
        <div className="footerSection">
          <h3>Contact</h3>
          <p>Email: alabhas98@gmail.com.com</p>
          <p>Phone: 076xxxxx</p>
          <p>Address: Eskilstuna, Sweden</p>
        </div>
        <div className="footerSection">
          <h3>Follow Us</h3>
          <p>
            <a href="https://www.facebook.com/ali.abdi.91" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
     
          <p>
            <a href="https://www.instagram.com/alabhas98/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
