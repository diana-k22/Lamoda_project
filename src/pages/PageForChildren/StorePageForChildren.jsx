import React, { useState } from "react";
import { ClothingCollection } from "../../components/CollectionCards/ClothingCollection";
import SwiperSlide from '../../components/breadcrumbs/SwiperSlide';
import styled from 'styled-components'
import { StyledPageForWomen } from "../PageWomen/StorePageForWomen.styled";
import { useEffect } from "react";

const StyledPageForChildren = styled(StyledPageForWomen)``


export const StorePageForChildren = (props) => {
    const titleChild = ['Мальчикам', 'Девочкам', 'Новорожденным']
    // const productsForChildren = categoryFilter(CATEGORY.children)

    const [productsForChildren, setProductsForChildren] = useState([])// useState - принимает 2 аргумента: 1-текущеее значение состояния, 2- ф-цию для его обновления
    useEffect(() => { //
        fetch('http://localhost:4001/products')
        .then((res) => {//ожидает запрос Принимаем данные из бэка
            return res.json()//возвращает промис(отложенное значение) конвертируем их в json
           
        })
        .then((json) => {//дождался, пока прошлый дочитал инф. Полученные данные мы отправляем на фронт
           const filterChild = json.filter(el => el.category === 'children')
            setProductsForChildren(filterChild) //измени состояние стейта 
            console.log(json)
            
        })
    }, []) //useEffect если передали пустой массив, то вызовется всего один раз
    
    
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