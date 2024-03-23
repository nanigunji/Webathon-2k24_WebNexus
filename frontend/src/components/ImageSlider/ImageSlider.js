import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tea_Estate%2C_Darjeeling.jpg/1200px-Tea_Estate%2C_Darjeeling.jpg', // Replace with your image URLs
    'https://res.cloudinary.com/tripbae/images/f_auto,q_auto/v1655398739/Gokarna-Beach-Trek-1-2/Gokarna-Beach-Trek-1-2.jpg?_i=AA',
    'https://www.keralatourism.org/images/destination/mobile/athirappalli_and_vazhachal_waterfalls_thrissur20131031102422_79_1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9KaJUn9UYiOZTAvDu8cQa9t_7i6Vs3jI-g&usqp=CAU'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className='container'>
      <div className="slider">
        <button className='buttonslider' onClick={prevSlide}>previous</button>
        <img className="slider-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className='buttonslider' onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
