import React from 'react';
import line from '../../assets/line.png';
import blackArrow from "../../assets/blackVector.png";
import Phone from "../../assets/Phonepic.png"
import Elipse from "../../assets/Elipse.png";
import "../../App.css";
import "./advert.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Advert = () => {
  const notifySuccess = () => {
    toast.success('Coming soon!', {
      position: "top-right"
    });
  };

  const notifyError = () => {
    toast.error('Failed to copy phone number!', {
      position: "top-right",
    });
  };


  return (
    <div >
      
      {/*  Advertisement  */}

      <div className='Advert'>
                <img className='line' src={line} alt="crossimg" />
                <article>
                  <h1>Enjoy 5% off your first<br /> monthly orders</h1>

                  <p>Take advantage of a 15% discount on your initial monthly orders and <br />
                  discover unparalleled value in our premium products and services.<br /> This exclusive
                  offer is designed to provide you with a seamless<br /> introduction to our commitment to quality, affordability, and<br />
                  exceptional customer care.</p>
                
                  <button onClick={notifySuccess}>
                    Download Medfinder
                     <img src={blackArrow}  />
                  </button> 
                </article>
                
                <img className='phone' src={Phone} alt="Phone image" />

                <img className='ellipse' src={Elipse} alt='Three bullet points'  />  
              </div>

              <ToastContainer  />
           </div>

  );
}

export default Advert;
