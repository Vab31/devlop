import React from "react";
import "./body.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="left-content">
        <h1>
          <em>
            We Create <br />
            What you <em className="sty">Think</em>
          </em>
          <br />
        </h1>
        <div>
          <p className="learnmore">
            Learn something new about the <br /> world from your favorite travel{" "}
            <br />
            creators.
            <br />
            <br />
            <button className="learn-more-btn">Know More &#9662;</button>
          </p>
        </div>

        <div className="quote" data-aos="fade-up">
          <p className="quotep">Lorem ipsum dolor sit amet consectetur,</p>
          <p className="quotep">Lorem ipsum dolor sit amet.</p>
          <hr />
          <p className="quotep">Lorem ipsum dolor sit amet.</p>
          <p className="quotep">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="review-section">
        <div className="reviewBody">
          <h2>Our History</h2>
          <div className="about__cards">
            <article className="about__card " id="one" data-aos="fade-up">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Months</small>
            </article>
            <article className="about__card" id="two" data-aos="fade-down">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>7+</small>
            </article>

            <article className="about__card " id="three" data-aos="fade-up">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>

              <small>10+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
