import React from "react";

const Navigation = () => {
    return(
        <div className="navigation-wrapper">
            <nav className="navigation-item">
                <a href="#" className="navigation-link__first">Идеи</a>
                <a href="#" className="navigation-link">Новинки</a>
                <a href="#" className="navigation-link">Одежда</a>
                <a href="#" className="navigation-link">Обувь</a>
                <a href="#" className="navigation-link">Аксессуары</a>
                <a href="#" className="navigation-link">Бренды</a>
                <a href="#" className="navigation-link">Premium</a>
                <a href="#" className="navigation-link">Спорт</a>
                <a href="#" className="navigation-link">Красота</a>
                <a href="#" className="navigation-link">Дом</a>
                <a href="#" className="navigation-link__red">Sale%</a>
            </nav>
        </div>
    )
}

export default Navigation;