import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { themeContext } from '../../Context';
import { useContext } from "react";

const Contact = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 




    const form = useRef();

    const [done, setDone] = useState(false)

    // comming from the form 
    const sendEmail = (e) => {
      e.preventDefault();
  
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      emailjs.sendForm('service_pgx6oxo', 'template_gxthbac', form.current, 'SgW771yBbhAS3P-Jh')
        .then((result) => {
            console.log(result.text);
            setDone(true); 
        }, (error) => {
            console.log(error.text);
        });
    };






  return (
     <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get in Tuch</span>
                <span>Contact me</span>

                <div className='blur s-blur1' style={{ background:"#ABF1FF94"}}>

                </div>

            </div>
        </div>

        {/* RIGHT PART  */}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <span>{done && "Thanks for contacting me ! "}</span>
                <input type="text" name="user_name" className="user" placeholder='Name' />
                <input type="email" name="user_email" className="user" placeholder = "Email" />
                <textarea name="message" className='user'placeholder='Message'/>
                <input type="submit" value="Send" className='button' />


                <div className='blur c-blur1' style={{background: "var(--purple"}}>

                </div>
            </form>
        </div>
     </div>
  )
}

export default Contact
