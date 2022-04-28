import React from "react";
import { ClothingCollection } from "../components/ClothingCollection";
import SwiperSlide from "../components/SwiperSlide";



export const StorePageForChildren = () => {
    return (
        <div>
            <SwiperSlide />
            <ClothingCollection title={'Детская одежда, обувь и аксессуары'} />
        </div>
    )
}