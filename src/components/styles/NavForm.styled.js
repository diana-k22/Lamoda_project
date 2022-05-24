import styled from 'styled-components'

export const StyledNavForm = styled.div`

    .nav-input {
        padding: 0 151px 0 22px;
        height: 40px;
        border: none;
        background-color: rgb(245, 243, 243);
        outline: none;
        border-radius: 4px;

        &:hover {
            background-color: transparent;
            box-shadow: 0px 0px 6.5px 0px rgb(207, 204, 204);
            transition: .2s linear;
        }
    }

    .nav-input__btn {
        border-radius: 4px;
        cursor: pointer;
        border: none;
        background-color: #2796ff;
        padding: 10px 13px;

        &:hover {
            background-color: rgb(64, 64, 253);
        }
    }

    .input-btn__text {
        font-size: 16px;
        font-family: inherit;
        font-weight: 400;
        color: #fff;
    }

`