import React from "react";

function Home() {
  return (
    <div className="Home container-lg container-fluid mt-3 px-4  px-md-5">
      <div className="row">
        <div className="col-lg-9">
          <div className="px-0 px-lg-5 mt-1">
            <p className="text-success fs-5 hello font-monospace">
              Hi, my name is
            </p>
            <h1 className="text-secondary name">Ahmad Jajja</h1>
            <h1 className="text-primary whoIs mt-1">
              An Engineer, Researcher and Mentor
            </h1>
            <p className="text-primary fs-5 mt-1">
              A Techy with keen interest in Backend Engineering, <br />
              An aspiring MERN Stack Software Engineer with a focus on Large
              Scale Systems.
            </p>
            <a
              className="btn btn-lg  text-success border border-success rounded-pill mt-5 mailBtn fw-light"
              href="mailto: ahmadjajja86@gmail.com"
            >
              <span className="px-2">Get In Touch</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col pe-5">
          <div className="text-white">
            <h1 className="text-center py-3">Certification</h1>
            <img
              src={require("../assets/certificate.jpeg")}
              alt="Ahmad"
              className=" img image-fluid w-100 pt-5" 
            />
          </div>
        </div>
      </div>
      {/* <div className="row">
      <div className='text-white'>Ahmad</div>
      </div> */}
    </div>
  );
}

export default Home;
