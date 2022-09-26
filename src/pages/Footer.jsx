import React from 'react'
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
function Footer() {
  return (
    <div className='Footer container pt-5 pb-3 d-block d-lg-none'>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <a href="https://github.com/Ahmadjajja?tab=overview&from=2022-06-01&to=2022-06-30" className='text-primary fw-light fs-5 m-4'><FiGithub className='iconHover'/></a>
          <a href="https://twitter.com/AhmadJajja786" className='text-primary fs-5 m-4'><FiTwitter className='iconHover'/></a>
          <a href="https://www.linkedin.com/in/ahmad-jajja-ba8b34210/" className='text-primary fs-5 m-4'><FiLinkedin className='iconHover'/></a>
          <a href="https://www.facebook.com/ahmad.jajja.9081/" className='text-primary fs-5 m-4'><FaFacebookF className='iconHover'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
