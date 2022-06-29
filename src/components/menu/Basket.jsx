import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { StyledBasket } from './Basket.styled';


library.add( fab, fas, faHome, faMapMarker)


const Basket = () => {

const [govno, setGovno] = useState(0)
const clickGovno = () => {
    setGovno(govno - 1)
}    

    return(
        <StyledBasket>
            <button className='basket-register'>Войти {govno}</button>
            <FontAwesomeIcon icon="fa-solid fa-basket-shopping" className='basket-icon' />
            <button onClick={clickGovno} className='basket'>Корзина</button>
        </StyledBasket>
    )
};

export default Basket;