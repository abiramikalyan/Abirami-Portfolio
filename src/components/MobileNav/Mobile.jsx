import React from 'react'
import './Mobile.css';

const Mobile = ({isopen,togglemenu}) => {

  return (
    <div>
        <div 
        className ={`mobile-menu ${isopen ? "active" :"" }`}
        onClick={togglemenu}
        
        >

         <nav className='mobile-menu-container'>

                    <img className='logo' src="logo.jpeg" alt="" />
        
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
                            <a className='nav-item' href="">CONTACT</a>
                        </li>
        
                        <button className='contact-btn' onClick={()=>{}}>HIRE ME</button>
                    </ul>
        
                
             </nav>
            
        
    
            

        </div>


    </div>
  )
}

export default Mobile;