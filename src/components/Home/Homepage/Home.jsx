import React from "react";
import {
  IoIosArrowRoundForward,
  CiLocationArrow1,
  ProfileCard,
} from "/src/components/index.js";
import { useNavigate } from "react-router-dom";
import { SiAltiumdesigner } from "react-icons/si";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <ProfileCard />
      <div className="row mt-4">
        <div className="col-12 col-lg-6 ">
          <div>
            
            <div className="bg-white p-4 p-lg-4 mt-4 mt-lg-0 rounded-2">
              <h3 className="fw-semibold">My Expert Area</h3>
              <h6 className="mt-md-4 mt-2 fw-semibold">Dot Net Development</h6>
              <div className="d-flex flex-wrap gap-3 mt-4">
                  <div className="lang">
                  <img src="images/Dotnetcore.webp" alt="html" />
                </div>
                  <div className="lang">
                  <img src="images/Cshap.png" alt="html" />
                </div>
              
                  <div className="lang">
                  <img src="images/sqlserver.webp" alt="html" />
                </div>
                <div className="lang">
                  <img src="images/react.png" alt="html" />
                </div>
                <div className="lang">
                  <img src="images/html.png" alt="html" />
                </div>
                <div className="lang">
                  <img src="images/css.png" alt="html" />
                </div>
                <div className="lang">
                  <img src="images/bootstrap.png" alt="html" />
                </div>
                <div className="lang">
                  <img src="images/tailwind.png" alt="html" />
                </div>
                <div className="lang">
                  <img src="images/js.png" alt="html" />
                </div>
                <div className="lang">
                  <img src="images/jquery.png" alt="html" />
                </div>
              
                <div className="lang">
                  <img src="images/git.png" alt="html" />
                </div>
              </div>
              
            </div>
            <div className="bg-white d-flex align-content-center gap-5 p-4 flex-wrap mt-4 p-2 p-lg-4 rounded-2">
              <div className=" text-center">
                <span>
                  <svg
                    _ngcontent-ng-c3010595773=""
                    xmlns="http://www.w3.org/2000/svg"
                    width={"4rem"}
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-12 w-12 text-primary lg:h-16 lg:w-16"
                  >
                    <path
                      _ngcontent-ng-c3010595773=""
                      d="M33.333 42.667H10.667A2.667 2.667 0 0 1 8 40V13.333a2.667 2.667 0 0 1 2.667-2.666h42.666A2.667 2.667 0 0 1 56 13.333v21.334M18.667 53.333h10.666M24 42.667v10.666M53.333 56l5.334-5.333-5.334-5.334m-8 0L40 50.667 45.333 56"
                    ></path>
                  </svg>
                </span>
                <p className="mt-1">Frontend Development</p>
              </div>
           
              <div className=" text-center">
                <span>
                  <svg
                    _ngcontent-ng-c3010595773=""
                    width={"4rem"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-12 w-12 text-primary lg:h-16 lg:w-16"
                  >
                    <path
                      _ngcontent-ng-c3010595773=""
                      d="M26.666 18.667A5.333 5.333 0 0 1 32 13.333h16a5.333 5.333 0 0 1 5.333 5.334v26.666A5.333 5.333 0 0 1 48 50.667H32a5.333 5.333 0 0 1-5.334-5.334V18.667Zm-8 0v26.666m-8-24v21.334"
                    ></path>
                  </svg>
                </span>
                <p className="mt-1">Responsive Design</p>
              </div>

              <div className=" text-center">
                <span>
                  <svg
                    _ngcontent-ng-c3010595773=""
                    xmlns="http://www.w3.org/2000/svg"
                    width={"4rem"}
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-12 w-12 text-primary lg:h-16 lg:w-16"
                  >
                    <path
                      _ngcontent-ng-c3010595773=""
                      d="M33.333 42.667H10.667A2.667 2.667 0 0 1 8 40V13.333a2.667 2.667 0 0 1 2.667-2.666h42.666A2.667 2.667 0 0 1 56 13.333v21.334M18.667 53.333h10.666M24 42.667v10.666M53.333 56l5.334-5.333-5.334-5.334m-8 0L40 50.667 45.333 56"
                    ></path>
                  </svg>
                </span>
                <p className="mt-1">Graphic Designing</p>
              </div>
            </div>
            <div className="bg-white mt-4 p-4 rounded-2">
              <div className="bg-light p-1">
                <marquee>
                  <p className="mb-0">
                    Available For Hire 🚀 Available For Hire 🚀 Available For
                    Hire 🚀 Available For Hire 🚀 Available For Hire 🚀
                  </p>
                </marquee>
              </div>
              <h3 className="mt-3">Let's👋 Work Together</h3>
              <p> Looking forward to hiring from you!</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="bg-white mb-md-4 p-4 mt-4 mt-lg-0 rounded-2">
            <div className="d-flex gap-4 align-items-center justify-content-between flex-wrap">
              <h4 className="fw-semibold mb-0">Recent Projects</h4>
              <button
                className="fw-semibold text-primary bg-transparent p-0 border-0"
                onClick={(e) => navigate("/Works")}
              >
                All Projects{" "}
                <span className="fs-4">
                  <IoIosArrowRoundForward />
                </span>
              </button>
              <div className="projects mt-md-2 mt-2">
                <div className="weather p-2 ">
                  <img
                    src="images/flextron.png"
                    alt=""
                    className="img-fluid rounded-2 border border-1"
                  />
                  <div className="mt-md-3 mt-1">
                    <h6 className="mb-0 fw-semibold">Flextron</h6>
                    <a
                      href="https://flextronassembly.himrav.com/"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      <small>
                        Go to see
                        <span className="fs-5 ms-1">
                          <IoIosArrowRoundForward />
                        </span>
                      </small>
                    </a>
                  </div>
                </div>
                <div className="weather p-2">
                  <img
                    src="images/eon7.png"
                    alt=""
                    className="img-fluid rounded-2"
                  />
                  <div className="mt-md-3 mt-1">
                    <h6 className="mb-0 fw-semibold">Eon7 Developers</h6>
                    <a
                      href="https://eon7-testing.vercel.app/"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      <small>
                        Go to see
                        <span className="fs-5 ms-1">
                          <IoIosArrowRoundForward />
                        </span>
                      </small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
