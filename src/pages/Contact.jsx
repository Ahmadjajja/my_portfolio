import React from 'react'

function Contact() {
  return (
    <div className="Contact container pb-5" id="contact">
      <div className="row">
        <div className="col d-flex flex-column align-items-center">
            <p className="text-success morocoCountingFont"><span>04. </span> What’s Next?</p>
            <h1 className="text-secondary secondHeading">Get In Touch</h1>
            <p className='text-primary mx-4 mx-sm-5 px-0 px-sm-5 paragraph-description text-center'>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <a className="btn btn-lg  text-success border border-success rounded-pill mt-5 mailBtn fw-light" href="mailto: ahmadjajja86@gmail.com"><span className="px-2">Say Hello</span></a>
        </div>
      </div>
    </div>  
  )
}

export default Contact
