import React from 'react'
import './scrollup.css'

const ScrollUp = () => {

    window.addEventListener("scroll", function () {

        //functionality for the scroll up, when viewport is grather than 560
        const scrollUp = document.querySelector(".scrollup");

        if (this.scrollY  >= 560) scrollUp.classList.add("show-scroll");

        else scrollUp.classList.remove("show-scroll");
    })

  return (
    <a href="#" className='scrollup'>
        <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}

export default ScrollUp
