import React from "react";
import { ClothingCollection } from "../../components/CollectionCards/ClothingCollection";
import SwiperSlide from '../../components/breadcrumbs/SwiperSlide';
import { CATEGORY, categoryFilter } from '../../data/products';
import styled from 'styled-components'
import { StyledPageForWomen } from "../PageWomen/StorePageForWomen.styled";

const StyledPageForChildren = styled(StyledPageForWomen)``


export const StorePageForChildren = (props) => {
    const titleChild = ['Мальчикам', 'Девочкам', 'Новорожденным']
    const productsForChildren = categoryFilter(CATEGORY.children)

    return (
        <StyledPageForChildren>
            <SwiperSlide />
            <ClothingCollection 
                subtitle={'Детская одежда, обувь и аксессуары'}
                titles={titleChild}
                products={productsForChildren}
            />
        </StyledPageForChildren>
    )
}