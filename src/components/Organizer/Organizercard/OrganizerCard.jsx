import React from 'react'
import './OrganizerCard.css'


const OrganizerCard= ({details}) => {
  return (
    <div className='organizers-card'>
        <h6>{details.title}</h6>
      
      <ul>
        {details.responsibilities.map((item)=>(
            <li key={item}>{item}</li>
        ))}
      </ul>
      <img 
         src={details.image} 

        alt={details.title} 
        className="organizers-image"
      />
  
     
    </div>
   
  )
}

export default OrganizerCard;