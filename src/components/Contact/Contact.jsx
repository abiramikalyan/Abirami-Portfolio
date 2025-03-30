import React from 'react'
import './Contact.css'
import ContactInfo from './ContactInfo/ContactInfo'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <section className='contact-container'>
        <h1>CONTACT ME</h1>
        <div className="contact-content">
             <div style={{flex:1}}>
                 <ContactInfo
                  logourl= "mail-logo1.png"
                  text="abiramikalyan2005@gmail.com"
                 
                 />

                 <ContactInfo

                 logourl= "github-logo1.png"
                 text="https://github.com/abiramikalyan/Abirami.git"
                  />

             </div>
             <div style={{flex:1}}>
              <ContactForm/>
             </div>

        </div>



    </section>
  )
}

export default Contact