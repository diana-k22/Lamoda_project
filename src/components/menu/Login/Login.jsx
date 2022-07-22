import {Link} from 'react-router-dom'
import styled from 'styled-components';

const StyledLogin = styled.div`

.basket__login {
    border: none;
    background-color: #fff;
    font-size: 16px;
    color: #888;
    padding-right: 21px;
    margin-left: 95px;

    :hover {
        color: black;
        cursor: pointer;
        transition: color .2s linear;
    }
}
` 

export const Login = () => {
    return(
        <Link to='/signin'>
            <StyledLogin>
                <button  className='basket__login'>Войти</button>
            </StyledLogin>
        </Link>
    )
}