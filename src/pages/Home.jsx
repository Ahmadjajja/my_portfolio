import React from 'react'

function Home() {
  return (
    <div className="Home container-lg container-fluid-md  px-5">
      <div className="row">
        <div className="col">
          <div className="px-5 py-2">
            <p className='text-success fs-5 hello'>Hi, my name is</p>
            <h1 className='text-secondary mt-0 name'>Ahmad Jajja</h1>
            <h1 className='text-primary mt-1 whoIs'>An Engineer, Researcher and Mentor</h1>
            <p className='text-primary fs-5 mt-2'>
              A Techy with keen interest in Backend and  Infrastructure<br /> Engineering, WEB 3.0
              and Metaverse.An aspiring MERN <br /> Stack Engineer with a focus on Large Scale Systems.
            </p>
            <a className="btn btn-lg  text-success border border-success rounded-pill mt-5 mailBtn fw-light" href="mailto: ahmadjajja86@gmail.com"><span className="px-2">Get In Touch</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home