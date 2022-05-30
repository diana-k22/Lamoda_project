import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { StyledBasket } from './Basket.styled';


library.add( fab, fas, faHome, faMapMarker)



const Basket = () => {
    return(
        <StyledBasket>
            <button className='basket-register'>Войти</button>
            <FontAwesomeIcon icon="fa-solid fa-basket-shopping" className='basket-icon' />
            <button className='basket'>Корзина</button>
        </StyledBasket>
    )
};

export default Basket;