import React from 'react'
import './about.css'
import Info from './Info'
import CV from "../../assets/osa_cv.pdf";
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <section className='about section' id='about'>
       <h2 className='section__title'>About Me</h2>
       <span className='section__subtitle'>My Introduction</span>

       <div className='about__container container grid'>
        <img src={assets.AboutImg} alt="" className='about__img' />

        <div className='about__data'>
          <Info />

          <p className='about__description'>dumy dummy create one yourself dumy dummy create one yourself dumy dummy create one yourself
            dumy dummy create one yourselfdumy dummy create one yourself
          </p>

          <a download='' href={CV} className='button button-flex'>Download CV
            <img src="" alt="" />
          </a>
        </div>
       </div>
    </section>
  )
}

export default About
