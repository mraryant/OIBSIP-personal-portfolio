import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

import portfolio1 from "../../img/profile1.jpg";
import portfolio2 from "../../img/profile2.jpg";
import portfolio3 from "../../img/profile3.jpg";
import portfolio4 from "../../img/profile4.jpg";


const Testimonial = () => {
    
    const clients = [
        {
            img : portfolio1,
            review: "  a. Harum id voluptatum voluptas velit. Neque adipisci excepturi tenetur odio nostrum? Dignissimos voluptate reprehenderit possimus minus, quidem aliquam atque voluptatem. Velit!"
        },
        {
            img : portfolio2,
            review: " a. Harum id voluptatum voluptas velit. Neque adipisci excepturi tenetur odio nostrum? Dignissimos voluptate reprehenderit possimus minus, quidem aliquam atque voluptatem. Velit!"
        },
        {
            img : portfolio3,
            review: "  a. Harum id voluptatum voluptas velit. Neque adipisci excepturi tenetur odio nostrum? Dignissimos voluptate reprehenderit possimus minus, quidem aliquam atque voluptatem. Velit!"
        },
        {
            img : portfolio4,
            review: "  a. Harum id voluptatum voluptas velit. Neque adipisci excepturi tenetur odio nostrum? Dignissimos voluptate reprehenderit possimus minus, quidem aliquam atque voluptatem. Velit!"
        },
    ]
    
    
    return (
    
    <div className="t-wrapper" id='testimonial'>
         <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>From me... </span>

            {/* blurs here  */}
            <div className="blur t-blur1" style ={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style ={{ background: "skyblue" }}></div>
         </div>

         {/* slider  */}
         <Swiper
           modules={[Pagination]}
           slidesPerView={1}
           pagination = {{clickable:true}}

         >
            {/* mapping array  */}
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key ={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
         </Swiper>
    </div>
  )
}

export default Testimonial

 
