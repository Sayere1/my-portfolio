import React, { useState } from 'react'
import './header.css'
import { assets } from '../../assets/assets';

const Header = () => {

    window.addEventListener("scroll", function () {

        //functionality for the scroll up, when viewport is grather than 560
        const header = document.querySelector(".header");

        if (this.scrollY >= 80) header.classList.add("scroll-header");

        else header.classList.remove("scroll-header");
    })


    // set the nav toggle

    const [toggle, setToggle] = useState(false);

    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className='nav__logo'>Osayemwenre</a>

                <div className={toggle ? 'nav__menu show-menu' : "nav__menu"}>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a href="#home" onClick={() => setActiveNav("#home")}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <img src={assets.Home1} alt="" className='nav__icon' />Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#about" onClick={() => setActiveNav("#about")}
                                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <img src={assets.About1} alt="" className='nav__icon' />About
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#skill" onClick={() => setActiveNav("#skill")}
                                className={activeNav === "#skill" ? "nav__link active-link" : "nav__link"}>
                                <img src={assets.Skill1} alt="" className='nav__icon' />Skill
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#service" onClick={() => setActiveNav("#service")}
                                className={activeNav === "#service" ? "nav__link active-link" : "nav__link"}>
                                <i className='uil uil-briefcase-alt nav__icon'></i>Service
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <img src={assets.Port1} alt="" className='nav__icon' />Portfolio
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#contact" onClick={() => setActiveNav("#contact")}
                                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <img src={assets.Contact1} alt="" className='nav__icon' />Contact
                            </a>
                        </li>
                    </ul>

                    <i class='uil uil-times nav__close' onClick={() => setToggle(!toggle)}></i>
                </div>

                <div className='nav__toggle' onClick={() => setToggle(!toggle)}>
                    <i class='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
