import React from "react";
import {Link} from "react-router-dom";
import '../../App.scss'
import {CatalogProduct} from "./CatalogProduct";
import { productCategoryFilter } from "../../data/products";
import { StyledClothingCollection } from "./ClothingCollection.styled";


export const ClothingCollection = (props) => { //Создали массив для вывода картинок
console.log(props.products)

  return (
    <StyledClothingCollection>
      <div className="collection-wrapper">
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
            
            {props.products.map((product) => <CatalogProduct 
              itemGallery={product.itemGallery} 
              price={product.price} 
              title={product.title} 
              pathToProduct={`/products/${product.id}`} //Указываем путь к новой стр конкретного продукта
              key={product.id}/>)}
          </div>
        </div>
        {/* <Pagination/> */}
      </div>
    </StyledClothingCollection>
  )
}