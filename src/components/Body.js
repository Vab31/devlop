import React, { useEffect, useState } from "react";
import "./body.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";
import "../font/style.css";

AOS.init({
  duration: 1000,
});

const BodyComponent = () => {
  const [toggleText, setToggleText] = useState("Think!");
  const [toggleText1, setToggleText1] = useState("Create");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToggleText((prevText) => (prevText === "Think!" ? "Want!" : "Think!"));
      setToggleText1((prevText) => (prevText === "Create" ? "Design" : "Create"));
    }, 1500); // Toggle every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="body-container">
      <div className="left-content">
        <h1 className="mainhead" style={{ fontFamily: 'Instagram Sans Bold' }}>
          We <span className="sty">{toggleText1}</span> <br />
          What you <span className="sty">{toggleText}</span>
        </h1>

        <div>
          <p className="learnmore" style={{ fontFamily: 'Instagram Sans Medium' }}>
          Grow together with 1M community <br /> with Exceptional Web Development Solutions – 
          <br/>
          Your Success,
       
Our Expertise!
            <br />
            <br />
            <button className="learn-more-btn">Know More &#9662;</button>
          </p>
        </div>

        {/* <div className="quote" data-aos="fade-up">
          <p className="quotep">Lorem ipsum dolor sit amet consectetur,</p>
          <p className="quotep">Lorem ipsum dolor sit amet.</p>
          <hr />
          <p className="quotep">Lorem ipsum dolor sit amet.</p>
          <p className="quotep">Lorem ipsum dolor sit amet.</p>
        </div> */}
      </div>

      <div className="review-section">
        <div className="reviewBody" style={{ fontFamily: 'Instagram Sans Regular' }}>
          <h2>Our History</h2>
          <div className="about__cards">
            <article className="about__card " id="one" data-aos="fade-up">
              <FaAward className="about__icon" />
              <h5>Community</h5>
              <small>100K Members</small>
            </article>
            <article className="about__card" id="two" data-aos="fade-down">
              <FiUsers className="about__icon" />
              <h5>Trained Students</h5>
              <small>70+</small>
            </article>

            <article className="about__card " id="three" data-aos="fade-up">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>

              <small>100+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
