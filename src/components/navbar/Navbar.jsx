import React from 'react'

function Navbar() {
  return (
    <div class="Navbar">
      <nav class="navbar navbar-expand-lg navbar-dark " >
        <div class="container-fluid d-flex space-between py-2">
          <div>
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
          <div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse  navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#"><span class="mainColor" style={{color: "#87F2A5"}}>01. </span>About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><span class="mainColor" style={{color: "#87F2A5"}}>02. </span> Experience</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> <span class="mainColor" style={{color: "#87F2A5"}}>03. </span> Work</a>
                </li>
                <li class="nav-item">
                  
                  <a class="nav-link" href="#"><span class="mainColor" style={{color: "#87F2A5"}}>04. </span> Contact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><span class="mainColor" style={{color: "#87F2A5"}}>05. </span> Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar 