import React from 'react'

function Work() {
  return (
    <div className='Work container-fluid container-lg py-5 px-4  px-md-5'>
      <div className="row px-0 px-lg-5">
        <div className="col">
          <div className='workHeading'>
            <h4 className="text-success d-inline morocoCountingFont">03. </h4>
            <h2 className="text-secondary d-inline">Some Things I’ve Built</h2>
            <div className="vl border-top border-2 border-primary d-inline-block"></div>
          </div>
        </div>
      </div>
      <div className="row px-0 px-lg-5 mt-5">
        <div className="col-12 col-md-6">
          <div className="work-box p-4">
            <a href="img/work-1.png" data-lightbox="gallery-mf">
              <div className="work-img ">
                <img src={require('../assets/Products/bank.png')} alt="Bank-App" className="img-fluid imgHover img" ></img>
              </div>
            </a>
            <div className="work-content ">
              <div className="row">
                <div className="col-sm-8">
                  <a href="" className="w-title text-decoration-none text-secondary h2 headingHover">Bank App</a>
                  <div className="w-more mt-1">
                    <span className="text-secondary">Web App Design & Development</span> <br />
                    <span className="w-date text-primary">A Web application build on React JS and Firebase</span>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="w-like">
                    <a href="https://jajja-bank-app.web.app/" target="_blank">
                      <i className="fa-solid fa-desktop hover"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-6">

        </div>
      </div>
    </div>
  )
}

export default Work
