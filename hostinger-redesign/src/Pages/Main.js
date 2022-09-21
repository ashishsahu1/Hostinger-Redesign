import React from 'react'
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection'
import LogoField from '../Components/LogoField';
import MoneyBack from '../Components/MoneyBack';
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
      <Features/>
      <MoneyBack/>
      <Footer/>
    </div>
  );
}

export default Main