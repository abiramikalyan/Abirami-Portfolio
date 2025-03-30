import React from 'react'
import './ContactInfo.css'

const ContactInfo = ({logourl,text}) => {
  return (
    <div className='contact-info-card'>
          <div className="logo">
            <img src={logourl} alt={text} />
          </div>
          <p>{text}</p>

    </div>
  )
}

export default ContactInfo