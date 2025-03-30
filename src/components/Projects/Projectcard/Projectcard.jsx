import React from 'react'
import './Projectcard.css'




const Projectcard= ({details}) => {
  return (
    <div className='projects-card'>
        <h6>{details.title}</h6>
      
      <ul>
        {details.responsibilities.map((item)=>(
            <li key={item}>{item}</li>
        ))}
      </ul>
      <img 
        src={require(`../Projectcard/images/${details.image}`)} 
        alt={details.title} 
        className="projects-image"
      />
  
     
    </div>
   
  )
}

export default Projectcard;