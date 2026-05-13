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
           assionate .NET Full Stack Developer

A passionate .NET Full Stack Developer with 2+ years of experience in designing and developing scalable, secure, and user-focused web applications. Skilled in backend development using C#, ASP.NET Core, Web API, Entity Framework, and SQL Server,Umbraco, along with frontend technologies like React.js, JavaScript, HTML5, CSS3, and Bootstrap.

I specialize in building end-to-end web solutions, including RESTful API development, database design, performance optimization, and seamless UI integration. My focus is on writing clean, maintainable code and delivering efficient, business-driven applications.

Experienced in working across the full stack — from database architecture and business logic to responsive and interactive user interfaces — ensuring smooth user experiences and scalable system performance.

I am eager to contribute to impactful projects, solve real-world problems, and continuously grow as a developer in modern software development environments. 
             </p> <div
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
