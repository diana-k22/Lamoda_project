import React from "react";
import { Flex } from "../../components/styles/Flex.styled";
import { StyledContent } from "./Content.styled";



const Content = () => {
  return (
    <StyledContent className='content'>
      <Flex>
        <div>
          <figure className='main-section'>
            <img
              className='main-section__img'
              src="https://www.babyshop.com/images/1041625/card_medium.jpg"
              alt="img"/>
            <figcaption className='main-section__text'>
              <span className='main-section__subtitle'>Скидки до 30%</span>
              <span className='main-section__title'>
                на новинки</span>
            </figcaption>
          </figure>

          <figure className='main-section__bottom'>
            <img
              className='main-section__img'
              src="https://ae01.alicdn.com/kf/H7066868aa70640c3b0bd569ddb3fde54i.jpg_.webp"
              alt="img"/>
            <figcaption className='main-section__text'>
              <span className='main-section__subtitle'>Скидки до 30%</span>
              <span className='main-section__title'>
                на новинки</span>
            </figcaption>
          </figure>
        </div>

        <div className='main-sale__content'>
          <figure className='main-slider'>
            <img
              className='main-slider__img'
              src="https://i.etsystatic.com/15150209/r/il/53fd6c/1629671205/il_fullxfull.1629671205_8wre.jpg"
              alt="img"/>
            <figcaption className='main-slider__text'>
              <span className='main-slider__subtitle'>cкидки до 30%</span>
              <span className='main-slider__title'>
                на новинки</span>
            </figcaption>
            <figcaption className='main-slider__text--bottom'>
              <span className='main-section__subtitle'>Lorem ipsum dolor sit amet.</span>
              <span className='main-section__title'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </figcaption>

          </figure>
        </div>
      </Flex>
      
    </StyledContent>
  )
}

export default Content;