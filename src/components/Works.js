import React from "react";
import projetcPic1 from "../assets/project.png";
import projetcPic2 from "../assets/project2.png";

const Works = () => {
  // Get the current date
  const currentDate = new Date();

  // Format it as "Month Year"
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <section className="projects container" id="projects">
      <h2>
        <span>My Projects</span>
      </h2>
      <hr />
      <div className="grid project-container">
        {/* Your project cards */}
        <div className="project-card">
          <div className="top">
            <img src={projetcPic1} alt="portfolio" />
          </div>
          <div className="bottom container">
            <h3>Personel Portfolio Web Site</h3>
            <p>{formattedDate}</p> {/* Display the formatted date */}
            <a href="http... to your repo">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="http... to the live site" target="_blank">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projetcPic2} alt="portfolio" />
          </div>
          <div className="bottom container">
            <h3>Personel Portfolio Web Site</h3>
            <p>{formattedDate}</p> {/* Display the formatted date */}
            <a href="http... to your repo">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="http... to the live site" target="_blank">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projetcPic1} alt="portfolio" />
          </div>
          <div className="bottom container">
            <h3>Personel Portfolio Web Site</h3>
            <p>{formattedDate}</p> {/* Display the formatted date */}
            <a href="http... to your repo">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="http... to the live site" target="_blank">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projetcPic1} alt="portfolio" />
          </div>
          <div className="bottom container">
            <h3>Personel Portfolio Web Site</h3>
            <p>{formattedDate}</p> {/* Display the formatted date */}
            <a href="http... to your repo">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="http... to the live site" target="_blank">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
