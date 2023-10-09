import React from "react";

const Skills = () => {
  return (
    <section className="skills container flex" id="skills">
      <h1>My Skills</h1>

      <div>
        <div className="icon flex">
          <i
            style={{ color: "rgb(231, 106, 34)" }}
            className="fa-brands fa-html5"
          ></i>
          <span> HTML </span>
        </div>

        <div className="icon flex">
          <i style={{ color: "blue" }} className="fa-brands fa-css3-alt"></i>
          <span> CSS </span>
        </div>

        <div className="icon flex">
          <i
            style={{ color: "rgb(229, 235, 58)" }}
            className="fa-brands fa-square-js"
          ></i>
          <span> JavaScript</span>
        </div>

        <div className="icon flex">
          <i style={{ color: "black" }} className="fa-brands fa-github"></i>
          <span> Github </span>
        </div>

        <div className="icon flex">
          <i
            style={{ color: "rgb(11, 229, 116)" }}
            className="fa-brands fa-figma"
          ></i>
          <span> Figma </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
