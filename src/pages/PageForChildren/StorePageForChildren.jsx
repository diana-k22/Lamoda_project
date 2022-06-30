import React, { useState } from "react";
import { ClothingCollection } from "../../components/CollectionCards/ClothingCollection";
import SwiperSlide from '../../components/breadcrumbs/SwiperSlide';
import styled from 'styled-components'
import { StyledPageForWomen } from "../PageWomen/StorePageForWomen.styled";
import { useEffect } from "react";
import { filterCategory } from "../../api/api";

const StyledPageForChildren = styled(StyledPageForWomen)``


export const StorePageForChildren = (props) => {
    const titleChild = ['Мальчикам', 'Девочкам', 'Новорожденным']

    const [productsForChildren, setProductsForChildren] = useState([])// useState - принимает 2 аргумента: 1-текущеее значение состояния, 2- ф-цию для его обновления
    useEffect(() => { 
        filterCategory('children').then((p) => {
            setProductsForChildren(p)})
    }, [])
    
    
    // Отфильтровать по айдишнику, сделать loading, пока картинки грузятся

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