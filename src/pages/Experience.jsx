import React from 'react'

function Experience() {
  return (
    <div className="Experience container-fluid container-lg py-5 px-4  px-md-5">
      <div className="row px-0 px-lg-5 mx-lg-5 mx-md-0">
        <div className="col">
          <div className='experienceHeading'>
            <h4 className="text-success d-inline morocoCountingFont">02. </h4>
            <h2 className="text-secondary d-inline">Where I’ve Worked</h2>
            <div className="vl border-top border-2 border-primary d-inline-block"></div>
          </div>
        </div>
      </div>
      <div className="row px-0 px-lg-5 mx-lg-5 mx-md-0 my-5">
        <div className="col-2">
          <p className='text-success py-2 border-start border-2 border-success px-2'>SEERAHT</p>
        </div>
        <div className="col-10">
          <p className='text-secondary my-2 h5'>MERN Stack Engineer <a href="https://seeraht.com/" className='text-success text-decoration-none A'>@ <span className='hover'>SEERAHT</span></a> </p>
          <p className='text-primary'>June - August 2022</p>
          <p className='mt-4 text-primary'><i class="fa-solid fa-caret-right text-success"></i> &nbsp; Worked on social real-estate system Web & Mobile App for purchasing and selling properties</p> 
          <p className='mt-4 text-primary'><i class="fa-solid fa-caret-right text-success"></i> &nbsp; Worked on BANK-WEB-APP related to ATM Card Functionalities.</p> 
          <p className='mt-4 text-primary'><i class="fa-solid fa-caret-right text-success"></i> &nbsp; Built a Boosten-Academy-Dashboard-system for managing attandance and result of students.</p>
        </div>
      </div>
    </div>
  )
}

export default Experience