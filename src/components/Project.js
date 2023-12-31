import React from "react";
import "./project.css";
import IMG1 from "../img/IMG1.jpg";
import img2 from "../img/pp3.jpg"
import img3 from "../img/Project-Management-Post.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Frontend project",
    github: "https://github.com/Vab31/qrcode.git",
    
    // demo: "https://pixabay.com/",
  },
  {
    id: 2,
    image: img3,
    title: "Frontend Project 2",
    github: "https://github.com/Vab31/finhunt_frontend",
    // demo: "https://pixabay.com/",
  },
  {
    id: 3,
    image: img2,
    title: "Project 3",
    github: "https://github.com/Vab31/rcrepothree",
    // demo: "https://pixabay.com/",
  },
  // {
  //   id: 3,
  //   image: IMG1,
  //   title: "Sql Notes",
  //   github: "https://drive.google.com/file/d/1e8LVkzRbexmDwT69b_cG5CX7chYGaJ5Y/view?usp=drive_link",
  //   // demo: "https://pixabay.com/",
  // },
  // {
  //   id: 4,
  //   image: IMG1,
  //   title: "Oops Notes",
  //   github: "",
  //   // demo: "https://pixabay.com/",
  // },
  // {
  //   id: 5,
  //   image: IMG1,
  //   title: "Computer Networking  Notes",
  //   github: "",
  //   // demo: "https://pixabay.com/",
  // },
  // {
  //   id: 6,
  //   image: IMG1,
  //   title: "Git/Github cheat sheet",
  //   github: "https://drive.google.com/file/d/11ozSS2pC7rHmYvgskPTBBSEWeqqPfSeP/view?usp=drive_link",
  //   // demo: "https://pixabay.com/",
  // },
  // {
  //   id: 7,
  //   image: IMG1,
  //   title: "HTML cheat sheet",
  //   github: "https://drive.google.com/file/d/1i8g9shkkX5koW9xlJAGMAT2Drm3i2_kv/view?usp=drive_link",
  //   // demo: "https://pixabay.com/",
  // },
  // {
  //   id: 8,
  //   image: IMG1,
  //   title: "CSS cheat sheet",
  //   github: "https://drive.google.com/file/d/1ZUaHwB7A5kqjIClOEcsG843uRFv6itYL/view?usp=drive_link",
  //   // demo: "https://pixabay.com/",
  // },


];

function Project() {
  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "60px",
    padding: "10px",
    
  };

  const hrStyle = {
    width: "100%",
    marginTop:"-20px",
    marginBottom:"20px"
  };

  return (
    <div style={serviceContainerStyle} id="resource">
      <div data-aos="fade-up">
        <h1 style={{ fontFamily: 'Instagram Sans Bold'}} className="md:text-5xl text-2xl md:m-5"  >Resourses To help You Out :)</h1>
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
                  className="project__item h-96"
                  data-aos="zoom-in-up"

                >
                  <div className="project__item-image h-60">
                    <img id="img" src={image} alt={title} />
                  </div>
                  <h3 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-red-600 text-2xl">{title}</h3>
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
