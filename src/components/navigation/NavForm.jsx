import React from "react";
import { StyledNavForm } from "./NavForm.styled";
import styled from 'styled-components'
import { Button } from '../../pages/PageNotFound/NotFoundPage.styled'


export const HeaderButton = styled(Button)`
    background-color: dodgerblue;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    padding: 12px 13px;
    margin: 0;

    &:hover {
        background-color: #2f87e9;
        color: white;
    }
`

export const Input = styled.input`
    padding: 0 151px 0 22px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: ${props => props.inputBackground || 'rgb(245, 243, 243);'}; // Здесь мы через пропсы прописываем inputBackground, чтобы обратиться можно было в компоненте по этому классу и передатть новое значение
    color: ${props => props.inputColor || "rgb(207 204 204)"};

    &:hover {
            background-color: transparent;
            box-shadow: 0px 0px 6.5px 0px rgb(207, 204, 204);
            transition: .2s linear;
        }
`

const NavForm = () => { 
    return (
        <StyledNavForm >
            <form action="#">
                <Input defaultValue="@probablyup"  type="text" placeholder="Поиск"/>
                {/* <Input defaultValue="@probablyup"  type="text" placeholder="Поиск" inputColor="rebeccapurple" inputBackground='grey'/>   Например с помощью ключевых классов мы можем менять цвет и тд не меняя стили инпута*/}
                <HeaderButton primary>Найти</HeaderButton>
            </form>
        </StyledNavForm>
    )
}

export default NavForm;