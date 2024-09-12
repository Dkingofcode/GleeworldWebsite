import React from 'react';
import line from '../../assets/line.png';
import blackArrow from "../../assets/blackVector.png";
import Phone from "../../assets/Phonepic.png"
import Elipse from "../../assets/Elipse.png";
import "../../App.css";
import "./advert.css";

const Advert = () => {
  return (
    <div>
      
      {/*  Advertisement  */}

      <div className='Advert'>
                <img className='line' src={line} alt="crossimg" />
                <article>
                  <h1>Enjoy 15% off your first<br /> monthly orders</h1>

                  <p>Take advantage of a 15% discount on your initial monthly orders and <br />
                  discover unparalleled value in our premium products and services.<br /> This exclusive
                  offer is designed to provide you with a seamless<br /> introduction to our commitment to quality, affordability, and<br />
                  exceptional customer care.</p>
                
                  <button>
                    Download Medfinder
                     <img src={blackArrow}  />
                  </button> 
                </article>
                
                <img src={Phone} alt="Phone image" />

                <img className='ellipse' src={Elipse} alt='Three bullet points'  />  
              </div>

           </div>

  );
}

export default Advert;
