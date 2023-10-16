import React from "react";
import proffilePic from "../assets/mypic.png";

const Hero = () => {
  return (
    // <section id="home" classNameName="container hero-section">
    //   <div className="grid hero">
    //     <div className="left">
    //       <p>
    //         Hi I'm <strong>Prashanna R. Shrestha</strong>
    //       </p>
    //       <h3>Software Engineer</h3>
    //       <p>I love coding and sleeping</p>
    //       <div>
    //         <button className="download-btn">
    //           <a href="../assets/resume.pdf">download</a>
    //         </button>
    //       </div>
    //     </div>

    //     <div className="right">
    //       <img src={proffilePic} alt="profile-pic"></img>
    //     </div>
    //   </div>
    // </section>

    <section className="container hero-section" id="home">
      <div className="grid hero">
        <div className="left flex">
          <div>
            Hi I'm <span className="name"> Prashanna Shrestha </span>
            <div className="tag">FRONTEND DEVELOPER</div>
            <p>I love coding and sleeping.</p>
            <div>
              <a href="./resume.pdf" download="">
                <button>
                  Download CV <i className="fa-solid fa-circle-down"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="right flex">
          <img src={proffilePic} alt="my pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
