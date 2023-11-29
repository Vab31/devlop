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
    // margin: "20px 0px",
  };
  return (
    <div style={serviceContainerStyle} className="contact" id="talktous">
      <div data-aos="fade-up" className="m-5">
        <h1 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-3xl md:text-5xl">Talk To Us</h1>
      </div>
      <div style={hrStyle}>
        <hr />
      </div>

      <div className="profile-card">
        <div className="upc">
          <div className="gradiant"></div>
          <div className="profile-down">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofWpdmZ0rGkzQe34EmWKyFIfePqD-YMwOilCF3UdjV5CV8kz-Trv4uzuOfsE_b4DDgDc&usqp=CAU' alt="" />
            <div className="profile-title" style={{ fontFamily: 'Instagram Sans Bold' }}>RC RAO</div>
            <div className="profile-description" style={{ fontFamily: 'Instagram Sans Regular' }}>
            RC, CEO and Co-founder of RCCODEX.
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
              <a href="https://topmate.io/vaibhav_singh31
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
