import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => 
        <nav className='menu-wrapper'>
            
            <NavLink to='store-page-for-women' className='menu-link'>Женщинам</NavLink> {/** NavLink - делает активную ссылку. Нужно добавить в css класс .active и накинуть стильки */}
            <NavLink to='store-page-for-man' className='menu-link active-link'>Мужчинам</NavLink>
            <NavLink to='store-page-for-children' className='menu-link'>Детям</NavLink>
         
        </nav>
    

export default Menu;