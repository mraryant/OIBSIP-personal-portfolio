 import React from 'react'
 import './Portfolio.css';
 import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css'

// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";

import first from "../../img/Screenshot (353).png";
import second from "../../img/Screenshot (354).png";
import third from "../../img/Screenshot (355).png";
import fourth from "../../img/Screenshot (356).png";
import fifth from "../../img/Screenshot (357).png";
import sixth from "../../img/Screenshot (358).png";
import seventh from "../../img/Screenshot (359).png";
 
import { themeContext } from '../../Context';
import { useContext } from "react";

 const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 

   return (
      <div className="portfolio" id='portfolio'>

        {/* heading  */}
         <span style={{color:darkMode?'white':''}}>Recent Projects</span>
         <span>Portfolio</span>

          {/* swiper component  */}
         <Swiper spaceBetween = {30} 
          slidesPerView={3} 
          grabCursor= {true} 
          className= 'portfolio-slider' >
             
            <SwiperSlide>
                <img src={third} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={fourth} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={second} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={seventh} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={first} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={fifth} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sixth} alt="" />
            </SwiperSlide>
        </Swiper> 
      </div> 
   )
 }
 
 export default Portfolio
 