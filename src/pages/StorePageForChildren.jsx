import React from "react";
import { ClothingCollection } from "../components/ClothingCollection";
import SwiperSlide from "../components/SwiperSlide";
import { CATEGORY, categoryFilter } from '../data/products';


export const StorePageForChildren = (props) => {
    const titleChild = ['Мальчикам', 'Девочкам', 'Новорожденным']
    const productsForChildren = categoryFilter(CATEGORY.children)

    return (
        <div>
            <SwiperSlide />
            <ClothingCollection 
                subtitle={'Детская одежда, обувь и аксессуары'}
                titles={titleChild}
                products={productsForChildren}
            />
        </div>
    )
}