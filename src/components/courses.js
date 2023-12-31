import React from "react";
import "./project.css";
import IMG1 from "../img/IMG1.jpg";
import ml from "../img/ml.png";
import mern from "../img/mern.png";
import softskill from "../img/soft-skills-feature.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const data = [
  {
    id: 1,
    image: mern,
    title: `<h3 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-red-600 text-4xl">Web Devlopment</h3>`
    ,

    github: "https://forms.gle/v24cwDeGw7GtxB4r5",

    details:`We’ll teach you to use and implement the fundamental building blocks of the web to ensure you are skilled enough to develop your own website

   `,
   
   gumroad:'/webdev',
    // demo: "https://pixabay.com/",
  },
  {
    id: 2,
    image: ml,
    title: "Machine Learning",
    github: "https://forms.gle/v24cwDeGw7GtxB4r5",

    // demo: "https://pixabay.com/",
    details:`In this program you’ll be taught to use all the tools required and identify trends, patterns and gain insights from raw data as required in the industry, 
   `,
   gumroad:'/ml'
  },

  {
    id: 3,
    image:softskill,
    title: "SoftSkill",
    github: "https://forms.gle/v24cwDeGw7GtxB4r5",
    // demo: "https://pixabay.com/",
    details:`
    This program focuses on honing essential soft skills, including effective communication. By the end, you'll possess personal and professional success.

    `,
    gumroad:'/',



  },

];

function Courses() {
  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "5px",
    marginTop:"15px"
  };

  const hrStyle = {
    width: "100%",
    marginTop:"-5px",
    marginBottom:"10px"
  };
  return (
    <div style={serviceContainerStyle} id="sell">
      <div data-aos="fade-up">
        <h1 style={{ fontFamily: 'Instagram Sans Bold'}} className="md:text-5xl text-2xl md:m-5 " > Our Most Popular Courses :)</h1>
      </div>
      <div style={hrStyle}>
        <hr />
      </div>

      <div>
        <section id="project">
          <div className="container project__container">
            {data.map(({ id, image, title, github, details,gumroad }) => {
              return (
                <article
                  key={id}
                  className="project__item"
                  data-aos="zoom-in-up"
                >
                  <div className="project__item-image">
                    <img id="img" src={image}  />
                  </div>
                  <h3 className="text-2xl" style={{ fontFamily: 'Instagram Sans Bold', color:'red',fontWeight:"bolder" }} dangerouslySetInnerHTML={{ __html: title }}/>
                  {/* <div style={{ fontFamily: 'Instagram Sans Regular ',margin:'5px',textAlign:"center" }} dangerouslySetInnerHTML={{ __html: details }} /> */}

                  <div className="project__item-cta btnbuy" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {/* <div>
    <a
      href={github}
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
      style={{ fontFamily: 'Instagram Sans Regular' }}
    >
      Buy through UPI
    </a>
  </div> */}
  <div>
    <a
      href={gumroad}
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
      style={{ fontFamily: 'Instagram Sans Regular' }}
    >
     Know More
    </a>
  </div>
</div>
<p className="text-center text-lg">{details}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Courses;
