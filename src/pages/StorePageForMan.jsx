import { ClothingCollection } from "../components/ClothingCollection"
import SwiperSlide from '../components/SwiperSlide';
import { CATEGORY, categoryFilter } from '../data/products';

export const StorePageForMan = () => {
    const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']
    const productsForMan = categoryFilter(CATEGORY.man)
    return(
        <div>
            <SwiperSlide />
            <ClothingCollection 
                subtitle={'Мужская одежда, обувь и аксессуары'} 
                titles = {titles} 
                products={productsForMan}
            />
        </div>
    )
}

