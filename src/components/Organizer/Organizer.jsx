import React, { useRef } from 'react';
import "./Organizer.css";
import { ORGANIZER } from '../../utils/data';
import Slider from 'react-slick';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import OrganizerCard from './Organizercard/OrganizerCard';


const Organizer = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    
    arrows: false,
    
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

  console.log(ORGANIZER);

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className='organizers-container'>
      <h1>ORGANIZER ( LEADERSHIP )</h1>

      <div className='organizers-content'>
        <div className="arrow-right" onClick={slideRight}>
          <span className='material-symbols-outlined'><SlArrowRight /></span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className='material-symbols-outlined'><SlArrowLeft /></span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {ORGANIZER.map(( item,index) => (
            <OrganizerCard key={index} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Organizer;