import React, { useEffect, useState } from 'react';
import { filterCategory } from '../../api/api';
import '../../App';
import SwiperSlide from '../../components/breadcrumbs/SwiperSlide';
import {ClothingCollection} from '../../components/CollectionCards/ClothingCollection';
// import {CATEGORY, categoryFilter} from '../../data/products';
import { StyledPageForWomen } from './StorePageForWomen.styled';

export const StorePageForWomen = ({props}) => {
  const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']
  // const productsForWomen = categoryFilter(CATEGORY.woman)

  const [productsForWomen, setProductsForWoman] = useState([])// useState - принимает 2 аргумента: 1-текущеее значение состояния, 2- ф-цию для его обновления
  
  useEffect(() => { 
    filterCategory('woman').then((p) => {
      setProductsForWoman(p)})
}, []) //useEffect если передали пустой массив, то вызовется всего один раз

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
