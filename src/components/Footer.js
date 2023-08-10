import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Footer() {
  return (
    <footer data-aos="fade-up" data-aos-duration="1000">
      <a href="/#" className="footer__logo">
        Media
      </a>

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
