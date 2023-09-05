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
import Courses from "./courses";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar" style={{ fontFamily: 'Instagram Sans Bold' }}>
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
              <a href="#learn">
                Learn
              </a>
            </li>
            <li className="nav-item">
              <a href='#resource'>Reading Material</a>
            </li>
            <li className="nav-item">
              <a href='#feedBackContainer'>Clients Feedback</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="nav-list">
            <div className="contactNav">
              <li className="nav-item ">
                <a href='#talktous'>Contact</a>
              </li>
            </div>
            <li className="nav-item">
              <Link to="/"></Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <hr />
      </div>

      <Body />

      <Service />
      <Courses/>

      <Project />

      <FounderPage />

      <div>
        <ClientFeedBack />
      </div>
      <div>
        {/* <BookUs /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Navbar;
