import React from "react";
import "./project.css";
import IMG1 from "../img/IMG1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const data = [
  {
    id: 1,
    image: 'https://cdn.wccftech.com/wp-content/uploads/2016/10/Front-End-Development-Bundle.jpg',
    title: "Frontend project",
    github: "https://github.com/Vab31/qrcode.git",
    
    // demo: "https://pixabay.com/",
  },
  {
    id: 2,
    image: 'https://cdn.wccftech.com/wp-content/uploads/2016/10/Front-End-Development-Bundle.jpg',
    title: "Frontend Project 2",
    github: "https://github.com/Vab31/finhunt_frontend",
    // demo: "https://pixabay.com/",
  },
  {
    id: 3,
    image: IMG1,
    title: "Sql Notes",
    github: "",
    // demo: "https://pixabay.com/",
  },
  {
    id: 4,
    image: IMG1,
    title: "Oops Notes",
    github: "",
    // demo: "https://pixabay.com/",
  },
  {
    id: 5,
    image: IMG1,
    title: "Computer Networking  Notes",
    github: "",
    // demo: "https://pixabay.com/",
  },
  {
    id: 6,
    image: IMG1,
    title: "Git/Github cheat sheet",
    github: "https://drive.google.com/file/d/11ozSS2pC7rHmYvgskPTBBSEWeqqPfSeP/view?usp=drive_link",
    // demo: "https://pixabay.com/",
  },
  {
    id: 7,
    image: IMG1,
    title: "HTML cheat sheet",
    github: "https://drive.google.com/file/d/1i8g9shkkX5koW9xlJAGMAT2Drm3i2_kv/view?usp=drive_link",
    // demo: "https://pixabay.com/",
  },
];

function Project() {
  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  const hrStyle = {
    width: "100%",
    marginTop:"-20px",
    marginBottom:"20px"
  };

  return (
    <div style={serviceContainerStyle} id="resource">
      <div data-aos="fade-up">
        <h1 style={{ fontFamily: 'Instagram Sans Bold', fontSize:"50px" }}  >Resourses To help You Out :)</h1>
      </div>
      <div style={hrStyle}>
        <hr />
      </div>

      <div>
        <section id="project">
          <div className="container project__container">
            {data.map(({ id, image, title, github, demo }) => {
              return (
                <article
                  key={id}
                  className="project__item"
                  data-aos="zoom-in-up"
                >
                  <div className="project__item-image">
                    <img id="img" src={image} alt={title} />
                  </div>
                  <h3 style={{ fontFamily: 'Instagram Sans Bold' }}>{title}</h3>
                  <div className="project__item-cta">
                  { github?
                    <a
                      href={github}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontFamily: 'Instagram Sans Regular' }}
                    >
                      Get
                    </a>:
                    <a
                      onClick={()=>window.alert('We will add it soon!')}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontFamily: 'Instagram Sans Regular' }}
                    >
                      Get
                    </a>
                  }
                  
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
