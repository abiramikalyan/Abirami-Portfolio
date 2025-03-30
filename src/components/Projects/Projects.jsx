import React, { useRef } from 'react';
import "./Projects.css";
import { PROJECTS } from '../../utils/data';
import Slider from 'react-slick';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Projectcard from './Projectcard/Projectcard';


const Projects = () => {
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

  console.log(PROJECTS);

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className='projects-container'>
      <h1>PROJECTS</h1>

      <div className='projects-content'>
        <div className="arrow-right" onClick={slideRight}>
          <span className='material-symbols-outlined'><SlArrowRight /></span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className='material-symbols-outlined'><SlArrowLeft /></span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map(( item,index) => (
            <Projectcard key={index} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;

