import React from "react";
import {Link} from "react-router-dom";
import '../App.scss'
import {CollectionGallery} from "./CollectionGallery";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const ClothingCollection = (props) => { //Создали массив для вывода картинок
  const images = [
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum',
      key: 0
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum',
      key: 1
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.99',
      title: 'lortm ipsum',
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
      title: 'lortm ipsum',
      key: 5
    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '8.999',
      title: 'lortm ipsum',
      key: 6

    }, {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '9.999',
      title: 'lortm ipsum',
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
      title: 'lortm ipsum',
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
      <div className="collection-title">
        <span className="collection-title__text">{props.title}</span>
      </div>

      <div className="collection-main">
        <div className="collection-navigation">
          <div className="collection-link">
            <Link to='#' className="collection-link__text">Обувь</Link>
          </div>
          <div className="collection-link">
            <Link to='#' className="collection-link__text">Одежда</Link>
          </div>
          <div className="collection-link">
            <Link to='#' className="collection-link__text">Аксессуары</Link>
          </div>
          <div className="collection-link">
            <Link to='#' className="collection-link__text">Primium</Link>
          </div>
          <div className="collection-link">
            <Link to='#' className="collection-link__text">Спорт</Link>
          </div>

        </div>

        <div className="collection-gallery">

          {/* цикл, который перебирает массив и выводит */}

          {images.map((image) => <CollectionGallery
            itemGallery={image.itemGallery}
            subtitle={image.subtitle}
            title={image.title}
            key={image.key}/>)}

        </div>

      </div>
      <div className="pagination">
          <Stack spacing={2}>
            <Pagination count={10}/>
          </Stack>
        </div>
    </div>
  )
}