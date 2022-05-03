import React from "react";
import {Link} from "react-router-dom";

import '../App.scss'
import {DetailsProduct} from "./DetailsProduct";

export const CatalogProduct = ({itemGallery, subtitle, title}) => {
  // const clickItem = (e) => {     e.preventDefault();     <DetailsProduct/> };

  return (
    <div className="catalog-wrapper">

      <div className="catalog-gallery">
        <img className="catalog-gallery__item" src={itemGallery} alt="cloth"/>
      </div>
      <div className="catalog-text">
        <span className="catalog-subtitle">{subtitle}</span>
        <span className="catalog-title">{title}</span>
      </div>

    </div>
  )
}