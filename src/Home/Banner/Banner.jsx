import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const overlayText = (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40 px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-['Roboto'] mb-4">
                Paramount<span className="text-[#ffbb00ef]"> Triumphants</span>
            </h2>
            <p className="text-base md:text-lg font-['Roboto'] leading-relaxed mb-6">
                The Outstanding Student Branch with its set of skills and enthusiastic members thrives <br />
                on achievements. Expand your networking and leadership competencies with the <br />
                blooming mindset of individuals. Our Achievements
            </p>
            <button className="px-6 py-2 bg-[#ffbb00ef] text-black font-semibold rounded-lg flex items-center gap-2">
                <i className="fa-solid fa-magnifying-glass"></i> Read More
            </button>
        </div>
    );

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper relative"
            >
                {[
                    "b3.jpg", "b2.jpg", "b4.jpg",
                    "gellary1.jpg", "gellary3.jpg", "gellary7.jpg",
                    "eventbaner.jpg", "about.jpg"
                ].map((img, index) => (
                    <SwiperSlide key={index} className="relative h-auto">
                        <img src={`../../../public/img/${img}`} alt="" className="w-full h-full object-cover" />
                        {overlayText}
                    </SwiperSlide>
                ))}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>

    )
};

export default Banner;