import React from "react";
import "./navBar.css";
import Body from "./Body";
import { Link } from "react-router-dom";
import logo1 from "../img/logo1.png";
import Service from "./Service";
import Project from "./Project";
import ClientFeedBack from "./ClientFeedBack";
import BookUs from "./BookUs";
import Footer from "./Footer";
import FounderPage from "./FounderPage";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <ul className="nav-list">
            <li className="nav-item logo">
              <img style={{}} src={logo1} alt="" width="50%" />
            </li>
          </ul>
        </div>
        <div className="navbar-middle">
          <ul className="nav-list">
            <li className="nav-item">
              <Link Link to="/">
                Our Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">Latest Project</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Clients Feedback</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="nav-list">
            <div className="contactNav">
              <li className="nav-item ">
                <Link to="/">Contact</Link>
              </li>
            </div>
            <li className="nav-item">
              <Link to="/">Book us Now</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <hr />
      </div>

      <Body />

      <Service />

      <Project />

      <FounderPage />

      <div>
        <ClientFeedBack />
      </div>
      <div>
        <BookUs />
      </div>
      <Footer />
    </div>
  );
};

export default Navbar;
