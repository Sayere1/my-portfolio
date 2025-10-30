import React from 'react'
import './skills.css'
import Backend from './Backend'
import Frontend from './Frontend'
import Support from './Support'

const Skills = () => {
  return (
<section className='skills section' id='skill'>
           <h2 className='section__title'>My Skills</h2>
       <span className='section__subtitle'>My Technical Level</span>

       <div className='skills__container container grid'>
        <Frontend />
        <Backend />
        <Support />
       </div>

</section>
  )
}

export default Skills
