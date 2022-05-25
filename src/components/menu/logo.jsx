import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLogo } from './Logo.styled';



const Logo = () => {
    return(
        <StyledLogo>
            <Link to='/' className='logo-text'> DiShop</Link>
        </StyledLogo>
    )
}

export default Logo;    