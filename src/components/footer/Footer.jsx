import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas, faHome, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {StyledFooter} from './Footer.styled';
import {Container} from '../styles/Container.styled';
import {Flex} from '../styles/Flex.styled'

library.add(fab, fas, faHome, faMapMarker)

const Footer = () => {
  return (
    <StyledFooter>
      <Container>

        <div className='footer'>
          <div className='footer-item'>
            <span className='footer-title'>Помощь</span>
            <a href="#" className='footer-link'>Lorem ipsum dolor.</a>
            <a href="#" className='footer-link'>Lorem ipsum dolor.</a>
            <a href="#" className='footer-link'>Lorem ipsum dolor sit.</a>
            <a href="#" className='footer-link'>Lorem ipsum dolor.</a>
            <a href="#" className='footer-link'>Lorem ipsum.</a>
            <a href="#" className='footer-link'>Lorem ipsum.</a>
            <a href="#" className='footer-link'>Lorem.</a>
            <a href="#" className='footer-link'>Lorem ipsum.</a>
            <a href="#" className='footer-link'>Lorem ipsum.</a>
            <a href="#" className='footer-link'>Lorem ipsum dolor.</a>
            <a href="#" className='footer-link'>Lorem ipsum dolor sit.</a>
            <a href="#" className='footer-link'>Lorem ipsum dolor sit.</a>
          </div>

          <div className='footer-item'>
            <span className='footer-title'>О нас</span>
            <div className='footer-icon'>
              <FontAwesomeIcon icon="fa-brands fa-vk" className='footer-icon__img'/>
              <FontAwesomeIcon icon="fa-brands fa-youtube" className='footer-icon__img'/>
            </div>
            <div className='footer-item__link'>
              <a href="#" className='footer-link'>Lorem ipsum dolor sit amet.</a>
              <a href="#" className='footer-link'>Lorem ipsum dolor sit.</a>
              <a href="#" className='footer-link'>Lorem, ipsum dolor.</a>
              <a href="#" className='footer-link'>Lorem ipsum.</a>
              <span className='footer-link__subtitle'>Lorem</span>
              <a href="#" className='footer-link'>Lorem ipsum dolor.</a>
              <a href="#" className='footer-link'>Lorem ipsum dolor sit.</a>
              <a href="#" className='footer-link'>Lorem, ipsum dolor.</a>
              <a href="#" className='footer-link'>Lorem ipsum.</a>
            </div>
          </div>

          <div className='footer-item'>
            <span className='footer-title'>Cпособы оплаты</span>
            <div className='footer-icon'>
              <FontAwesomeIcon
                icon="fa-brands fa-cc-mastercard"
                className='footer-icon__card'/>
              <FontAwesomeIcon icon="fa-brands fa-cc-visa" className='footer-icon__card'/>
              <FontAwesomeIcon icon="fa-brands fa-cc-jcb" className='footer-icon__card'/>
            </div>
            <a className='footer-card__text'>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorem a possimus, impedit perferendis</a>

          </div>

          <div className='footer-item'>
            <span className='footer-title'>Для мобильных устройств</span>
            <div className='footer-pay'>
              <FontAwesomeIcon icon="fa-brands fa-google-pay" className='footer-icon__pay'/>
              <FontAwesomeIcon icon="fa-brands fa-apple-pay" className='footer-icon__pay'/>
              <FontAwesomeIcon icon="fa-brands fa-apper" className='footer-icon__pay'/>
            </div>
            <a className='footer-card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.</a>

          </div>
        </div>
      </Container>
    </StyledFooter>

  )
}

export default Footer;