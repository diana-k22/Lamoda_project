import React from "react";
import { Link } from "react-router-dom";
import '../../App'
import { StyledSwiperSlide } from "./SwiperSlide.styled";



const SwiperSlide = () => {
    return (
         <StyledSwiperSlide>
        
                <div className="swiper-wrapper"> 
                    <div className="swiper-slider">
                        <Link to='/' className="swiper-slider__text">Главная</Link>
                    </div>

                    <div className="swiper-slider">
                        <Link to='store-page' className="swiper-slider__text">Женщинам</Link>
                    </div>
                </div>
        
         </StyledSwiperSlide>
    )
}

export default SwiperSlide;