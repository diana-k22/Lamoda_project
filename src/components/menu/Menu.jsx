import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';


const Menu = () => {
    
const [activeClass, setActiveClass] = useState(false)
const clickActive = () => {
    setActiveClass(false)
}
const clickInActive = () => {
    setActiveClass(true)
}
    return(
    <StyledMenu >
        <NavLink onClick={clickInActive} to='store-page-for-women' className={activeClass ? 'active-menu-link' : 'menu-link'} >Женщинам</NavLink> {/** NavLink - делает активную ссылку. Нужно добавить в css класс .active и накинуть стильки */}
        <NavLink onClick={clickActive} to='store-page-for-man' className={({isActive}) => (isActive ? 'active-menu-link' : 'menu-link')}>Мужчинам</NavLink>
        <NavLink onClick={clickActive} to='store-page-for-children' className={({isActive}) => (isActive ? 'active-menu-link' : 'menu-link')}>Детям</NavLink> 
    </StyledMenu>
    )
}
    
    

export default Menu;