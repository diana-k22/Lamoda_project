import React from "react";
import { useNavigate} from "react-router-dom";

import '../../App.scss'


export const CatalogProduct = ({itemGallery, price, title, pathToProduct}) => {
  let products = []

  fetch('http://localhost:4001/')
  .then((response) => {
    products = response;

    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  let navigate = useNavigate() //Создаем переменную, которая вызывает useNavigate() из реакт роутера
  const goToProductPage = (e) => {    
       navigate(pathToProduct)
    }
       

  return (
    <div onClick={goToProductPage} className="catalog-wrapper"> {/** Добавили клик по блоку, вызывается ф-ция которая переходит по клику на определенный путь стр */}
         
      <div className="catalog-gallery">
        <img className="catalog-gallery__item" src={itemGallery} alt="cloth"/>
      </div>
      <div className="catalog-text">
        <span className="catalog-subtitle">{price}</span>
        <span className="catalog-title">{title}</span>
      </div>

    </div>
  )
}