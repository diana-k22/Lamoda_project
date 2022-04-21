import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => 
        <nav className='menu-wrapper'>
            
            <Link to='store-page' className='menu-link'>Женщинам</Link>
            <Link to='about-page' className='menu-link active-link'>Мужчинам</Link>
            <Link to='not-found-page' className='menu-link'>Детям</Link>
         
        </nav>
    

export default Menu;