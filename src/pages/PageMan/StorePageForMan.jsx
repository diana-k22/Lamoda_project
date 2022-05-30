import { ClothingCollection } from "../../components/CollectionCards/ClothingCollection"
import SwiperSlide from '../../components/breadcrumbs/SwiperSlide';
import { CATEGORY, categoryFilter } from '../../data/products';
import { StyledPageForMan } from "./StorePageForMan.styled";

export const StorePageForMan = () => {
    const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']
    const productsForMan = categoryFilter(CATEGORY.man)
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

