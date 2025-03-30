import React from 'react'
import './Achievementscard.css'




const Achievementscard = ({details}) => {
  return (
    <div className='achievements-card'>
        <h6>{details.title}</h6>
      
      <div className="achievements-duration">{details.place}</div>
      
      <ul>
        {details.responsibilities.map((item)=>(
            <li key={item}>{item}</li>
        ))}
      </ul>
      <img 
        src={require(`../Achievementscard/images/${details.image}`)} 
        alt={details.title} 
        className="achievements-image"
      />
  
     
    </div>
   
  )
}

export default Achievementscard