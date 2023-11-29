import "./price.css";
import { BiCheck } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Prize = () => {
  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  const hrStyle = {
    width: "100%",
    margin: "20px 0px",
  };

  return (
    <div style={serviceContainerStyle} id="learn">
      <div data-aos="fade-up">
        <h1 style={{ fontFamily: 'Instagram Sans Bold' }} className="md:text-5xl text-2xl">Pricing Plan</h1>
      </div>
      <div style={hrStyle}>
        <hr />
      </div>
      <div>
        <section id="services">
          <div className="container services__container md:mr-40">
            <article
              className="service"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="service__head">
                <h2 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-2xl text-center text-black">SELF PACED</h2>
                <h2 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-3xl text-center">₹5000</h2>
              </div>
               
              <ul className="service__list " style={{ fontFamily: 'Instagram Sans Regular' }}>
                <li className="pt-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Recorded Sessions</p>
                </li>
                <li  className="pt-3">
                  <BiCheck className="service__list-icon" />
                  <p>
                  Hands-on
                  </p>
                </li>
              <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Hands-on Projects</p>
                </li>
                <li className="pt-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Certifications</p>
                </li>
                <li className="pt-3  text-xl">
                  <FaTimes className="service__list-icon" />
                  <p>Web Animation</p>
                </li>
                <li className="pt-3 text-xl">
                  <FaTimes className="service__list-icon" />
                  <p>Doubt Clearing Sessions</p>
                </li>
                <li className="pt-3  text-xl">
                  <FaTimes className="service__list-icon" />
                  <p>Mentor Guidance</p>
                </li>
                <li className="pt-3  text-xl">
                  <FaTimes className="service__list-icon" />
                  <p>Placement</p>
                </li>
                <li className="pt-3  text-xl">
                  <FaTimes className="service__list-icon" />
                  <p>Mock Interview</p>
                </li>
              </ul>
            </article>
            {/* END OF UI/UX */}
            <article
              className="service"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="service__head">
                <h2 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-2xl text-center text-black">Mentor Led</h2>
                <h2 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-3xl text-center">₹7000</h2>

              </div>

              <ul className="service__list " style={{ fontFamily: 'Instagram Sans Regular' }}>
                <li className="pt-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Recorded Sessions</p>
                </li>
                <li  className="pt-3">
                  <BiCheck className="service__list-icon" />
                  <p>
                  Hands-on
                  </p>
                </li>
              <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Hands-on Projects</p>
                </li>
                <li className="pt-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Certifications</p>
                </li>
                <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Web Animation</p>
                </li>
                <li className="pt-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Doubt Clearing Sessions</p>
                </li>
                <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Mentor Guidance</p>
                </li>
                <li className="pt-3  text-xl">
                  <FaTimes className="service__list-icon" />
                  <p>Placement</p>
                </li>
                <li className="pt-3  text-xl">
                  <FaTimes className="service__list-icon" />
                  <p>Mock Interview</p>
                </li>
              </ul>
            </article>
            {/* END OF CONTENT CREATION */}
            <article
              className="service"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="service__head">
              <h2 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-2xl text-center text-black">Professional</h2>
                <h2 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-3xl text-center">₹9000</h2>

              </div>

              <ul className="service__list" style={{ fontFamily: 'Instagram Sans Regular' }}>
              <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Recorded Sessions</p>
                </li>
                <li  className="pt-3">
                  <BiCheck className="service__list-icon" />
                  
                  <p>Hands-on</p>
                                                
                </li>
              <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Hands-on Projects</p>
                </li>
                <li className="pt-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Certifications</p>
                </li>
                <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Web Animation</p>
                </li>
                <li className="pt-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Doubt Clearing Sessions</p>
                </li>
                <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Mentor Guidance</p>
                </li>
                <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Placement</p>
                </li>
                <li className="pt-3  text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Mock Interview</p>
              <div className="md:w-40 w-32"></div>
                </li>
              </ul>
            </article>
            {/* END OF WEB DEVELOPMENT */}
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prize;
