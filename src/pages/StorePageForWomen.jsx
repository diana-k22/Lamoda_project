import React from 'react';
import './../App.scss';
import SwiperSlide from '../components/SwiperSlide';
import { ClothingCollection } from '../components/ClothingCollection';


export const StorePageForWomen = ()  => {
  return (
    <div className='app-wrapper'>
            <SwiperSlide />
            <ClothingCollection title={'Женская одежда, обувь и аксессуары'} />
    </div>
  );
}

