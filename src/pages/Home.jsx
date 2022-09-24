import React from 'react'

function Home() {
  return (
    <div className="Home container-lg container-fluid mt-3  px-5">
      <div className="row">
        <div className="col">
          <div className="px-0 px-lg-5 mt-1">
            <p className='text-success fs-5 hello '>Hi, &nbsp; my &nbsp; name &nbsp; is</p>
            <h1 className='text-secondary name'>Ahmad Jajja</h1>
            <h1 className='text-primary whoIs mt-1'>An Engineer, Researcher and Mentor</h1>
            <p className='text-primary fs-5 mt-1'>
              A Techy with keen interest in Backend Engineering, <br />WEB 3.0  
              and Metaverse.An aspiring MERN  Stack <br /> Software Engineer with a focus on Large Scale Systems.
            </p>
            <a className="btn btn-lg  text-success border border-success rounded-pill mt-5 mailBtn fw-light" href="mailto: ahmadjajja86@gmail.com"><span className="px-2">Get In Touch</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home