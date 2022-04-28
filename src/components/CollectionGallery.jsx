import React from "react";

import '../App.scss'



export const CollectionGallery = ({itemGallery, subtitle, title}) => {
    return (

        <div className="catalog-wrapper">
           <div className="catalog-gallery">
               <img className="catalog-gallery__item" src={itemGallery} alt="cloth" />
           </div>
           <div className="catalog-text">
                <span className="catalog-subtitle"> {subtitle} </span>
                <span className="catalog-title"> {title} </span>
           </div>
        </div>
    )
}