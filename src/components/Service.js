import "./service.css";
import { BiCheck } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Service = () => {
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
        <h1 style={{ fontFamily: 'Instagram Sans Bold' }} className="md:text-5xl text-2xl">Learn with Us</h1>
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
                <h3 style={{ fontFamily: 'Instagram Sans Bold' }}>Front-end Development</h3>
              </div>

              <ul className="service__list " style={{ fontFamily: 'Instagram Sans Regular' }}>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>You are gonna learn(HTML5,CSS3,JS,)</p>
                </li>
                <li  className="pt-3 pb-3">
                  <BiCheck className="service__list-icon" />
                  <p>
                  Framworks you will be intruduced(React,Angular)

                  </p>
                </li>
              <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Browser Dev Tools & Web Accessibility</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Css and Hover effects.</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Web Animation</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>UX and UI Design</p>
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
                <h3 style={{ fontFamily: 'Instagram Sans Bold' }}>MERN</h3>
              </div>

              <ul className="service__list" style={{ fontFamily: 'Instagram Sans Regular' }}>
              <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>CRUD Operaritons with No SQL Database & Mongoose</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Routers & RESTful Api</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Authentication $ Authorization</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  
                  <p> Testing.</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Web Security(HTTPS)</p>
                  
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
                <h3 style={{ fontFamily: 'Instagram Sans Bold' }}>Back-end Development</h3>
              </div>

              <ul className="service__list" style={{ fontFamily: 'Instagram Sans Regular' }}>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>You will learn(NodeJS,Django)
</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Database Interaction</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>API Development</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>
                  Websockets $ Web Services
                  </p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Server Security
.</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>CRUD Operaritons with No SQL Database & Mongoose</p>
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

export default Service;
