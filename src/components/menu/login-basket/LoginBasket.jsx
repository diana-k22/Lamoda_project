import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Login } from '../login/Login';
import { BasketButton } from '../basket/BasketButton';
import { StyledLoginBasket } from './LoginBasket.styled';
import { ButtonProfile } from '../../profile/ButtonProfile';



library.add( fab, fas, faHome, faMapMarker)

const LoginBasket = () => {
  


    return(

        <StyledLoginBasket>
            <Login/>
            <ButtonProfile/>
            {/* <FontAwesomeIcon icon="fa-solid fa-basket-shopping " className='basket-icon' /> */}
            <BasketButton /> 

        </StyledLoginBasket>

    )
};

export default LoginBasket;

