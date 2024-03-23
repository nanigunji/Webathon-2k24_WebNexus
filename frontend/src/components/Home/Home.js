import React from 'react';
import travel from '../../assets/travel.mp4'
import './Home.css'
import ImageSlider from '../ImageSlider/ImageSlider';

const Home = () => {
  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center h-100  bg-gradient">
              <h1 className='heading text-white'>Discover the hidden gems of nature.</h1>
          <ImageSlider />
    </div>
  );
};

export default Home;
