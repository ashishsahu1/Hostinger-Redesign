import React from 'react'
import HeroSection from '../Components/HeroSection'
import LogoField from '../Components/LogoField';
import Navbar from '../Components/Navbar'
import Price from '../Components/Price';
import Search from '../Components/Search';
import ServiceList from '../Components/ServiceList';

function Main() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LogoField/>
      <Price/>
      <ServiceList/>
      <Search/>
    </div>
  );
}

export default Main