import React from 'react'

function Work() {
  return (
    <div className='Work container-fluid container-lg py-5 px-4  px-md-5'>
      <div className="row px-0 px-lg-5">
        <div className="col">
          <div className='workHeading'>
            <h4 className="text-success d-inline morocoCountingFont">03. </h4>
            <h2 className="text-secondary d-inline">Some Things I’ve Built</h2>
            <div className="vl border-top border-2 border-primary d-none d-md-inline-block"></div>
          </div>
        </div>
      </div>
      <div className="row mt-4 px-0 px-lg-5">
        <div className="col d-flex flex-column align-items-center">
          <p className=" text-primary mb-0">Due to the client's policy. I can't show all of the projects that I've done.</p>
          {/* <div className=' d-flex justify-content-center border-top border-1 border-success w-25'></div> */}
        </div>
      </div>
      <div className="row px-0 px-lg-5 mt-3 ">
        <div className="col-12 col-md-6">
          <div className="work-box p-4">
            <a href="https://res.cloudinary.com/jajja-group-of-company/image/upload/v1664099233/vtudnrorpqpmdysntg2w.png" target="_blank" data-lightbox="gallery-mf">
              <div className="work-img ">
                <img src={require('../assets/Products/bank.png')} alt="Bank-App" className="img-fluid imgHover img" ></img>
              </div>
            </a>
            <div className="work-content ">
              <div className="row">
                <div className="col-sm-8">
                  <a href="https://github.com/Ahmadjajja/React_Bank.git" target="_blank" className="w-title text-decoration-none text-secondary h2 headingHover">Bank App</a>
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
        <div className="col col-md-6 ">
          <div className="work-box px-4 p-md-4">
            <a href="https://res.cloudinary.com/jajja-group-of-company/image/upload/v1664099382/rrazwuiwmxsnbskb1mgo.jpg" target="_blank" data-lightbox="gallery-mf">
              <div className="work-img ">
                <img src="https://res.cloudinary.com/jajja-group-of-company/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664099382/rrazwuiwmxsnbskb1mgo.jpg" alt="Bank-App" className="img-fluid imgHover img" ></img>
              </div>
            </a>
            <div className="work-content ">
              <div className="row">
                <div className="col-sm-8">
                  <a href="https://github.com/Ahmadjajja/Hackathon_Frontend_2022_Batch_04.git" target="_blank" className="w-title text-decoration-none text-secondary h2 headingHover">Real-Estate App</a>
                  <div className="w-more mt-1">
                    <span className="text-secondary">Mobile App Design & Development</span> <br />
                    <span className="w-date text-primary">A Web application build on React Native , Node JS and Mongodb</span>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="w-like">
                    <a href="https://drive.google.com/file/d/1X9nJ-RQF8Woh1Ff0biS2vmbJdwE-OkgV/view" target="_blank">
                      <i className="fa-solid fa-desktop hover"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
