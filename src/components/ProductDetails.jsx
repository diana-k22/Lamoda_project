import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";

export const ProductDetails = () => {
    const params = useParams(); // Создали переменную в которой вызвали useParams(). Параметры берем из урла
    const products = getProductById(params.productId)// 
    return( 
        <div className="product-details container">
            <img src={products.itemGallery} width='260px' height='350px'alt="cloth" />
            <h2>{products.title}</h2>
            <span>{products.price}</span>
        </div>
    )
}