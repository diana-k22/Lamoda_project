import { ClothingCollection } from "../../components/CollectionCards/ClothingCollection"
import SwiperSlide from '../../components/breadcrumbs/SwiperSlide';
import { StyledPageForMan } from "./StorePageForMan.styled";
import { useEffect, useState } from "react";
import { filterCategory } from '../../api/api';

export const StorePageForMan = () => {
    const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']


    const [productsForMan, setProductsForMan] = useState([])// useState - принимает 2 аргумента: 1-текущеее значение состояния, 2- ф-цию для его обновления
    useEffect(() => { 
        filterCategory('man').then((p) => {
            setProductsForMan(p)})
    }, []) 

    return(
        <StyledPageForMan >
            <SwiperSlide />
            <ClothingCollection 
                subtitle={'Мужская одежда, обувь и аксессуары'} 
                titles = {titles} 
                products={productsForMan}
            />
        </StyledPageForMan>
    )
}