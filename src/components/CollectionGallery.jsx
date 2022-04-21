import React from "react";
import {Link} from "react-router-dom";
import '../App.scss'



export const CollectionGalery = ({itemGallery, subtitle, title}) => {
    return (

        <div className="catalog-wrapper">
           <div>
               <img src={itemGallery} alt="phot" />
           </div>
           <div>
                <span> {subtitle} </span>
                <span> {title} </span>
           </div>



        </div>
    )
}