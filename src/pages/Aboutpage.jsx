import { ClothingCollection } from "../components/ClothingCollection"
import { ClothingCollectionMan } from "../components/ClothingCollectionMan"
import SwiperSlide from "../components/SwiperSlide"

export const AboutPage = () => {
    return(
        <div>
            <SwiperSlide />
            <ClothingCollectionMan 
            title={'Мужская одежда, обувь и аксессуары'}/>
            <ClothingCollection />
        </div>
    )
}

