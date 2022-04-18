import React from 'react';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add( fab, fas, faHome, faMapMarker)



const Header = () => {
    return (
        
        <div className='header-wrapper'>
            <div className='header container'>
                <div className='header-delivery'>
                    <span className='header-delivery__text'>Укажите регион доставки</span>
                    <FontAwesomeIcon icon="fa-solid fa-angle-down" className='icon'/>
                </div>
                <div className="header-link">
                    <a href="#" className='header-link__item'>
                        <FontAwesomeIcon icon="fa-solid fa-mask-face" className='icon'/>
                        <span className='header-link__text'>Бесконтактная доставка с примеркой</span>
                        <div className='header-modal__none'>
                            <p className='modal-text'>Lorem ipsum dolor sit amet consectetur.</p>
                            <p className='modal-text_h'>Подробнее</p>
                        </div>
                    </a>
                    <a href="#" className='header-link__item'>
                        <FontAwesomeIcon icon="fa-solid fa-credit-card" className='icon' />
                        <span className='header-link__text'>Платите когда хотите</span>
                        <div className='header-modal__none'>
                            <p className='modal-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam cum in assumenda velit blanditiis.</p>
                            <p className='modal-text_h'>Подробнее</p>
                        </div>
                    </a>
                    <a href="#" className='header-link__item'>
                    <FontAwesomeIcon icon="fa-solid fa-clock"className='icon' />
                        <span className='header-link__text'>Как мы работаем сейчас</span>
                        <div className='header-modal__none'>
                            <p className='modal-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ducimus?</p>
                            <p className='modal-text_h'>Подробнее</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;