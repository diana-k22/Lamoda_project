import React from "react";
import { Link } from "react-router-dom";
import '../App.scss'



const SwiperSlide = () => {
    return (
        <div className="swiper-wrapper container"> 
            <div className="swiper-slider">
                <Link to='/' className="swiper-slider__text">Главная</Link>
            </div>

            <div className="swiper-slider">
                <Link to='store-page' className="swiper-slider__text">Женщинам</Link>
            </div>
        </div>
    )
}

export default SwiperSlide;