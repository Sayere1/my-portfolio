import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i class='bx bx-award about__icon' />
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitile'>5years of working</span>
      </div>

            <div className='about__box'>
                <i class='bx bx-briefcase-alt about__icon' />
        <h3 className='about__title'>Compleyted</h3>
        <span className='about__subtitile'>10 project</span>
      </div>

            <div className='about__box'>
                <i class='bx bx-support about__icon'/>
        <h3 className='about__title'>Support</h3>
        <span className='about__subtitile'>24 hours online</span>
      </div>

                  <div className='about__box'>
                <i class='bx bx-support about__icon'/>
        <h3 className='about__title'>Support</h3>
        <span className='about__subtitile'>24 hours online</span>
      </div>
    </div>
  )
}

export default Info
