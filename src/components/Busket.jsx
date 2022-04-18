import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add( fab, fas, faHome, faMapMarker)

const Busket = () => {
    return(
        <div className="busket-wrapper">
            <button className='busket-register'>Войти</button>

            <FontAwesomeIcon icon="fa-solid fa-basket-shopping" className='busket-icon' />
            <button className='busket'>Корзина</button>
        </div>
    )
}

export default Busket;