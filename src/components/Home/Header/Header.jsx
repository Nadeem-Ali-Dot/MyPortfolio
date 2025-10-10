import React, { useState } from "react";
import {
  GrHomeRounded,
  GoPerson,
  FiLayers,
  SiPolywork,
  LuContact2,
  BsMoonStarsFill,
  MdOutlineWbSunny,
} from "/src/components/index.js";
import { NavLink } from "react-router-dom";
import resume from "/images/Nadeem ALi Resume Updated.pdf"


function Header() {
  const [modeIcon, setModeIcon] = useState(false);

  let html = document.querySelector("html");
  const darkMode = () => {
    let body = document.querySelector("body");
    if (html.getAttribute("data-bs-theme") !== "dark") {
      html.setAttribute("data-bs-theme", "dark");
      body.setAttribute("class", "bg-dark");
      localStorage.setItem("theme", "dark");
      setModeIcon(true);
    } else {
      html.setAttribute("data-bs-theme", "light");
      body.removeAttribute("class", "bg-dark");
      localStorage.setItem("theme", "light");
      setModeIcon(false);
    }
  };

  

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg p-3 rounded-2 bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fs-4 fw-bold" href="/">
            My CV
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
              <li className="fw-semibold fs-6 mx-md-3">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-danger" : "text-info"
                    } text-black text-decoration-none`
                  }
                >
                  <span className="me-2">
                    <GrHomeRounded />
                  </span>
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="fw-semibold fs-6 mx-md-3">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-danger" : "text-info"
                    } text-black text-decoration-none`
                  }
                >
                  <span className="me-2">
                    <GoPerson />
                  </span>
                  <span>About</span>
                </NavLink>
              </li>
              <li className="fw-semibold fs-6 mx-md-3">
                <NavLink
                  to="/Works"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-danger" : "text-info"
                    } text-black text-decoration-none`
                  }
                >
                  <span className="me-2">
                    <SiPolywork />
                  </span>
                  <span>Works</span>
                </NavLink>
              </li>
              <li className="fw-semibold fs-6 mx-md-3">
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-danger" : "text-info"
                    } text-black text-decoration-none`
                  }
                >
                  <span className="me-2">
                    <LuContact2 />
                  </span>
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
            <div>
              <a
                href={resume}
                className="px-3 py-2 me-3 btn btn-outline-primary"
                download="Samar-Abbas-Frontend-Developer"
              >
                Download resume
              </a>
              <a
                className="btn btn-dark px-3 py-2 fw-bold"
                target="_blank"
                href="https://www.linkedin.com/in/me/"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
