import React from "react";

import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="container flex header">
        <div className="flex">
          <div className="logo">
            <h1>Prashanna</h1>
          </div>
          <div className="line flex">
            <div className="soft-engi flex">
              <div className="soft">Software</div>
              <div className="engineer"> Engineer</div>
            </div>
          </div>
        </div>

        <div className="menu">
          <div className="hamburger">
            {isOpen ? (
              <i class="fa-solid fa-xmark" onClick={() => setIsOpen(false)}></i>
            ) : (
              <i class="fa-solid fa-bars" onClick={() => setIsOpen(true)}></i>
            )}
          </div>
          <ul
            class={isOpen ? "flex slide" : "flex"}
            onClick={() => setIsOpen(false)}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
