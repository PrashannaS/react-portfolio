import React from "react";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="top-footer container flex">
        <div className="footer-left">
          <ul>
            <li style={{ fontSize: "2rem", paddingBottom: "1rem" }}>LINKS</li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>Projets</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="footer-right">
          <ul>
            <li style={{ fontSize: "2rem", paddingBottom: "1rem" }}>
              Social Links
            </li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom flex container">
        <p>Copyright © Sprashanna 2023 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
