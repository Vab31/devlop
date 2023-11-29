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
  const colors = ["red", "blue", "orange"];

  // Function to change the button's background color
  function changeBackgroundColor() {
    const button = document.querySelector(".learn-more-btn");
    const currentColor = button.style.backgroundColor;
    const currentIndex = colors.indexOf(currentColor);
    
    // Calculate the next color index
    const nextIndex = (currentIndex + 1) % colors.length;
  
    // Apply the new background color
    button.style.backgroundColor = colors[nextIndex];
  }
  
  // Set an interval to change the background color every 1500 milliseconds
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToggleText((prevText) => (prevText === "Think!" ? "Want!" : "Think!"));
      setToggleText1((prevText) => (prevText === "Create" ? "Design" : "Create"));
    }, 1500); // Toggle every 1 second

const interval=  setInterval(changeBackgroundColor, 1000);


    return () => clearInterval(intervalId,interval);
  }, []);

  return (
    <div className="body-container  bg-slate-300">
      <div className="left-content">
        <h1 className="mainhead" style={{ fontFamily: 'Instagram Sans Bold' }}>
          We <span className="sty">{toggleText1}</span> <br />
          What you <span className="sty">{toggleText}</span>
        </h1>

        <div>
          <p className="learnmore" style={{ fontFamily: 'Instagram Sans Medium' }}>
          Grow together with 1M community <br /> with Exceptional CS Solutions and Training – 
          <br/>
          Your Success,
       
Our Expertise!
<br/>
<p style={{ fontFamily: 'Instagram Sans Bold' ,fontSize:'30px'}} className="text-black">Get Your Courses! </p>
           
           
            <button className="learn-more-btn" style={{width:'100px',fontSize:'20px' }}><a href='#sell'>Get</a></button>
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
          <h2 className="md:text-5xl p-7">Our History</h2>
          <div className="about__cards md:h-72">
            <article className="about__card md:h-64" id="one" data-aos="fade-up">
              <FaAward className="ml-auto mr-auto about__icon" />
              <h5 className="p-5">Community</h5>
              <small>100K+ Members</small>
            </article>
            <article className="about__card md:h-64" id="one" data-aos="fade-up">
              <FaAward className="ml-auto mr-auto about__icon" />
              <h5 className="p-5">Trained Student</h5>
              <small>270+ Members</small>
            </article>

            <article className="about__card md:h-64" id="three" data-aos="fade-up">
              <VscFolderLibrary className="ml-auto mr-auto about__icon" />
              <h5 className="p-5">Projects</h5>

              <small>100+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
