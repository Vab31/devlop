import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import logo2 from "../img/logo2.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Footer() {
  return (
    <footer>
      {/* data-aos="fade-up" data-aos-duration="1000" */}
      <a href="/#" className="footer__logo">
        <img src={logo2} alt="" width="25%" />
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        neque dolores minima itaque rerum nisi sapiente dolorum, eos veritatis!
        Voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium deserunt nulla totam veritatis laboriosam perspiciatis
        voluptate corporis, possimus blanditiis quis.
      </p>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">Our Service</a>
        </li>
        <li>
          <a href="#experience">Latest Project</a>
        </li>
        <li>
          <a href="#services">Clients FeedBack</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#contact">Book Us Now</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="google.com">
          <FaFacebookF />
        </a>
        <a href="google.com">
          <FiInstagram />
        </a>
        <a href="google.com">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Media. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
