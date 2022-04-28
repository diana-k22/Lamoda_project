import { ClothingCollection } from "../components/ClothingCollection"
import SwiperSlide from "../components/SwiperSlide"

export const StorePageForMan = () => {
    return(
        <div>
            <SwiperSlide />
            <ClothingCollection title={'Мужская одежда, обувь и аксессуары'} />
        </div>
    )
}

