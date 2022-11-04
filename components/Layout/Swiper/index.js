/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination, Autoplay } from 'swiper';

const StorySlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 3,
          },
          745: {
            slidesPerView: 4,
          },
          960: {
            slidesPerView: 5,
          },
        }}
        autoplay={{ delay: 500 }}
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[228px]">
            <img
              src="https://gute-react.vercel.app/assets/images/instagram/1.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[228px]">
            <img
              src="https://gute-react.vercel.app/assets/images/instagram/2.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[228px]">
            <img
              src="https://gute-react.vercel.app/assets/images/instagram/3.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[228px]">
            <img
              src="https://gute-react.vercel.app/assets/images/instagram/4.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[228px]">
            <img
              src="https://gute-react.vercel.app/assets/images/instagram/5.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default StorySlider;
