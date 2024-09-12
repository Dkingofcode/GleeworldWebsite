//import React from 'react';
import Header from '../components/header/header';
import PageHero from '../components/Hero/pageHero';
import HeroPic from "../assets/HeroSectionMed.png";
import Advert from '../components/Advert/Advert';
import Footer from '../components/Footer/footer';
 



const Mdefinder = () => {
  return (
    <div>
       <Header  />

       <PageHero section={HeroPic} />

       <Advert  />

       <Footer  />

    </div>
  )
}

export default Mdefinder;
