import  { useEffect, useState } from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/navigation";



import { Navigation } from "swiper/modules";
import { Rating } from '@smastrom/react-rating';
const Testimonials = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
      <div>
        <section>
          <SectionTitle
            subHeading={"What our Clients say"}
            heading={"testimonials"}
          ></SectionTitle>
        </section>
        <section className='my-16'>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className='flex flex-col justify-center items-center mx-4 mt-5'>
                    <Rating style={{maxWidth:180}}  readOnly value={review.rating}></Rating>
                    <FaQuoteLeft className='text-5xl mt-3'></FaQuoteLeft>
                    <p className='mt-10'>{review.details}</p>
                    <p className='text-xl italic mt-5 text-yellow-600'>{review.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    );
};

export default Testimonials;