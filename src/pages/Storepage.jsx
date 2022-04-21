
import React from 'react';
import './../App.scss';
import SwiperSlide from '../components/SwiperSlide';
import { ClothingCollection } from '../components/ClothingCollection';


const StorePage = ()  => {
  return (
    <div className='app-wrapper'>
            <SwiperSlide />
            <ClothingCollection />
    </div>
  );
}

export { StorePage };
