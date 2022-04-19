import React from "react";

const NavForm = () => {
    return (
        <div className="form-wrapper">
            <form action="#">
                <input type="text" placeholder="Поиск" className="nav-input"/>
                <button className='nav-input__btn'>
                <span className="input-btn__text">Найти</span>
            </button>
            </form>

        </div>
    )
}

export default NavForm;