import React from "react";
import { ClothingCollection } from "../components/ClothingCollection";
import SwiperSlide from "../components/SwiperSlide";



export const StorePageForChildren = (props) => {
    const titleChild = ['Мальчикам', 'Девочкам', 'Новорожденным']


    return (
        <div>
            <SwiperSlide />
            <ClothingCollection subtitle={'Детская одежда, обувь и аксессуары'} titles={titleChild}/>
        </div>
    )
}