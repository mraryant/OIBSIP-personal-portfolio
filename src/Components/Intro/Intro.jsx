import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png'
import boy1 from '../../img/Picsart_23-05-23_13-50-50-583.png';
import boy2 from '../../img/Picsart_23-05-23_14-34-17-593.png';
import cloud from '../../img/pngwing.com.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png'

import { themeContext } from '../../Context';
import { useContext } from "react";

import { motion} from 'framer-motion';
import {Link, link} from 'react-scroll'

const Intro = () => {

    

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 
    
  return (
    <div className="intro">


        {/* This is left part of intro section */}
        <div className="i-left">
            <div className="i-name">
                <span style = {{color: darkMode? 'white':''}}>Hy! I Am</span>
                <span>Aryant Shrirnag</span>
                <span>Goal Is To Achive A Good Position By Doing Best Of My Work in development field. Very Passionate About Learning New Things & Technologies. Like To Compleate The Tasks In Fast-Faced Environment.
</span>
            </div>
            <Link spy={true} to='Contact' smooth={true}  >   
            <button className=" button i-button">
                Hire me
            </button>
            </Link>

            <div className="i-icon">
              <a href="" >
                <img src={Github} alt="" className="howerC"  />
              </a>
              <a href="https://www.linkedin.com/in/aryant-shrirang-62707122a/" className="x" target='blank'>
                   <img src={LinkedIn} alt="" className="howerC" /> 
              </a>
              <a href=""  >
                <img src={Instagram} alt="" className="howerC"/>
              </a>
            </div>
            
        </div>
        
        {/* this is right part of  intro section  */}
        <div className="i-right">
             <img src={Vector1} alt="" />
             <img src={Vector2} alt="" />
             <img src={boy1} alt="" />
             <img src={cloud} alt="" />

                  {/* animation  */}
             <motion.div 
                  initial={{ y: 0 }}
                  animate={{
                    y: [-20, 20], // Specifies the y-axis values to animate
                    transition: {
                      duration: 2,
                      repeat: Infinity, // Repeats the animation indefinitely
                      repeatType: 'reverse', // Reverses the animation direction on repeat
                    },
                  }}
             >
             <img src={glassesimoji} className='mqa' alt="" /> 
             </motion.div>
              

             {/* floating div component importing */}
             
             <motion.div 
                 
                initial={{ y: 0 }}
                   animate={{
                     y: [-40, 40], // Specifies the y-axis values to animate
                     transition: {
                       duration: 5,
                       repeat: Infinity, // Repeats the animation indefinitely
                       repeatType: 'reverse', // Reverses the animation direction on repeat
                     },
                   }}

                className='floating-div floating-div1'
                 >

                <FloatingDiv image = {thumbup}  txt1 ='Web' txt2='Development' /> 
             </motion.div>


             <motion.div 
                 initial={{ y: 1 }}
                 animate={{
                   y: [-30, 30], // Specifies the y-axis values to animate
                   transition: {
                     duration: 3,
                     repeat: Infinity, // Repeats the animation indefinitely
                     repeatType: 'reverse', // Reverses the animation direction on repeat
                   },
                 }}
                 className='floating-div floating-div2'
              >
                <FloatingDiv image ={Crown}  txt1='Data Structures' txt2='& Algorithm'/>
             </motion.div>

             {/* blure divs  */}
             <div className="blur" style={{background:"rgb(238 210 255) "}} ></div>
             <div className="blur" 
             style={{
                background:'#C1F5FF',
                top: '17rem',
                 width:'21rem',
                  height:'11rem',
                  left:'-9rem',
                  }}></div>

        </div>
    </div>
  )
}

export default Intro
