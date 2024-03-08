import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import bebe from '../../assets/bebe.png'
import bebe2 from '../../assets/bebe2.png'
import estudante from '../../assets/estudante.png'
import frete from '../../assets/frete.png'
import fgratis from '../../assets/teste1.png'
import mochila from '../../assets/teste2.png'
import creche from '../../assets/teste3.png'
import livros from '../../assets/teste4.png'

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
                                src={fgratis}
                                alt="Produto 1"

                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/produtos'>
                            <img className="swiper-slide-img"
                                src={mochila}
                                alt="Produto 2"

                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/produtos'>
                            <img className="swiper-slide-img"
                                src={creche}
                                alt="Produto 3"

                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/produtos'>
                            <img className="swiper-slide-img"
                                src={livros}
                                alt="Produto 4"


                            />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="flex justify-center space-x-4 m-[50px]">
                <div>
                    <p className="text-[18px] text-center ">BEBÊ </p>
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
                    <p className="text-[18px] text-center">ADOLESCENTE</p>
                    <div className="bg-[#F7DEC8] rounded-[25px] relative" style={{ width: '140px', height: '175px' }}>
                        <img
                            src={estudante}
                            alt="Imagem de um adolescente"
                            className="object-contain max-w-[75%] max-h-[100%] pt-4 absolute right-4"
                        />
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
