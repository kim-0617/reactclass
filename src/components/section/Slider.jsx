import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

function Slider2({ fonts }) {
    return (
        <section className={`slider__inner ${fonts}`}>
            <Swiper
                pagination={true}
                navigation={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="desc">
                        <span>ARTIST</span>
                        <h3>COLOR'S POWER</h3>
                        <p>
                            색은 많은 의미를 내포하고 있습니다. <br /> 함께 배워보시죠!
                        </p>
                        <div className="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" className="black">정보 보기</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="desc">
                        <span>ARTIST</span>
                        <h3>COLOR'S POWER</h3>
                        <p>
                            색은 많은 의미를 내포하고 있습니다. <br /> 함께 배워보시죠!
                        </p>
                        <div className="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" className="black">정보 보기</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="desc">
                        <span>ARTIST</span>
                        <h3>COLOR'S POWER</h3>
                        <p>
                            색은 많은 의미를 내포하고 있습니다. <br /> 함께 배워보시죠!
                        </p>
                        <div className="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" className="black">정보 보기</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
export default Slider2;