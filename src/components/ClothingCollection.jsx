import React from "react";
import {Link} from "react-router-dom";
import '../App.scss'

import Pagination from '@mui/material/Pagination';
import {CatalogProduct} from "./CatalogProduct";

export const ClothingCollection = (props) => { //Создали массив для вывода картинок
  const images = [
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ',
      key: 0
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum',
      key: 1
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.99',
      title: 'lortm',
      key: 2
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '7.000',
      title: 'lortm ipsum',
      key: 3
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum',
      key: 4
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '7.999',
      title: 'lortm',
      key: 5
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '8.999',
      title: 'lortm ipsum',
      key: 6

    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '9.999',
      title: 'lortm',
      key: 7
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum',
      key: 8
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '7.999',
      title: 'lortm ipsum',
      key: 9
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '8.999',
      title: 'lortm',
      key: 10

    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '9.999',
      title: 'lortm ipsum',
      key: 11
    }

  ]


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

          {images.map((image) => <CatalogProduct
            itemGallery={image.itemGallery}
            subtitle={image.subtitle}
            title={image.title}
            key={image.key}/>)}
            
        </div>

      </div>
        <Pagination />
    </div>
  )
}