import React, { useRef } from 'react';
import "./Experience.css";
import { EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Experience = () => {
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
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      }
    ]
  };
  console.log(EXPERIENCE);

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className='experience-container'>
      <h1>EXPERIENCE</h1>

      <div className='experience-content'>
        <div className="arrow-right" onClick={slideRight}>
          <span className='material-symbols-outlined'><SlArrowRight /></span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className='material-symbols-outlined'><SlArrowLeft /></span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {EXPERIENCE.map(( item) => (
            <ExperienceCard key={item} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;
