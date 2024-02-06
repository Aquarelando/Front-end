import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import bebe from '../../assets/bebe.png'
import bebe2 from '../../assets/bebe2.png'
import estudante from '../../assets/estudante.png'
import frete from '../../assets/frete.png'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


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
                        <Link to='/produtos'>
                            <img className="swiper-slide-img"
                                src='https://i.imgur.com/zBGxsoy.png'
                                alt="Produto 1"

                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/produtos'>
                            <img className="swiper-slide-img"
                                src='https://i.imgur.com/phixW3O.png '
                                alt="Produto 2"

                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/produtos'>
                            <img className="swiper-slide-img"
                                src='https://i.imgur.com/rZAj6T1.png'
                                alt="Produto 3"

                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/produtos'>
                            <img className="swiper-slide-img"
                                src='https://i.imgur.com/t21Deux.png'
                                alt="Produto 4"


                            />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="flex justify-center space-x-4 m-[50px]">
                <div>
                    <p className="text-[18px] text-center font-sans">BEBÊ </p>
                    <div className="bg-[#F7DEC8] rounded-[25px] ">
                        <img src={bebe} alt="bebe1" className="w-auto p-3 " />
                    </div>
                </div>

                <div>
                    <p className="text-[18px] text-center">CRIANÇA </p>
                    <div className="bg-[#F7DEC8] rounded-[25px]">
                        <img src={bebe2} alt="bebe1" className="w-auto p-3 " />
                    </div>
                </div>

                <div>
                    <p className="text-[18px] text-center">ADOLESCENTE </p>
                    <div className="bg-[#F7DEC8] rounded-[25px]">
                        <img src={estudante} alt="bebe1" className="w-auto p-3 " />
                    </div>
                </div>

                <div>
                    <p className="text-[18px]">PROMOÇÃO DE VOLTA ÁS AULAS! </p>
                    <img src={frete} alt="frete" className="min-w-[600px]" />
                </div>
            </div>
        </>


    )
}
export default Carrossel;
