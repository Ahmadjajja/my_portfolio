import React from 'react'
function About() {
  return (
    <div className="About container-fluid container-lg py-5 px-4  px-md-5 " id="about">
      <div className='row px-0 px-lg-5'> 
        <div className="col ">
          <div className='aboutHeading'>
            <h4 className="text-success d-inline morocoCountingFont">01. </h4>
            <h2 className="text-secondary d-inline">About Me</h2>
            <div className="vl border-top border-2 border-primary d-inline-block"></div>
          </div>
        </div>
      </div>
      <div className='row mt-5 px-0 px-lg-5 '>
        <div className="col-12 col-md-6 col-lg-8 pb-5">
          <p className="text-primary pe-0 pe-md-5">
            Hello! I'm Ahmad, currently working as a MERN Stack Software Developer based in Faisalabad, PK. <br/> <br/>

            I build things on the internet and love building large scale applications with system design in mind. I have worked in teams and also individually as a freelancer and got valuable learning experiences.
             {/* Currently, I am expanding my knowledge in WEB 3.0 and Metaverse so that I will be part of this new ERA.  */}
             I Love to teach Computer Science concepts.

            I m still studying in my undergraduate degree at <a href="http://web.uaf.edu.pk/" className='text-success text-decoration-none hover'>University Of Agriculture Faisalabad</a> , I have worked in <a href="https://seeraht.com/" className='text-success text-decoration-none hover'>SEERAHT</a> as a MERN Stack Developer.
            <br/> <br/>
            Here is a TECH-STACK I've been working with recently:
          </p>
          <div className="row">
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; C Language</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; C++ (OOP + DSA)</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; Dart</div>
          </div>
          <div className="row mt-2">
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; HTML5</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; CSS3,SCSS</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; Bootstrap 5</div>
          </div>
          <div className="row mt-2">
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; Javascript (ES6+)</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; Typescript</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; React JS</div>
          </div>
          <div className="row mt-2">
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; React Native</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; Firebase</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; FireStore</div>
          </div>
          <div className="row mt-2">
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; Node JS</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; Express Js</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp; Mongodb</div>
          </div>
          <div className="row mt-2">
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp;GraphQL</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp;Git</div>
            <div className="col text-primary"> <i class="fa-solid fa-caret-right text-success"></i> &nbsp;Github</div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 px-5 pb-5">        
          <div className="rounded mt-3 mx-sm-5 mx-md-0 ">
            <img src={require('../assets/professionalImage.jpg')} alt="Ahmad" className='img image-fluid selfImage' />
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default About