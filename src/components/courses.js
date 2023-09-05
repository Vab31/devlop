import React from "react";
import "./project.css";
import IMG1 from "../img/IMG1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const data = [
  {
    id: 1,
    image: 'https://codedamn.com/assets/images/learnpaths/og/frontend.png',
    title: "FrontEnd Ebook for just ₹199",

    github: "https://forms.gle/v24cwDeGw7GtxB4r5",

    details:`70+ BASIC PROJECTS WITH SOURCE CODE:
    <br/>
    <b>50+ BIG PROJECTS </b>WITH SOURCE CODE:
    <br/>
     <b>24X7 TEAM SUPPORT </b>
    <br/>
   
    <br/>
   <b> Revision Brief Notes</b>`,
   gumroad:'https://rcrao.gumroad.com/l/khjmw',
    // demo: "https://pixabay.com/",
  },
  {
    id: 2,
    image: 'https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1',
    title: "Mern Ebook for just ₹299",
    github: "https://forms.gle/v24cwDeGw7GtxB4r5",

    // demo: "https://pixabay.com/",
    details:`<b>70+ BASIC PROJECTS</b> WITH SOURCE CODE:
    <br/>
    <b>20+ BIG PROJECTS</b> WITH SOURCE CODE
    <br/>
   <b> 24X7 TEAM SUPPORT</b>
    <br/>
    
    <br/>
   <b> Revision Brief Notes </b>`,
   gumroad:'https://rcrao.gumroad.com/l/zukzl'
  },

  {
    id: 3,
    image: 'https://simpleprogrammer.com/wp-content/uploads/2016/12/What-Is-Back-End-Development.png',
    title: "BackEnd Ebook for just ₹199",
    github: "https://forms.gle/v24cwDeGw7GtxB4r5",
    // demo: "https://pixabay.com/",
    details:`<b>70+ BASIC PROJECTS</b> WITH SOURCE CODE
    <br/>
    <b>50+ BIG PROJECTS</b> WITH SOURCE CODE:
    
    <br/>
    <b>24X7 TEAM SUPPORT</b>
    <br/>
   
    <br/>
    <b>Revision Brief Notes</b>`,
    gumroad:'https://rcrao.gumroad.com/l/zmtoe',



  },

];

function Courses() {
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
    <div style={serviceContainerStyle} id="sell">
      <div data-aos="fade-up">
        <h1 style={{ fontFamily: 'Instagram Sans Bold', fontSize:"50px" }}  > Courses :)</h1>
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
                    <img id="img" src={image} alt={title} />
                  </div>
                  <h3 style={{ fontFamily: 'Instagram Sans Bold' }}>{title}</h3>

                  <div style={{ fontFamily: 'Instagram Sans Regular ',margin:'5px',textAlign:"center" }} dangerouslySetInnerHTML={{ __html: details }} />

                  <div className="project__item-cta btnbuy" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div>
    <a
      href={github}
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
      style={{ fontFamily: 'Instagram Sans Regular' }}
    >
      Buy through Upi
    </a>
  </div>
  <div>
    <a
      href={gumroad}
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
      style={{ fontFamily: 'Instagram Sans Regular' }}
    >
      Buy (International Students)
    </a>
  </div>
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

export default Courses;
