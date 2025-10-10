import React from "react";
import {
  GrHomeRounded,
  GoPerson,
  FiLayers,
  SiPolywork,
  LuContact2,
  BsMoonStarsFill,
  IoMenu,
} from "/src/components/index.js";
import { NavLink } from "react-router-dom";
import resume from "/images/Nadeem ALi Resume Updated.pdf"


function HeaderSm() {
  return (
    <nav className="navbar navbar-expand-lg p-3 rounded-2 bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-4 fw-bold" href="/">
          My CV
        </a>
        <div>
          <span
            className="fs-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#menu"
            aria-controls="menu"
          >
            <IoMenu />
          </span>
          <div
            className="offcanvas offcanvas-start p-3"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="menu"
            aria-labelledby="menu"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand fs-4 fw-bold" href="#">
                My CV
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
                <li className="nav-item fw-semibold fs-6 my-2">
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-danger" : "text-info"
                      } text-black text-decoration-none`
                    }
                  >
                    <span className="me-3">
                      <GrHomeRounded />
                    </span>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item fw-semibold fs-6 my-2">
                  <NavLink
                    to="/About"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-danger" : "text-info"
                      } text-black text-decoration-none`
                    }
                  >
                    <span className="me-3">
                      <GoPerson />
                    </span>
                    <span>About</span>
                  </NavLink>
                </li>
                <li className="nav-item fw-semibold fs-6 my-2">
                  <NavLink
                    to="/Works"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-danger" : "text-info"
                      } text-black text-decoration-none`
                    }
                  >
                    <span className="me-3">
                      <SiPolywork />
                    </span>
                    <span>Works</span>
                  </NavLink>
                </li>
                <li className="nav-item fw-semibold fs-6 my-2">
                  <NavLink
                    to="/Contact"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-danger" : "text-info"
                      } text-black text-decoration-none`
                    }
                  >
                    <span className="me-3">
                      <LuContact2 />
                    </span>
                    <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex flex-column mt-3">
                <a
                  href={resume}
                  className="px-3 py-2 me-3 btn btn-outline-primary"
                  download="Samar-Abbas-Frontend-Developer"
                >
                  Download resume
                </a>
                <a
                  className="btn btn-dark px-3 py-2 fw-semibold"
                  target="_blank"
                  href="https://www.linkedin.com/in/me/"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderSm;
