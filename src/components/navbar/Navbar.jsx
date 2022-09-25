import React from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
function Navbar() {
  return (
    <div class="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark " >
        <div className="container-fluid d-flex space-between pb-2 pt-3 px-4 px-lg-5">
          <Link to="#/" className="navbar-brand border border-success border-2 py-2 rounded-circle btn fw-light text-success" href="#"><span>AJ</span></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className="Toggler">
              <div className='first-line text-end'></div>
              <div className='second-line justify-content-end'></div>
              <div className='third-line text-end'></div>
            </div>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <Link to="#about" className="nav-link fw-light text-secondary hover" href="#"><span className="text-success" >01. </span>About</Link>
              </li>
              <li className="nav-item me-2">
                <Link to="#experience" className="nav-link fw-light text-secondary hover" href="#"><span className="text-success" >02. </span> Experience</Link>
              </li>
              <li className="nav-item me-2">
                <Link to="#work" className="nav-link fw-light text-secondary hover" href="#"> <span className="text-success" >03. </span> Work</Link>
              </li>
              <li className="nav-item me-2">

                <Link to="#contact" className="nav-link fw-light text-secondary hover" href="#"><span className="text-success" >04. </span> Contact</Link>
              </li>
              {/* <li className="nav-item me-2">
                <a className="nav-link fw-light text-secondary hover" href="#"><span className="text-success" >05. </span> Blog</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link btn  text-success border border-success rounded-pill " href="#"><span className="px-2">Resume</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar 