import React from 'react'
import { FiGithub , FiTwitter, FiLinkedin, FiFacebook} from 'react-icons/fi'
import { FaFacebookF} from 'react-icons/fa'
function LeftInfoBar() {
  return (
    <div className='LeftInfoBar d-flex flex-column'>
      <a href="https://github.com/Ahmadjajja?tab=overview&from=2022-06-01&to=2022-06-30" className='text-white-50 iconHover fw-light fs-5 '><FiGithub/></a>
      <a href="https://twitter.com/AhmadJajja786" className='text-white-50 iconHover fs-5 mt-3'><FiTwitter/></a>
      <a href="https://www.linkedin.com/in/ahmad-jajja-ba8b34210/" className='text-white-50 iconHover fs-5 mt-3'><FiLinkedin/></a>
      <a href="https://www.facebook.com/ahmad.jajja.9081/" className='text-white-50 iconHover fs-5 mt-3'><FaFacebookF/></a>
      <div className="vl border-start border-2 border-secondary"></div>
    </div>
  )
}

export default LeftInfoBar
