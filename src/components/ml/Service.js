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
                <h3 style={{ fontFamily: 'Instagram Sans Bold' }}>Data Science</h3>
              </div>

              <ul className="service__list " style={{ fontFamily: 'Instagram Sans Regular' }}>
              <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>What is data science? Why is it important?</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Environmental Setup</p>
                </li>
                <li  className="pt-3 pb-3">
                  <BiCheck className="service__list-icon" />
                  <p>
                  Python Basics

                  </p>
                </li>
              <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Loops and Functions</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Numerical computing with Numpy</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Data manipulation using Pandas</p>
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
                <h3 style={{ fontFamily: 'Instagram Sans Bold' }}>Machine Learning</h3>
              </div>

              <ul className="service__list" style={{ fontFamily: 'Instagram Sans Regular' }}>
              <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Forecasting and prediction using regression</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Linear and Logistic Regression</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Implementation of Algorithms</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  
                  <p> Analysis and evaluation</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Deploying/  Serving the model</p>
                  
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
                <h3 style={{ fontFamily: 'Instagram Sans Bold' }}>Data Science and Analytics</h3>
              </div>

              <ul className="service__list" style={{ fontFamily: 'Instagram Sans Regular' }}>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Data and its various classifications: Continuous & Discrete, Structured vs Unstructured
</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Mathematics   for Data Science (Probability, Statistics,  Linear Algebra, Gradient Descent, calculus)</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Cleaning Data</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>
                  Data Manipulation
                  </p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Summarizing Data
.</p>
                </li>
                <li className="pt-3 pb-3 text-xl">
                  <BiCheck className="service__list-icon" />
                  <p>Jupyter Notebook</p>
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
