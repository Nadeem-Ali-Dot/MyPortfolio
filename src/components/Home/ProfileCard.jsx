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
              A passionate Dot Net Developer with 1+ year of hands-on experience building modern, responsive, and user-centric web applications using <strong>HTML5, Next.js, React.js, Tailwind CSS,</strong> and custom <strong>Sass (SCSS)</strong> . I specialize in crafting engaging user interfaces, smooth animations, and seamless API integrations that deliver high-performance, scalable, and maintainable solutions.
              </p>
              <p>
                Skilled in HTML, CSS, React Js, Bootstrap, JavaScript, and jQuery, I combine efficient, clean code with intuitive design principles to create impactful digital experiences. I’m eager to collaborate on innovative projects, solve real-world challenges, and continuously grow as a developer while delivering web applications that truly delight users.
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
