import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'
import IMG2 from '../../assets/soon.jpg'
import DOS1 from '../../assets/dossier.pdf'


const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Hanasu : Speak In English',
    github: 'https://github.com/Plessixdavid',
    demo: 'https://github.com/Plessixdavid',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Coming soon',
    github: 'https://github.com/Plessixdavid',
    demo: 'https://github.com/Plessixdavid',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id, image, title, github, demo}) =>{
           return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
  
            <h3>{title}</h3>
  
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank' >Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio