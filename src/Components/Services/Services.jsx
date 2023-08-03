import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./My resume  (4).pdf"

import React from 'react'
import './Services.css'
import Card from '../Card/Card';

import { themeContext } from '../../Context';
import { useContext } from "react";

import {motion} from 'framer-motion'



const Services = () => {
 
  const transition ={duration:1 , type:'spring'};


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 
  return (
    <div className="services" id='Services'>
        {/* leftside  */}
         <div className="awesome">
            <span style={{color:darkMode?'white':''}}>My Awesome</span>
            <span>Services</span>
            <span>"Designing captivating user experiences with creativity and technology.
            <br/>
            Expertise in HTML, CSS, JavaScript, React, MERN, PHP, SQL, and a keen eye for color theory."
              </span>

            {/* download CV button  */}
            <a href={Resume} download>
              <button className="button s-button"> Download CV</button>
            </a>    
                <div className="blur s-blur"
                style={{
                    background:"#ABF1FF94"
                }}></div>
         </div>

         {/* right side  */}
         <div className="cards">

           {/* first card  */}
            <motion.div 
                 initial={{left:'25rem'}}
                 whileInView={{left:'14rem'}}
                 transition = {transition}
            style={{left:'14rem'}}>

              <Card
              emoji = {HeartEmoji}
              heading = {'Design'}
              detail={" Html, Css ,JavaScript , React , canva"}
              />
            </motion.div>

            {/* second card  */}
             <motion.div 
                  initial={{left:'-20rem'}}
                  whileInView={{left:'-4rem' ,top:"10rem"}}
                  transition = {transition}
              style = {{top:"10rem" , left :"-4rem"}}>
              <Card
               emoji={Glasses}
               heading={"Developer"}  
               detail={"MERN , PHP,SQL "}
              />
             </motion.div>

             {/* 3rd div  */}
             <motion.div 
                 initial={{left:'25rem'}}
                  whileInView={{left:'12rem',top : "19rem"}}
                 transition = {transition}
             style={{top : "19rem" , left : "12rem"}}>
               <Card
                 emoji={Humble}
                 heading={"UI/UX"}
                 detail={" Little experience on color theory  "}
               />
             </motion.div>
             {/* purple blur  */}
             <div className="blur s-blur2" style={{background:"var(--purple)" }} ></div>
         </div>
    </div>
  )
}

export default Services
