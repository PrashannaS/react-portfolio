import React from "react";
const Navbar = () => {
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
          <ul class="flex">
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
