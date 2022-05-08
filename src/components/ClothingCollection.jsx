import React from "react";
import {Link} from "react-router-dom";
import '../App.scss'

import Pagination from '@mui/material/Pagination';
import {CatalogProduct} from "./CatalogProduct";
import { products } from "../data/products";

export const ClothingCollection = (props) => { //Создали массив для вывода картинок

  return (
    <div className="collection-wrapper container">
      <div className="collection-subtitle">
        <span className="collection-subtitle__text">{props.subtitle}</span>
      </div>

      <div className="collection-main">
        <div className="collection-navigation">
            {/* У родителя (StorePageWomen-Man-Children)есть массив категорий товаров, который мы передаем в этот компонент (ClothingCollection)через пропс   */}
          {props.titles.map((title) => (
           <div key={title} className="collection-link">
              <Link to='#' className="collection-link__text">{title}</Link>
            </div>
          ))}

        </div>

        <div className="collection-gallery">
          {/* цикл, который перебирает массив с товарами и рендерит */}

          {products.map((product) => <CatalogProduct
            itemGallery={product.itemGallery}
            subtitle={product.subtitle}
            title={product.title}
            pathToProduct={`/products/${product.key}`} //Указываем путь к новой стр конкретного продукта
            key={product.key}/>)}
            
        </div>
      </div>
        <Pagination />
    </div>
  )
}