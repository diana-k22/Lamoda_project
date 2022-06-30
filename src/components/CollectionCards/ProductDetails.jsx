import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {getProductById} from "../../api/api"




export const ProductDetails = () => {
    const params = useParams(); // Создали переменную в которой вызвали useParams(). Параметры берем из урла
    const [product, setProduct] = useState({})
    useEffect(() => {
        getProductById(params.productId).then((p) => {
            setProduct(p)
        })
    },[])

    return( 
        <div className="product-details container">
            <img src={product.itemGallery} width='260px' height='350px'alt="cloth" />
            <h2>{product.title}</h2>
            <span>{product.price}</span>
        </div>
    )
}