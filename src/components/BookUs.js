import React from "react";
import "./bookUs.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { useRef } from "react";
import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const BookUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hmlt4oa",
      "template_7whmt75",
      form.current,
      "2HAQkcjkOb_NbuBT_"
    );

    e.target.reset();

    /* test js start   */
    const button = document.getElementById("btn");
    const toast = document.querySelector(".toast");
    const closeIcon = document.querySelector(".close");
    const progress = document.querySelector(".progress");

    button.addEventListener("click", () => {
      toast.classList.add("active");
      progress.classList.add("active");

      setTimeout(() => {
        toast.classList.remove("active");
      }, 5000);

      setTimeout(() => {
        progress.classList.remove("active");
      }, 5300);
    });

    closeIcon.addEventListener("click", () => {
      toast.classList.remove("active");

      setTimeout(() => {
        progress.classList.remove("active");
      }, 300);
    });

    /* test js end   */
  };

  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "10vh",
    padding: "20px",
  };

  const hrStyle = {
    width: "80%",
    margin: "20px 0px",
  };
  return (
    <>
      <div style={serviceContainerStyle}>
        <div data-aos="fade-up">
          <h1>Book us/Contact us</h1>
        </div>
        <div style={hrStyle}>
          <hr />
        </div>
      </div>
      <section id="contact">
        <div className="container contact__container">
          <div className="contact__options" data-aos="fade-right">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>abc@gmail.com</h5>
              <a
                href="mailto:abc@gmail.com"
                target="_blank"
                className="btn btn-primary"
              >
                Send a message
              </a>
            </article>

            <article className="contact__option">
              <AiOutlineLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>abc</h5>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="btn btn-primary"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTION */}

          <div data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              ></textarea>
              <button
                type="submit"
                id="btn"
                className="btn btn-primary button1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="toast">
          <div className="toast-content">
            <i class="check">
              <AiOutlineCheck />
            </i>

            <div className="message">
              <span className="text text-1">Success</span>
              <span className="text text-2">
                Your message has been delivered
              </span>
            </div>
          </div>
          <i className="close">
            <ImCancelCircle />
          </i>

          <div className="progress"></div>
        </div>
      </section>
    </>
  );
};

export default BookUs;
