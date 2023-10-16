import React from "react";

const Info = () => {
  return (
    <section className="flex banner container">
      <div className="info-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-award"></i>
        </div>
        <div>
          <span>IT</span>
          <p>Graduate</p>
        </div>
      </div>

      <div className="info-divider"></div>

      <div className="info-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-award"></i>
        </div>
        <div>
          <span>Projects</span>
          <p>5</p>
        </div>
      </div>

      <div className="info-divider"></div>

      <div className="info-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-award"></i>
        </div>
        <div>
          <span>1 Year</span>
          <p>Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
