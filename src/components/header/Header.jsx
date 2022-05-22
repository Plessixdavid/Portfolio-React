import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import Headersocials from './Headersocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>David Plessix</h1>
        <h5 className="text-light"> Web Developer</h5>
        <CTA/>
        <Headersocials/>

        <div className="me">
          <img src={ME} alt="Cartoon Developer" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      
      </div>
    </header>
  )
}

export default Header