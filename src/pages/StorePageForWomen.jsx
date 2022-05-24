import React from 'react';
import './../App.scss';
import SwiperSlide from '../components/SwiperSlide';
import { ClothingCollection } from '../components/ClothingCollection';
import { CATEGORY, categoryFilter } from '../data/products';
import styled, { css } from 'styled-components'


export const StorePageForWomen = ({props})  => {
  const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']
  const productsForWomen = categoryFilter(CATEGORY.woman)

 
  return (

    <div className='main-wrapper'>
        <SwiperSlide />
        <ClothingCollection
            subtitle={'Женская одежда, обувь и аксессуары'} 
            titles = {titles} 
            products={productsForWomen}
        />
    </div>
  );
}

