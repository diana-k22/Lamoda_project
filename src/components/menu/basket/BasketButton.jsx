import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BasketResult } from './basketResult';

export const StyledBasket = styled.div`
    .basket {
        font-size: 16px;
        border: none;
        background-color: #fff;
        cursor: pointer;
        color: #888888;

        :hover {
            transition: color .2s linear;
            color: black;
     
        }
    }

`

export const BasketButton = () => {
    const [showModal, setShowModal] = useState(false)
    const openModal = ()=> {
        setShowModal(!showModal)
    }
    return(
        <StyledBasket>
     
            <button onClick={openModal} className='basket'>Корзина</button>
            <BasketResult showModal={showModal} />
  
        </StyledBasket>
        
    )
}