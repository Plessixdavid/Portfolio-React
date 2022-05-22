import React from 'react'
import './footer.css'
import Footersocials from './Footersocials'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>David Plessix</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#">Home</a></li>
      </ul>
      <div className="footer__socials">
      <Footersocials/>
      </div>
      <div className="footer__copyright">
        <small>&copy; David Plessix. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer