import React from "react";
import aboutMePic from "../assets/mypic.png";

const Aboutme = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">
        <span>About Me</span>
      </h2>
      <div className="container flex about-content">
        <div className="myImg">
          <img
            className="flipped-image"
            src={aboutMePic}
            alt="my casual photo"
          />
        </div>
        <div className="my-bio container">
          <h2>Prashanna R. Shrestha</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            quaerat ea quam debitis. Nostrum consectetur corrupti a quaerat, nam
            sapiente consequatur suscipit sed eius eaque. Dolores officiis
            dignissimos vitae commodi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            repellat incidunt voluptas voluptatibus doloremque! Quis eveniet
            blanditiis rerum quia excepturi.
          </p>

          <p>Sydney, Austalia</p>

          <div>
            <div className="tag">Intrest</div>
            <div className="hobby flex container ">
              <span>Coding </span>
              <span>Football</span>
              <span>Reading Books</span>
              <span>Sleeping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
