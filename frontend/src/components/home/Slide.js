"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const data = [
    {
        id: 1,
        link: 'https://cdn.galaxycine.vn/media/2024/8/29/2048_1724920527246.jpg'
    },
    {
        id: 2,
        link: 'https://cdn.galaxycine.vn/media/2024/8/29/2048_1724920527246.jpg'
    },
    {
        id: 3,
        link: 'https://cdn.galaxycine.vn/media/2024/8/29/2048_1724920527246.jpg'
    },
    {
        id: 4,
        link: 'https://cdn.galaxycine.vn/media/2024/8/29/2048_1724920527246.jpg'
    },
    {
        id: 5,
        link: 'https://cdn.galaxycine.vn/media/2024/8/29/2048_1724920527246.jpg'
    },
    {
        id: 6,
        link: 'https://cdn.galaxycine.vn/media/2024/8/29/2048_1724920527246.jpg'
    },
]

const Slide = () => {
  return (
    <section className="py-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center">
              <img
                className="w-[1512px] object-cover text-center"
                src={item.link}
                alt="slide"
              ></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slide;