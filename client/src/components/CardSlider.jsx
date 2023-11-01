import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CardSlider = ({ images }) => {
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
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<img src={image} alt="" />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
