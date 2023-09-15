import React from "react";
import "./founder.css";
import vaibhav from "../img/Vaibhav.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiInstagram } from "react-icons/fi";


function FounderPage() {
  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "10vh",
    padding: "20px",
  };

  const hrStyle = {
    width: "80%",
    margin: "20px 0px",
  };
  return (
    <div style={serviceContainerStyle} className="contact" id="talktous">
      <div data-aos="fade-up">
        <h1 style={{ fontFamily: 'Instagram Sans Bold' }}>Talk To Us</h1>
      </div>
      <div style={hrStyle}>
        <hr />
      </div>

      <div className="profile-card">
        <div className="upc">
          <div className="gradiant"></div>
          <div className="profile-down">
            <img src='https://media.licdn.com/dms/image/D5603AQGe_gJYj0oWbw/profile-displayphoto-shrink_200_200/0/1690650995853?e=1699488000&v=beta&t=L2oYlzEAXJKxEz5p-xcptRGMIFWcAgYnf7Dm3saTfeM' alt="" />
            <div className="profile-title" style={{ fontFamily: 'Instagram Sans Bold' }}>RC RAO</div>
            <div className="profile-description" style={{ fontFamily: 'Instagram Sans Regular' }}>
            RC, CEO and founder of RCCODEX.
            IF you have any doubt and want to talk click on the following button 👇
            </div>
            <div className="profile-button">
              <a href="https://calendly.com/rccodex/30min" style={{ fontFamily: 'Instagram Sans Regular' }}>Contact me</a>
            </div>
            <a href="https://www.instagram.com/rccodex/" style={{fontSize:'24px',marginLeft:'24px'}}>
          <FiInstagram />
        </a>
          </div>

        </div>
        {/* second card */}
        <div className="upc">
          <div className="gradiant"></div>
          <div className="profile-down" >
            <img src={vaibhav} alt="" />
            <div className="profile-title " style={{ fontFamily: 'Instagram Sans Bold' }}>Vaibhav Singh
         
            </div>
            <div className="profile-description " style={{ fontFamily: 'Instagram Sans Regular' }}>
            Vaibhav, CTO and Co-founder of RCCODEX, a full Stack Web Developer and Technical Expert.
            If you have any questions or just want to chat, feel free to click the button below. 😊

            </div>
            <div className="wrap">
            <div className="profile-button">
              <a href="https://calendly.com/singhvaibhav654/talk-to-me
 " style={{ fontFamily: 'Instagram Sans Regular' }}>Contact me</a>
  </div>
            <a href="https://www.instagram.com/vab_3110/" style={{fontSize:'24px',marginLeft:'24px'}}>
          <FiInstagram />
        </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderPage;
