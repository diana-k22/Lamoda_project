import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";

export const ProductDetails = () => {
    const params = useParams(); // Создали переменную в которой вызвали useParams(). Параметры берем из урла
    const products = getProductById(params.productId)// 
    return( 
        <div className="product-details container">
            {/* <h2>Product {product.title}</h2>
            <img className="catalog-gallery__item" src={product.itemGallery} alt="cloth"/>
            <div>{product.details.price}</div>
            <div>{product.subtitle}</div> */}
            <h2>{products.title}</h2>
        </div>
    )
}