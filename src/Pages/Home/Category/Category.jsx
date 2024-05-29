import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './swipper.css'
import slideImg from '../../../assets/home/homeBanner.png'
import Title from '../../Shared/Title';

const Category = () => {
    return (
        <section>
            <Title heading={"Components"} subheading={'Choose your component'}></Title>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slideImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg} alt="" />
                </SwiperSlide>
            </Swiper>
        </section>

    )
}

export default Category