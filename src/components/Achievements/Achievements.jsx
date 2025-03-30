import React, { useRef } from 'react';
import "./Achievements.css";
import { ACHIEVEMENTS } from '../../utils/data';
import Slider from 'react-slick';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Achievementscard from './Achievementscard/Achievementscard';


const Achievements = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
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

  console.log(ACHIEVEMENTS);

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className='achievements-container'>
      <h5>ACHIEVEMENTS</h5>

      <div className='achievements-content'>
        <div className="arrow-right" onClick={slideRight}>
          <span className='material-symbols-outlined'><SlArrowRight /></span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className='material-symbols-outlined'><SlArrowLeft /></span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {ACHIEVEMENTS.map(( item,index) => (
            <Achievementscard key={index} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Achievements;
