import React from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import Price from '../Components/Price';

function Main() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Price/>
    </div>
  );
}

export default Main