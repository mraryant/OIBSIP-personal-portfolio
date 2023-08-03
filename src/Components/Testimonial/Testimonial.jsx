import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

// import portfolio1 from "../../img/profile1.jpg";
// import portfolio2 from "../../img/profile2.jpg";
// import portfolio3 from "../../img/profile3.jpg";
// import portfolio4 from "../../img/profile4.jpg";
import user from "../../img/user.png";


const Testimonial = () => {
    
    const clients = [
        {
            img : user,
            review: "TEAM MEMBER :-  Your visionary leadership continually guides our web development team to new heights, fostering innovation and excellence at every step."
        },
        {
            img : user,
            review: " CLIENT  :-  I am consistently amazed by your team's ability to turn complex concepts into user-friendly and visually stunning web solutions under your insightful direction."
        },
        {
            img : user,
            review: " TEAM MEMBER :-   Your genuine passion for web development is contagious, motivating each team member to give their best and fostering a sense of pride in our collective achievements."
        },
        {
            img : user,
            review: " TEAM MEMBER :-   Your ability to balance deadlines and creativity demonstrates your astute management, resulting in web projects that are both timely and artistically impactful."
        },
    ]
    
    
    return (
    
    <div className="t-wrapper" id='testimonial'>
         <div className="t-heading">
            <span>Reviews from My </span>
            <span>Clients  </span>
            <span >  &  </span>
            <span>   Team Members</span>

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

 
