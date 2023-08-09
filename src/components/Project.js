import React from "react";
import "./project.css";
import IMG1 from "../img/IMG1.jpg";
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
    minHeight: "100vh", // This will ensure the content is centered vertically on the page
    padding: "20px", // Adding some padding for spacing
  };

  const hrStyle = {
    width: "100%",
    margin: "20px 0px",
  };
  return (
    <div style={serviceContainerStyle}>
      <div>
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
                <article key={id} className="project__item">
                  <div className="project__item-image">
                    <img src={image} alt={title} width="400px" />
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
