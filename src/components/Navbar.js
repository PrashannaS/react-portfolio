import React from "react";
import { Link } from "react-router-dom";

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
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"about-me"}>About</Link>
            </li>
            <li>
              <Link to={"projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
