import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

        const [toggleModal, setToggleModal ] = useState(1);
    
        const toggleQualificationTab = (index) => {
            setToggleModal(index);
        }


    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qulaification</h2>
            <span className='section__subtitle'>
                My experinece
            </span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div 
                    className={toggleModal === 1 ? 
                    'qualification__button button--flex qualification__active' : 
                    'qualification__button button--flex'}
                    onClick={() => toggleQualificationTab(1)}>
                        <i className='uil uil-graduation-cap qualification__icon'></i>
                        Education
                    </div>

                    <div className={toggleModal === 2 ? 
                    'qualification__button button--flex qualification__active' : 
                    'qualification__button button--flex'}
                    onClick={() => toggleQualificationTab(2)}
                    >
                        <i className='uil uil-briefcase-alt qualification__icon'></i>
                        Experience
                    </div>
                </div>

                <div className='qualification__sections'>
                    <div className={toggleModal === 1 ?
                     'qualification__content qualification__content-active' :
                     'qualification__content'}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Web Design</h3>
                                <span className='qualification__subtitile'>Technical University of Berlin</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Art Director</h3>
                                <span className='qualification__subtitile'>Technical University of Berlin</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2024 - Present
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Web Deployment</h3>
                                <span className='qualification__subtitile'>Technical University of Berlin</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>UX/UI</h3>
                                <span className='qualification__subtitile'>Technical University of Berlin</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2024 - Present
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleModal === 2 ?
                     'qualification__content qualification__content-active' :
                     'qualification__content'}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Product Design</h3>
                                <span className='qualification__subtitile'>Zhogatronics - Nigeria</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>UX designer</h3>
                                <span className='qualification__subtitile'>Aken - Texas, USA</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2024 - Present
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Technical Support</h3>
                                <span className='qualification__subtitile'>ALx Africa</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>WArehousing</h3>
                                <span className='qualification__subtitile'>Berlin Berlin</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2024 - Present
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
