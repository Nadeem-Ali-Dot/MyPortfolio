import React, { useState } from "react";
import {
  FiPhoneCall,
  FaWhatsapp,
  IoCopyOutline,
  CiLocationArrow1,
} from "/src/components/index.js";
import { useNavigate } from "react-router-dom";

function ProfileCard() {
  const email = "NadeemAliMachhr2002@gmail.com";
  const nagContact = useNavigate();

  const copyEmail = () => {
    let input = document.createElement("input");
    input.value = email;
    input.select();
    input.execCommond("copy");
  };

  return (
    <div className="mt-4 card p-lg-4 p-3">
      <div className="row rounded-2 ">
        <div className="col-12 col-lg-6">
          <div className="d-flex  justify-content-center align-items-center h-100">
            <div className="p-lg-4 p-2">
              <h5 className="display-3 fw-semibold">Nadeem Ali 👋</h5>
              <p className="fs-6">
                A Passionate <span className="fw-bold">Dot Net Developer</span>{" "}
              </p>
              <p>
              A passionate .NET Developer with 1+ years of hands-on experience building modern, responsive, and user-centric web applications using C#, ASP.NET Core, Entity Framework, and SQL Server on the backend, combined with React.js, HTML5, Tailwind CSS on the frontend.

I specialize in developing scalable, secure, and maintainable full-stack applications, integrating RESTful APIs, managing database operations, and delivering seamless user experiences across web platforms. My expertise lies in blending clean, efficient backend logic with intuitive and dynamic frontend interfaces.

Skilled in .NET Core, Web API, React.js, JavaScript, Bootstrap, and jQuery, I bring a balanced approach to full-stack development — from database design and business logic to polished UI components.

I’m eager to contribute to impactful projects, tackle real-world challenges, and continuously grow as a developer while building reliable solutions that solve business problems and delight users.
              </p>
            
              <div
                className="d-flex flex-wrap align-items-center"
                role="group"
                aria-label="Basic example"
              >
                <a
                  href="#"
                  onClick={copyEmail}
                  className="btn m-2 ms-lg-0 btn-primary px-3 py-2"
                >
                  <div className="d-flex">
                    <span className="me-3">
                      <CiLocationArrow1 />
                    </span>
                    <span>Hire me</span>
                  </div>
                </a>
                <a
                  href="#"
                  onClick={nagContact("/Contact")}
                  className="btn m-2 btn-outline-dark px-3 py-2"
                >
                  <div className="d-flex">
                    <span className="me-3">
                      <IoCopyOutline />
                    </span>
                    <span>Email</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img
            src="images/banner.jpg"
            className="img-fluid rounded-2"
            alt="profile-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
