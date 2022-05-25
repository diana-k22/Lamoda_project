import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas, faHome, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas, faHome, faMapMarker)

export const HeaderLinkItem = ({headerLinkText, modalText, iconClass}) => {
  return (

    <a href="#" className='header-link__item'>
      <FontAwesomeIcon icon={'fa-solid ' + iconClass } className='icon'/>
      <span className='header-link__text'>{headerLinkText}</span>
      <div className='header-modal__none'>
        <p className='modal-text'>{modalText}</p>
        <p className='modal-text_h'>Подробнее</p>
      </div>
    </a>
  )
}
