import React from "react";
import "./project.css";
import IMG1 from "../img/IMG1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Animated-NavBar",
    github: "https://github.com",
    demo: "https://pixabay.com/",
  },
  {
    id: 2,
    image: IMG1,
    title: "This is a project item 2",
    github: "https://github.com",
    demo: "https://pixabay.com/",
  },
  {
    id: 3,
    image: IMG1,
    title: "This is a project item 3",
    github: "https://github.com",
    demo: "https://pixabay.com/",
  },
  {
    id: 4,
    image: IMG1,
    title: "This is a project item 4",
    github: "https://github.com",
    demo: "https://pixabay.com/",
  },
  {
    id: 5,
    image: IMG1,
    title: "This is a project item 5",
    github: "https://github.com",
    demo: "https://pixabay.com/",
  },
  {
    id: 6,
    image: IMG1,
    title: "This is a project item 6",
    github: "https://github.com",
    demo: "https://pixabay.com/",
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
    margin: "20px 0px",
  };
  return (
    <div style={serviceContainerStyle}>
      <div data-aos="fade-up">
        <h1>Latest Project</h1>
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
                  <h3>{title}</h3>
                  <div className="project__item-cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
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
