import React from "react";

const Contact = () => {
  return (
    <section className="contact container" id="contact">
      <h2 className="title">Get In Touch</h2>
      <div className="social flex">
        <div className="contacts flex">
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="contacts flex">
          <a href="">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
        <div className="contacts flex">
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="contacts flex">
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="contacts flex">
          <a href="">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      <h2 className="title or">OR</h2>
      <a href="mailto:sprashanna007@gmail.com">
        <div className="mail flex">
          <p>Sprashanna007@gmail.com</p>
          <button>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </a>
    </section>
  );
};

export default Contact;
