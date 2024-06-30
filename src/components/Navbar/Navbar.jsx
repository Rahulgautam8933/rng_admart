import React from "react";
import "./Navbar.css";
// import logo from '../img/rng admart.png'
import logo from "../../assets/rng_admart1.png";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

import { FaSquareInstagram } from "react-icons/fa6";
function Navbar({ openSidebar }) {
  return (
    <>
      <div
        style={{ background: "white", position: "relative" }}
        className="navcontainer"
      >
        <div className="navboxs">
          <div style={{ position: "relative" }} className="navbox1">
            <img style={{ position: "absolute" }} src={logo} alt="rng logo" />
          </div>
          <div className="navbox2">
            <ul>
              <li>
                {" "}
                <NavLink to="/">Home</NavLink>
              </li>
              <li id="aboutlink">
                {" "}
                <NavLink to="#">
                  About Us <i className="zmdi zmdi-chevron-down"></i>
                </NavLink>
                <div className="aboutuslink">
                  <ul>
                    <li>
                      <NavLink to="/overview">Overview </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink to="/history">History </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink to="/teammember">Team Members </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink to="/testimonials">
                        Clients & Testimonials{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {" "}
                <NavLink to="/services">Our Services</NavLink>
              </li>
              <li id="projectlink">
                {" "}
                <NavLink to="/projects">Gallery </NavLink>
              </li>
              <li id="projectlink">
                {" "}
                <NavLink to="#">
                  Branches <i className="zmdi zmdi-chevron-down"></i>{" "}
                </NavLink>
                <div className="projectslink">
                  <ul>
                    <li>
                      <NavLink to="/Dishank-Realtors">
                        {" "}
                        Dishank Realtors{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink to="/Social2Vocal"> Social2Vocal </NavLink>{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {" "}
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "20px",
            }}
            className="navbox3"
          >
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100068313607481&mibextid=ZbWKwL"
            >
              {" "}
              <FaFacebookSquare />
            </a>
            <FaSquareInstagram />
            <FaTwitter style={{ color: "blue" }} />
            <FaYoutube style={{ color: "red" }} />
          </div>
          <div onClick={openSidebar} className="navbox4">
            <i className="fa-solid fa-bars navmenu"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
