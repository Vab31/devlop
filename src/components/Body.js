import React from "react";
import "./body.css";

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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em className="sty">Want</em>
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

        <div className="quote">
          <p className="quotep">HOW PEOPLE LIVES IN POLES</p>
          <p className="quotep">A DAY AT THE SAHARA DESERT</p>
          <hr />
          <p className="quotep">HOBIT, A REAL PLACE</p>
          <p className="quotep">MATADORS & RED CLOTH</p>
        </div>
      </div>

      <div className="review-section">
        <div className="reviewBody">
          <h3>Our Rating</h3>
          <div className="ratings">
            <span className="start-icon">⭐</span>
            <span className="overall-rating">
              <strong>4.6</strong> <br /> overall rating
            </span>
            <br />
          </div>
          <div className="students">
            <span className="student-icon">🎓</span>
            <span className="student-count">
              <strong> 3M+</strong> <br />
              Students
            </span>
          </div>
          <div className="instructors">
            <span className="instructor-icon">👨‍🏫</span>
            <span className="instructor-count">
              <strong>526</strong> <br /> Instructors
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
