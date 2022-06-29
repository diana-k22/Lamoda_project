import { ClothingCollection } from "../../components/CollectionCards/ClothingCollection"
import SwiperSlide from '../../components/breadcrumbs/SwiperSlide';
import { StyledPageForMan } from "./StorePageForMan.styled";
import { useEffect, useState } from "react";

export const StorePageForMan = () => {
    const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']


    const [productsForMan, setProductsForMan] = useState([])// useState - принимает 2 аргумента: 1-текущеее значение состояния, 2- ф-цию для его обновления
    useEffect(() => { 
        fetch('http://localhost:4001/products/?filter=man')
        .then((res) => {//ожидает запрос
            return res.json()//возвращает промис(отложенное значение)
        })
        .then((json) => {//дождался, пока прошлый дочитал инф
            const filterMan = json.filter(el => el.category === 'man')
            setProductsForMan(filterMan)
            console.log(productsForMan)
        })
    }, []) //useEffect если передали пустой массив, то вызовется всего один раз
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

