import { ClothingCollection } from "../components/ClothingCollection"
import SwiperSlide from "../components/SwiperSlide"

export const StorePageForMan = () => {
    const titles = ['Обувь', 'Одежда', 'Аксессуары', 'Premium', 'Спорт']
    return(
        <div>
            <SwiperSlide />
            <ClothingCollection subtitle={'Мужская одежда, обувь и аксессуары'} titles = {titles} />
        </div>
    )
}

