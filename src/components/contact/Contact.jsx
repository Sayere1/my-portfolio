import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Get in touch</h2>
            <span className='section__subtitle'>Contact Me</span>

            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Talk to Me</h3>

                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i className='bx bx-mail-send contact__card-icon'></i>

                            <h3 className='contact__card-title'>Whatsapp</h3>
                            <span className='contact__card-data'>1234567890</span>

                            <a href="https://whatsapp.com" className='contact__button'>Message me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bx-mail-send contact__card-icon'></i>

                            <h3 className='contact__card-title'>Email</h3>
                            <span className='contact__card-data'>xxxxxx@gmail.com</span>

                            <a href="https://whatsapp.com" className='contact__button'>Message me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bxl-messenger contact__card-icon'></i>

                            <h3 className='contact__card-title'>Linkdeln</h3>
                            <span className='contact__card-data'>jahhggsttst@links</span>

                            <a href="https://whatsapp.com" className='contact__button'>Message me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='contact__content'>
                    <h3 className='contact__title'>Write me your project</h3>

                    <form className='contact__form'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Name</label>
                            <input type="text" name="name" id=""
                                className='contact__form-input'
                                placeholder='enter your name' />
                        </div>

                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Email</label>
                            <input type="email" name="email" id=""
                                className='contact__form-input'
                                placeholder='enter your email' />
                        </div>

                        <div className='contact__form-div contact__form-area '>
                            <label className='contact__form-tag '>Message</label>
                            <textarea name="message" cols="30" rows="10"
                            className='contact__form-input' 
                            placeholder='enter your message'
                            ></textarea>
                        </div>

                        <button className='button button--flex'>Send
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
