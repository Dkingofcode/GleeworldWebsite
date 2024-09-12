//import React from 'react';
import Header from "../components/header/header";
//import Union from "../assets/Union.png";
//import HeroPic from "../assets/HeroSection.png";
import "../App.css";
import "./news.css";
import NewsCard from '../components/NewsCard/NewsCard';
import Carousel from '../components/Carousel/carousel';
import Advert from '../components/Advert/Advert';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/footer';
//import PageHero from '../components/Hero/pageHero';


const News = () => {

    
 
    return (
    <div>

    <Header  />
      
      {/* Hero section  */}

       <div className='hero'>
         {/* <img src={Union} alt='image of broken cross'  />
          */}
       </div>

       <div className='trending'>
        <h4>Trending</h4>

        <h1>Top Stories</h1>
       
        <NewsCard  />  

        <NewsCard  />  
        
       </div>
      
      <Carousel  />
      
      <Advert  />

  
      <div>
        <Contact question={"DO you have credible health news?"} 
        message={"Share with us"} 
        text={"Please provide as many details as possible to help us understand and verify the  information. Our editorial team will review your submission and get back to you promptly"} 
        font={"12px"}
        formtext={"news"}
        btntext={"Send news now"}
        />
          
      </div>

    <Footer  /> 
    </div>


  )
}

export default News;
