import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'

import {Link, link} from 'react-scroll'

function Navbar() {
  return (
    <div className = "n-wrapper" style={{zIndex:11}}> 
        {/* this is the left part of  nav bar  */}
        <div className = "n-left">
             <div className='n-name'> 𒆜 आ​​​​​ 🇷 ​​​​​🇾 ​​​​​🇦 ​​​​​🇳​​​​​​​​​ ​त <span className = "mirror-div">𒆜</span> </div>
              <div className="darkM"> 
                  <Toggle/>  {/*yaha toggle name ka component dal diya jo ki  Dark mode me taggle karega */}
              </div>
        </div>

      {/* this is the left part of  nav bar  */}
        <div className = "n-right">
            <div className= "n-list">
                <ul style ={{listStyleType:'none'}}>
                  <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' className='hoverTSF'>
                    <li>Home </li>
                  </Link>
                  <Link spy={true} to='Services' smooth={true} className='hoverTSF'>
                    <li>Services</li>
                  </Link>
                  <Link spy={true} to='Experience' smooth={true} className='hoverTSF'>
                    <li>Experience</li>
                  </Link>
                  <Link spy={true} to='portfolio' smooth={true} className='hoverTSF'>
                    <li>portfolio</li>
                  </Link>
                  <Link spy={true} to='testimonial' smooth={true} className='hoverTSF'>
                    <li>testimonial</li> 
                  </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}  >
                <button className="button n-button">
                    Contect us
                </button>
            </Link>
        </div>
    </div>  
  )
}

export default Navbar
