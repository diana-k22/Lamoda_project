import React from 'react';
import './../App.scss';
import SwiperSlide from '../components/SwiperSlide';
import { ClothingCollection } from '../components/ClothingCollection';


export const StorePageForWomen = ({props})  => {
  const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']
  
  return (

    <div className='app-wrapper'>
            <SwiperSlide />
            <ClothingCollection subtitle={'Женская одежда, обувь и аксессуары'}  titles = {titles}/>
    </div>
  );
}

