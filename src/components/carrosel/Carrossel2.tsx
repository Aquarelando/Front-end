import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importando seu CSS
import "./Carrossel2.css";
import { Link } from "react-router-dom";

function Carrossel2() {
    return (
    <>
        <div>
            {/* 
                Adicionando o Componente Swiper
                e configurando algumas props            
            */}
            <Swiper
                slidesPerView={3}
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
                className="h-[300px] w-[750px] m-[50px] ml-[0px] rounded-4xl mt-[30px] mb-[0px]"
            >
                {/* 
                    Adicionando Slides através
                    do Componente SwiperSlide
                */}
                <SwiperSlide>
                    <Link to="https://github.com/littlledan" target="_blank">
                        <img className="swiper-slide-img2"
                            src='https://avatars.githubusercontent.com/u/148507447?v=4'                    
                        />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="https://github.com/Raafa22" target="_blank">
                        <img className="swiper-slide-img2"
                            src='https://avatars.githubusercontent.com/u/148557678?v=4'
                        />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="https://github.com/WesleyBert" target="_blank">
                        <img className="swiper-slide-img2"
                            src='https://avatars.githubusercontent.com/u/90710910?v=4'
                        />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="https://github.com/IsabellaCorreiadosantos" target="_blank">
                        <img className="swiper-slide-img2"
                            src='https://avatars.githubusercontent.com/u/148590800?v=4'
                        />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="https://github.com/BiaAkemi" target="_blank">
                        <img className="swiper-slide-img2"
                            src='https://avatars.githubusercontent.com/u/145511213?v=4'
                        />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="https://github.com/gustavoalcantaradev" target="_blank">
                        <img className="swiper-slide-img2"
                            src='https://avatars.githubusercontent.com/u/107977597?v=4'
                        />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="https://github.com/Jeffersonfelizx" target="_blank">
                        <img className="swiper-slide-img2"
                            src='https://avatars.githubusercontent.com/u/95946565?v=4'
                        />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
    )
}
export default Carrossel2