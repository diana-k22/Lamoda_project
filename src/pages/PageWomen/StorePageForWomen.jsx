import React from 'react';
import '../../App';
import SwiperSlide from '../../components/breadcrumbs/SwiperSlide';
import {ClothingCollection} from '../../components/CollectionCards/ClothingCollection';
import {CATEGORY, categoryFilter} from '../../data/products';
import { StyledPageForWomen } from './StorePageForWomen.styled';

export const StorePageForWomen = ({props}) => {
  const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']
  const productsForWomen = categoryFilter(CATEGORY.woman)

  return (
    <StyledPageForWomen>
      <div className='main-wrapper'>
        <SwiperSlide/>
        <ClothingCollection
          subtitle={'Женская одежда, обувь и аксессуары'}
          titles={titles}
          products={productsForWomen}/>
      </div>
    </StyledPageForWomen>
  );
}
