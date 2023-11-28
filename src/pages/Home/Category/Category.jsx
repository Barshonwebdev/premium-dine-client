import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
const Category = () => {
    return (
      <section>
        <SectionTitle
          subHeading={"From 11:00 pm tp 10:00 am "}
          heading={"Order Online"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper md:mb-20 mb-8 "
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="uppercase text-center text-white md:text-3xl -mt-16">
              Salad
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={slide2} alt="" />
            <p className="uppercase text-center text-white md:text-3xl -mt-16">
              Pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={slide3} alt="" />
            <p className="uppercase text-center text-white md:text-3xl -mt-16">
              Soup
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={slide4} alt="" />
            <p className="uppercase text-center text-white md:text-3xl -mt-16">
              Desserts
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    );
};

export default Category;