import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import SlideItem from './SlideItem';

const Slider = props => {
  const renderedSlides = props.images.map(el => (
    <SwiperSlide key={el.id}>
      <SlideItem image={el} />
    </SwiperSlide>
  ));

  return (
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
      autoplay={{ delay: 1000 }}
      slidesPerView={5}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {renderedSlides}
    </Swiper>
  );
};

export default Slider;
