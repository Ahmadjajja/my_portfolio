import React from 'react'

function Navbar() {
  return (
    <div class="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark " >
        <div className="container-fluid d-flex space-between pb-2 pt-3 px-5">
          {/* <div className="text-center"> */}
            <a className="navbar-brand border border-success border-2 py-2 rounded-circle btn fw-light text-success" href="#"><span>AJ</span></a>
          {/* </div> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          {/* <div> */}
            {/* <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation"> */}
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item me-2">
                  <a className="nav-link fw-light text-light hover" href="#"><span className="text-success" >01. </span>About</a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link fw-light text-light hover" href="#"><span className="text-success" >02. </span> Experience</a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link fw-light text-light hover" href="#"> <span className="text-success" >03. </span> Work</a>
                </li>
                <li className="nav-item me-2">

                  <a className="nav-link fw-light text-light hover" href="#"><span className="text-success" >04. </span> Contact</a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link fw-light text-light hover" href="#"><span className="text-success" >05. </span> Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn  text-success border border-success rounded-pill" href="#"><span className="px-2">Resume</span></a>
                </li>
              </ul>
            </div>
          {/* </div> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar 