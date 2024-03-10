import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import carrosselong from '../../assets/carrosselong.png'
import carrosselong2 from '../../assets/carrosselong2.png'
import carrosselong3 from '../../assets/carrosselong3.png'
import carrosselong4 from '../../assets/carrosselong4.png'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./Carrossel3.css";

function Carrossel() {
    return (
        <>
            <div >
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
                        <Link to=''>
                            <img className="swiper-slide-img3"
                                src={carrosselong}
                                alt="Produto 1"

                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <img className="swiper-slide-img3"
                                src= {carrosselong2}
                                alt="Produto 2"

                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <img className="swiper-slide-img3"
                                src= {carrosselong3}
                                alt="Produto 3"

                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <img className="swiper-slide-img3"
                                src={carrosselong4}
                                alt="Produto 4"


                            />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>


    )
}
export default Carrossel;
