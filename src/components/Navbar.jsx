import React, { useState } from 'react'
import './Navbar.css'
import { AiOutlineBars } from "react-icons/ai";
import Mobile from './MobileNav/Mobile';
import { IoClose } from "react-icons/io5";



export const Navbar = () => {
   const [openmenu, setopenmenu] = useState(false);
  
   const togglemenu =()=>{
    setopenmenu(!openmenu)
   }

  return (
    <>
    <Mobile isopen={openmenu} togglemenu={togglemenu}/>
     <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src="logo.jpeg" alt=""  />

            <ul>
                <li>
                    <a className='nav-item' href="">HOME</a>
                </li>

                <li>
                    <a className='nav-item' href="">SKILLS</a>
                </li>
                <li>
                    <a className='nav-item' href="">EXPERIENCE</a>
                </li>
                <li>
                    <a className='nav-item' href="">PROJECTS</a>
                </li>
                <li>
                    <a className='nav-item' href="">ACHIEVEMENTS</a>
                </li>
                <li>
                    <a className='nav-item' href="">ABOUT </a>
                </li>
                <li>
                    <a className='nav-item' href="">CONTACT</a>
                </li>

                <button className='contact-btn' onClick={()=>{}}>HIRE ME</button>
            </ul>
            <button className='menu-btn' onClick={togglemenu}>
                <span 
                class={"material-symbols-outlined"}
                style={{fontSize:"1.8rem"}}
                icon="fa-solid fa-bars" 
                >
                    {openmenu? <IoClose /> : <AiOutlineBars />}
            
             

                </span>
            </button>

        </div>
     </nav>
    
    </>
  )
}

