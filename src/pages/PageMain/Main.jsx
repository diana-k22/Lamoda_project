import React from 'react';
import { Flex } from '../../components/styles/Flex.styled';
import { StyledMain } from './Main.styled';


const Main = () => {
    // fetch('https://api.product')
    //     .then((response) => {
    //         console.log(response)
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data.quote);
    //     });
    return (
        <StyledMain>
            <Flex>
                <div className='main-sale'>
                    <figure className='main-slider'>
                    <img className='main-slider__img' src="http://unsplash.it/150/200?random&amp;gravity=center" alt="img" />
                        <figcaption className='main-slider__text'>
                            <span className='main-slider__subtitle'>cкидки до 30%</span>
                            <span className='main-slider__title'> на новинки</span>
                        </figcaption>
                        <figcaption className='main-slider__text--bottom'>
                            <span className='main-section__subtitle'>Lorem ipsum dolor sit amet.</span>
                            <span className='main-section__title'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        </figcaption>
                    </figure>
                </div>

                <div className='main-content'>
                <figure className='main-section'>
                    <img className='main-section__img' src="http://unsplash.it/150/200?random&amp;gravity=center" alt="img" />
                        <figcaption className='main-section__text'>
                            <span className='main-section__subtitle'>Скидки до 30%</span>
                            <span className='main-section__title'> на новинки</span>
                        </figcaption>
                    </figure>

                    <figure className='main-section__bottom'>
                    <img className='main-section__img' src="http://unsplash.it/150/200?random&amp;gravity=center" alt="img" />
                        <figcaption className='main-section__text'>
                            <span className='main-section__subtitle'>Скидки до 30%</span>
                            <span className='main-section__title'> на новинки</span>
                        </figcaption>
                    </figure>
                </div>
            </Flex>
        </StyledMain>
    )
}

export default Main;