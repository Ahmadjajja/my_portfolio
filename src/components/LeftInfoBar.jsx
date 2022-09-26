import React from 'react'
import { FiGithub , FiTwitter, FiLinkedin} from 'react-icons/fi'
import { FaFacebookF} from 'react-icons/fa'
function LeftInfoBar() {
  return (
    <div className='LeftInfoBar d-none flex-column d-lg-flex'>
      <a href="https://github.com/Ahmadjajja?tab=overview&from=2022-06-01&to=2022-06-30" className='text-white-50 fw-light fs-5 '><FiGithub className='iconHover'/></a>
      <a href="https://twitter.com/AhmadJajja786" className='text-white-50  fs-5 mt-3'><FiTwitter className='iconHover'/></a>
      <a href="https://www.linkedin.com/in/ahmad-jajja-ba8b34210/" className='text-white-50 fs-5 mt-3'><FiLinkedin className='iconHover'/></a>
      <a href="https://www.facebook.com/ahmad.jajja.9081/" className='text-white-50 fs-5 mt-3'><FaFacebookF className='iconHover'/></a>
      <div className="vl border-start border-2 border-primary"></div>
    </div>
  )
}

export default LeftInfoBar
