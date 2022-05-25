import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';



const Menu = () => 
        <StyledMenu >
            <NavLink to='store-page-for-women' className='menu-link'>Женщинам</NavLink> {/** NavLink - делает активную ссылку. Нужно добавить в css класс .active и накинуть стильки */}
            <NavLink to='store-page-for-man' className='menu-link active-link'>Мужчинам</NavLink>
            <NavLink to='store-page-for-children' className='menu-link'>Детям</NavLink> 
        </StyledMenu>
    

export default Menu;