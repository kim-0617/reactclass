import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const data = [
    {
        small: "ARTIST",
        big: "COLOR'S POWER",
        desc: "색은 많은 의미를 내포하고 있습니다. \n 함께 배워보시죠!",
        btn1: "자세히 보기",
        btn2: "정보 보기",
    },

    {
        small: "ARTIST",
        big: "COLOR'S POWER",
        desc: "색은 많은 의미를 내포하고 있습니다. \n 함께 배워보시죠!",
        btn1: "자세히 보기",
        btn2: "정보 보기",
    },

    {
        small: "ARTIST",
        big: "COLOR'S POWER",
        desc: "색은 많은 의미를 내포하고 있습니다. \n 함께 배워보시죠!",
        btn1: "자세히 보기",
        btn2: "정보 보기",
    },
];

function Slider2({ fonts }) {
    return (
        <section className={`slider__inner ${fonts}`}>
            <Swiper
                pagination={true}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="desc">
                        <span>{data[0].small}</span>
                        <h3>{data[0].big}</h3>
                        <p>
                            {data[0].desc}
                        </p>
                        <div className="btn">
                            <a href="/">{data[0].btn1}</a>
                            <a href="/" className="black">{data[0].btn1}</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="desc">
                        <span>{data[1].small}</span>
                        <h3>{data[1].big}</h3>
                        <p>
                            {data[1].desc}
                        </p>
                        <div className="btn">
                            <a href="/">{data[1].btn1}</a>
                            <a href="/" className="black">{data[1].btn1}</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="desc">
                        <span>{data[2].small}</span>
                        <h3>{data[2].big}</h3>
                        <p>
                            {data[2].desc}
                        </p>
                        <div className="btn">
                            <a href="/">{data[2].btn1}</a>
                            <a href="/" className="black">{data[2].btn1}</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
export default Slider2;