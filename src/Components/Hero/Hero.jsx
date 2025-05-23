
import React from 'react';
import './Hero.css';
import hero_image from '../Assets/image.jpeg'; // Ensure path is correct

const Hero = () => {
  const handleShopNowClick = () => {
    // Navigate to the shop page
    window.location.href = '/mens';
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h3 className="hero-subtitle">New Arrivals</h3>
        <h1 className="hero-headline">Luxury Fashion Awaits You</h1>
        <p className="hero-description">
          Discover timeless elegance and redefine your style with our latest collection.
        </p>
        <button className="hero-latest-btn" onClick={handleShopNowClick}>
          Shop Now
        </button>
      </div>

      <div className="hero-right">
        <div className="hero-image-container">
          <img src={hero_image} alt="hero" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
