import React from "react";
import "./navBar.css";
import Body from "./Body";
import { Link } from "react-router-dom";
import lean from "../img/lean.png";
import Service from "./Service";
import Project from "./Project";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <ul className="nav-list">
            <li className="nav-item">
              {/* <span>
                <img
                  style={{ marginBottom: "-5px" }}
                  src={lean}
                  alt=""
                  width="25px"
                />{" "}
                &nbsp;
              </span> */}
              <Link to="/home">Media</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-middle">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Our Service</a>
            </li>
            <li className="nav-item">
              <a href="#">Latest Project</a>
            </li>
            <li className="nav-item">
              <a href="#">Clients Feedback</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#">Book us Now</a>
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
    </>
  );
};

export default Navbar;
