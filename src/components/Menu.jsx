import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='menu-wrapper'>
            
            <Link to='storepage' className='menu-link'>Женщинам</Link>
            <Link to='aboutpage' className='menu-link active-link'>Мужчинам</Link>
            <Link to='notfoundpage' className='menu-link'>Детям</Link>
         
        </nav>
    )
}

export default Menu;