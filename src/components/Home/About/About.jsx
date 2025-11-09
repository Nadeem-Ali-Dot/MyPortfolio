import React from 'react'
import {FaCircle} from "/src/components/index.js"

function About() {
  return (
    <div>
        <div className=' bg-white mt-4 p-2 p-lg-4 rounded-2'>
          <div className='d-flex p-2 p-md-4 flex-wrap justify-content-between mb-4'>
                   <h3 className='mb-0 fw-semibold'>Hi, This is <span className='text-primary'>Nadeem Ali</span> 👋</h3>
                   <button className='btn btn-light my-3' disabled><small><span className='text-success me-3'><FaCircle/></span>Available For Hire</small></button>
               <div className="row">
                  <div className="col-12 col-md-7">
                       <p>I am a passionate and dedicated <strong> .NET Full Stack Developer </strong>
                         with a strong foundation in C#, ASP.NET, SQL Server, and modern frontend technologies like React.
                           I am working as <strong> BSD INFOTECH PVT LTD.</strong>, where I enhanced my skills through various hands-on projects, developing scalable, 
                        responsive, and user-friendly web applications across both frontend and backend.</p>
                  </div>
                
               </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5">
            <div className='bg-white mt-4 p-4 rounded-2'>
                      <h2 className=''>Education </h2>
                      <div className='my-4'>
                          <h6 className='fw-semibold mb-3'>Shri Venkataswara University </h6>
                          <p className='mb-1'>
                          <small className='text-success me-3'><FaCircle/></small>
                            <span >(M.C.A) Master of Computer Application</span>
                          </p>
                      </div>
                       <div className='my-4'>
                          <h6 className='fw-semibold mb-3'>IFM University </h6>
                          <p className='mb-1'>
                          <small className='text-success me-3'><FaCircle/></small>
                            <span >(B.C.A) Bachelor of Computer Application</span>
                          </p>
                      </div>
                      <div className='my-md-4'>
                          <h6 className='fw-semibold mb-3'>Cetpa Infotech</h6>
                          <p className='mb-1'>
                          <small className='text-success me-3'><FaCircle/></small>
                            <span >Python Full Stack </span>
                          </p>
                          
                      </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className='bg-white mt-4 p-4 rounded-2'>
                    <h2>Skills</h2>
                    <div className=''>
                       <div className='my-4'>
                          <h6 className='fw-semibold mb-3'>Full Stack Developer With Dot Net Core</h6>
                        <div className='d-flex flex-wrap'>
                            <p className='mb-1 lang-width'>
                            <small className='text-success me-3'><FaCircle/></small>
                              <span >HTML/Css</span>
                            </p>
                            <p className='mb-1 lang-width'>
                            <small className='text-success me-3'><FaCircle/></small>
                              <span >JavaScript</span>
                            </p>
                        </div>
                        <div className='d-flex flex-wrap'>
                            <p className='mb-1 lang-width'>
                            <small className='text-success me-3'><FaCircle/></small>
                              <span >Bootstrap</span>
                            </p>
                            <p className='mb-1 lang-width'>
                            <small className='text-success me-3'><FaCircle/></small>
                              <span >Tailwind/Css</span>
                            </p>
                        </div>
                        <div className='d-flex flex-wrap'>
                            <p className='mb-1 lang-width'>
                            <small className='text-success me-3'><FaCircle/></small>
                              <span >C#/CShap</span>
                            </p>
                            <p className='mb-1 lang-width'>
                            <small className='text-success me-3'><FaCircle/></small>
                              <span >Ajax</span>
                            </p>
                        </div>
                        <div className='d-flex flex-wrap'>
                            <p className='mb-1 lang-width'>
                            <small className='text-success me-3'><FaCircle/></small>
                              <span >Jquery</span>
                            </p>
                            <p className='mb-1 lang-width'>
                            <small className='text-success me-3'><FaCircle/></small>
                              <span >React Js</span>
                            </p>
                            <p className='mb-1 lang-width'>
                            <small className='text-success me-3'><FaCircle/></small>
                              <span >Dot Net Core</span>
                            </p>
                        </div>
                       </div>
                       <div>
                         <h6 className='fw-semibold mb-3'>Back End</h6>
                           <div className='d-flex flex-wrap'>
                              <p className='mb-1 lang-width'>
                              <small className='text-success me-3'><FaCircle/></small>
                                <span >Dot Net Core</span>
                              </p>
                              <p className='mb-1 lang-width'>
                              <small className='text-success me-3'><FaCircle/></small>
                                <span >Entity Framework Core</span>
                              </p>
                              <p className='mb-1 lang-width'>
                              <small className='text-success me-3'><FaCircle/></small>
                                <span >Ado.Net Core</span>
                              </p>

                               <p className='mb-1 lang-width'>
                              <small className='text-success me-3'><FaCircle/></small>
                                <span >MS Sql Server</span>
                              </p>
                           </div>
                       </div>
                    </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default About
