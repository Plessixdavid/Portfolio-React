import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 1 Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> 1 </small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small> 10+ completed</small>
            </article>
          </div>

          <p>
          Développeur Web et Web Mobile, Python, HTML, CSS, PostgreSQL, JavaScript, React.
          <br />
          "Les gens pensent que l'innovation c'est d'avoir une bonne idée, mais l'innovation consiste en grande partie à agir rapidement et à essayer beaucoup de choses."
          <br />
          citation de : <strong>"Mark Zuckerberg"</strong>
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about