import React from "react";
import { StyledNavForm } from "./styles/NavForm.styled";

const NavForm = () => {
    return (
        <StyledNavForm >
            <form action="#">
                <input type="text" placeholder="Поиск" className="nav-input"/>
                <button className='nav-input__btn'>
                    <span className="input-btn__text">Найти</span>
                </button>
            </form>
        </StyledNavForm>
    )
}

export default NavForm;