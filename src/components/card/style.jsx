// ReactCardSlider.js
import React, { useEffect, useRef } from 'react';
import './style.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ReactCardSlider = (props) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let intervalId;

    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        slideRight();
      }, 1000); // Adjust the interval as needed (e.g., 3000 milliseconds = 3 seconds)
    };

    const stopAutoSlide = () => {
      clearInterval(intervalId);
    };

    const slider = sliderRef.current;

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();

    return () => {
      slider.removeEventListener('mouseenter', stopAutoSlide);
      slider.removeEventListener('mouseleave', startAutoSlide);
      stopAutoSlide();
    };
  }, []);

  const slideLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
      <div id="slider" ref={sliderRef}>
        {props.slides.map((slide, index) => (
          <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
            <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
            <p className="slider-card-title">{slide.title}</p>
            <p className="slider-card-description">{slide.description}</p>
          </div>
        ))}
      </div>
      <MdChevronRight size={40} className="sli