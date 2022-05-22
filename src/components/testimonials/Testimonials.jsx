import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/alain.jpg'
import AVT2 from '../../assets/jeanlouis.jpg'
import AVT3 from '../../assets/zack.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar : AVT1,
    name : "Alain Micalaudie",
    review :"Durant ces 7 mois, et sans aucune connaissance préalable dans le domaine, David a su s'adapter afin d'acquérir des connaissances variées. Il possède donc aujourd'hui de bonnes bases en tant que développeur web (front et back) sur Python/Django, ainsi qu'en base de données, en gestion de projet Agile et en travail seul ou en équipe.",
  },
  {
    avatar : AVT2,
    name : "Jean-Louis Velot",
    review :"Même dans les situations difficiles David a su mettre en place des solutions!",
  },
  {
    avatar : AVT3,
    name : "Zackaria Moustaine",
    review :"Extrêmement efficace ! C’est le terme qui me vient à l’esprit pour décrire David !J’ai eu le plaisir de travailler avec David pendant 6 mois, nous avons collaboré sur plusieurs projets d’envergure. N’importe quel employeur serait content de l'avoir c'est un peu le macgyver du digital : youtube, twitter, Cinéma 4D (modélisation 3D), création de site web rien ne lui résiste, un professionnel avec qui il est agréable de travailler qui possède un sens du relationnel tout simplement hors norme !",
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Linkedin</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="{name}" />
              </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials