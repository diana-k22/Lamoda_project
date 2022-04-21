import React from 'react';
import ReactDOM from 'react-dom'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas, faHome, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {HeaderLinkItem} from './HeaderLinkItem';

library.add(fab, fas, faHome, faMapMarker)

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='header container'>
        <div className='header-delivery'>
          <span className='header-delivery__text'>Укажите регион доставки</span>
          <FontAwesomeIcon icon="fa-solid fa-angle-down" className='icon'/>
          <div className='header-modal__none'>
            <p className='modal-text'>Lorem ipsum dolor sit amet consectetur.</p>
            <p className='modal-text_h'>Подробнее</p>
          </div>
        </div>

        <div className="header-link"> {/**Передали в компонент текст и иконки с помощью props*/}
          <HeaderLinkItem
            headerLinkText='Бесконтактная доставка с примеркой'
            iconClass = 'fa-mask-face'
            modalText="Lorem ipsum dolor sit amet consectetur"/>

          <HeaderLinkItem
            headerLinkText='Платите когда хотите'
            iconClass = 'fa-credit-card'
            modalText='Lorem ipsum dolor sit amet consectetur'/>

          <HeaderLinkItem
            headerLinkText='Как мы работаем сейчас'
            iconClass = 'fa-clock'
            modalText='Lorem ipsum dolor sit amet consectetur'/>

        </div>
      </div>
    </div>
  )
}

export default Header;