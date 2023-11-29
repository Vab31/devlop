import React from "react";
import "./clientFeedBack.css";
import IMG from "../img/lokesh.png";
import IMG1 from "../img/Rohit.jpg";
import IMG2 from "../img/rahul.png";
// import IMG2 from "../img/Rohit.png";
// Import Swiper React components
//import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const data = [
  {
    avatar: IMG,
    name: "Aadarsh Gupta",
    review:
    "Learning coding from RcCodex was a game-changer for me. The hands-on experience and excellent guidance helped me achieve amazing results, and I'm now proud to be working as an intern in a tech company. Thank you for opening doors to a bright future!"
  },
  {
    avatar: IMG1,
    name: " Rohit",
    review:
    "Your coding program has been a revelation for me. It equipped me with the skills and confidence to excel in the tech world. Thanks to your guidance, I secured an exciting internship opportunity, and I couldn't be more grateful for the transformative experience your course provided."    
    },
  {
    avatar: IMG2,
    name: "Rahul",
        review:
    "Enrolling in your coding program was a life-changing decision. The knowledge and support I received were instrumental in my journey to becoming a proficient coder.all thanks to the strong foundation your program laid for me. It's been an incredible ride!"

        },

];

function ClientFeedBack() {
  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "10vh",
    padding: "20px",
  };

  const hrStyle = {
    width: "100%",
    margin: "20px 0px",
  };

  return (
    <div id="feedBackContainer">
      <div style={serviceContainerStyle}>
        <div data-aos="fade-up">
          <h1 style={{ fontFamily: 'Instagram Sans Bold' }} className="md:text-5xl text-2xl">Testimonial</h1>
        </div>
        <div style={hrStyle}>
          <hr />
        </div>
      </div>

      <section id="feedback" data-aos="fade-left">
        <Swiper
          className=" feedback__container mySwiper"
          navigation={true}
          modules={[Navigation]}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="feed">
                <div className="client__avatar" style={{borderRadius:'100%'}}>
                  <img src={avatar} alt="user" width="83px" height="83px"></img>
                </div>
                <h5 className="client__name" style={{ fontFamily: 'Instagram Sans Bold' }}>{name}</h5>
                <small className="client__review" style={{ fontFamily: 'Instagram Sans Regular' }}>{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

export default ClientFeedBack;
