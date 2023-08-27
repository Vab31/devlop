import React from "react";
import "./navBar.css";
import Body from "./Body";
import { Link } from "react-router-dom";
import lean from "../img/lean.png";
import Service from "./Service";
import Project from "./Project";
import ClientFeedBack from "./ClientFeedBack";
import BookUs from "./BookUs";
import Footer from "./Footer";
import { useState } from "react";
import FounderPage from "./FounderPage";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <ul className="nav-list">
            <li className="nav-item">
              <span>
                <img
                  style={{ marginBottom: "-5px" }}
                  src={lean}
                  alt=""
                  width="25px"
                />{" "}
                &nbsp;
              </span>
              <Link to="/">Media</Link>
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
            <li className="nav-item">
              <Link to="/">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Book us Now</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ margin: "0 30px 20px 30px" }}>
        <hr />
      </div>
      <Body />
      <Service />
      <Project />
      <FounderPage />
      <ClientFeedBack />
      <BookUs />
      <Footer />
    </>
  );
};

export default Navbar;
