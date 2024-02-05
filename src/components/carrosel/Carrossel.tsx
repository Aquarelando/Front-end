import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importando seu CSS
import "./Carrossel.css";

function Carrossel() {
    return (
    <>
        <div>
            {/* 
                Adicionando o Componente Swiper
                e configurando algumas props            
            */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* 
                    Adicionando Slides através
                    do Componente SwiperSlide
                */}
                <SwiperSlide>
                <img className="swiper-slide-img"
                        src='https://i.imgur.com/zBGxsoy.png'                    
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-slide-img"
                        src='https://i.imgur.com/phixW3O.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-slide-img"
                        src='https://i.imgur.com/rZAj6T1.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-slide-img"
                        src='https://i.imgur.com/t21Deux.png'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </>
    )
}
export default Carrossel