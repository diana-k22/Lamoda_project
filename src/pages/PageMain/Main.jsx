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
                    <img className='main-slider__img' src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png" alt="img" />
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
                    <img className='main-section__img' src="https://i.etsystatic.com/15150209/c/1365/1083/0/510/il/67b3c2/1582245462/il_340x270.1582245462_1jh5.jpg" alt="img" />
                        <figcaption className='main-section__text'>
                            <span className='main-section__subtitle'>Скидки до 30%</span>
                            <span className='main-section__title'> на новинки</span>
                        </figcaption>
                    </figure>

                    <figure className='main-section__bottom'>
                    <img className='main-section__img' src="https://ae01.alicdn.com/kf/Hfa1983a951f84d42b3c7a89f6f46580dK.jpg_.webp" alt="img" />
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