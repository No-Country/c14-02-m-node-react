import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CardSlider = () => {
  return (
    <Swiper
      cssMode={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      navigation={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://picsum.photos/200" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
