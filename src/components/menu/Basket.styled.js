import styled from 'styled-components';

export const StyledBasket = styled.div`

    .basket-register {
        border: none;
        background-color: #fff;
        font-size: 16px;
        color: #888;
        padding-right: 21px;
        margin-left: 95px;

        &:hover {
            transition: color .2s linear;
            color: var(--secondaryLabelColor);
            cursor: pointer;
        }
    }

    .basket-icon {
        cursor: pointer;
        color: #888;

        &:hover {
            color: var(--secondaryLabelColor);
            }
    }

    .basket {
        font-size: 16px;
        border: none;
        background-color: #fff;
        cursor: pointer;
    }

`