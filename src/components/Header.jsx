import React from 'react';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add( fab, fas, faHome, faMapMarker)



const Header = () => {
    return (
        
        <div className='header_wrapper'>
            <div className='header container'>
                <div className='header_delivery'>
                    <span className='header_delivery__text'>Укажите регион доставки</span>
                    <FontAwesomeIcon icon="fa-solid fa-angle-down" className='Icon'/>
                </div>
                <div className="header_link">
                    <a href="#" className='header_link__hover'>
                        <FontAwesomeIcon icon="fa-solid fa-mask-face" className='Icon'/>
                        <span className='header_link__text'>Бесконтактная доставка с примеркой</span>
                        <div className='header_modal__none'>
                            <p className='modal_text'>Lorem ipsum dolor sit amet consectetur.</p>
                            <p className='modal_text_h'>Подробнее</p>
                        </div>
                    </a>
                    <a href="#" className='header_link__hover'>
                        <FontAwesomeIcon icon="fa-solid fa-credit-card" className='Icon' />
                        <span className='header_link__text'>Платите когда хотите</span>
                        <div className='header_modal__none'>
                            <p className='modal_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam cum in assumenda velit blanditiis.</p>
                            <p className='modal_text_h'>Подробнее</p>
                        </div>
                    </a>
                    <a href="#" className='header_link__hover'>
                    <FontAwesomeIcon icon="fa-solid fa-clock"className='Icon' />
                        <span className='header_link__text'>Как мы работаем сейчас</span>
                        <div className='header_modal__none'>
                            <p className='modal_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ducimus?</p>
                            <p className='modal_text_h'>Подробнее</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;