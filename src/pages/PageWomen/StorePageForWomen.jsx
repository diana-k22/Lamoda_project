import React, { useEffect, useState } from 'react';
import '../../App';
import SwiperSlide from '../../components/breadcrumbs/SwiperSlide';
import {ClothingCollection} from '../../components/CollectionCards/ClothingCollection';
// import {CATEGORY, categoryFilter} from '../../data/products';
import { StyledPageForWomen } from './StorePageForWomen.styled';

export const StorePageForWomen = ({props}) => {
  const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']
  // const productsForWomen = categoryFilter(CATEGORY.woman)

  const [productsForWomen, setProductsForWoman] = useState([])// useState - принимает 2 аргумента: 1-текущеее значение состояния, 2- ф-цию для его обновления
  
  useEffect(() => { //
      fetch('http://localhost:4001/products/?filter=women')
      .then((res) => {//ожидает запрос
          return res.json()//возвращает промис(отложенное значение)
      })
      .then((json) => {//дождался, пока прошлый дочитал инф
        const filterWomen = json.filter(el => el.category === 'woman')

        setProductsForWoman(filterWomen)
        
          console.log(productsForWomen)
      })
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
