import React from "react";
import {Link} from "react-router-dom";
import '../App.scss'
import {CollectionGalery} from "./CollectionGallery";

export const ClothingCollection = () => {
  const images = [
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum',
      key: 0
    }, 
    
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum',
      key: 1
    }, 
    
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999 ffhfhfhfhf',
      title: 'lortm ipsum',
      key: 2
    }, 
    
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum fjfjfjfjfjfjfjfj',
      key: 3
    }, 
    
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum',
      key: 4
    }, 
    
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum fkfkkfkfkfkfkfkfkfkfk',
      key: 5
    }, 
    
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum khkjfh',
      key: 6

    }, 
    
    {
      itemGallery: "http://unsplash.it/150/200?random&amp;gravity=center",
      subtitle: '6.999',
      title: 'lortm ipsum 567',
      key: 7
    }
  ]
  return (
    <div className="collection-wrapper container">
      <div className="collection-title">
        <span className="collection-title__text">Женская одежда, обувь и аксессуары</span>
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

          {images.map((image) => <CollectionGalery
            itemGallery={image.itemGallery}
            subtitle={image.subtitle}
            title={image.title}
            key={image.key}
            />)}

        </div>

      </div>

    </div>
  )
}