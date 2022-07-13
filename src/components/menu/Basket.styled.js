import styled from 'styled-components';

export const StyledBasket = styled.div`
    display: flex;
    align-items: center;


    .basket-icon {
        cursor: pointer;
        color: #888;

        &:hover {
            color: #1789dc;
            }
    }

    .basket {
        font-size: 16px;
        border: none;
        background-color: #fff;
        cursor: pointer;

        :hover {
            transition: color .2s linear;
            color: #1789dc;
     
        }
    }

`