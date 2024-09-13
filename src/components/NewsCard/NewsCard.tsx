import React from 'react';
import agreement from "../../assets/cooperate.png";
import server from "../../assets/Serverpic.png";
import arrow from "../../assets/Vector.png";
import blackArrow from "../../assets/blackVector.png";
import mobile from "../../assets/Mobile.png";





const NewsCard = () => {
  return (
    <div>
      
         {/*  News     */} 
         <div className='News'>


            <div className='Newscontainer'>

           <div className='News-card'>
                <img src={mobile} alt="Introimg" />

                <article>
                  <h3 style={{ fontSize: "20px" }}>Gleeworld Pharmacy launches Medfinder app to connect users with local pharmacies.</h3>

                  <p style={{ fontSize: "16px" }}>We provide remote pharmaceutical care and consultations, 
                    ensuring access to expert advice and medication management from
                    the comfort of your home.
                  </p>
                  <a>learn more <img src={arrow} alt="arrowimg"  /></a>
                </article>
               </div>

               <div className='News-card'>
                <img src={agreement} alt="Introimg" />

                <article>
                  <h3 style={{ fontSize: "20px" }}>Innovative technology tools by Gleeworld are transforming small independent pharmacies.</h3>
                  
                  <p style={{ fontSize: "16px" }}>We provide remote pharmaceutical care and consultations, 
                    ensuring access to expert advice and medication management from
                    the comfort of your home.
                  </p>
                  <a>learn more <img src={arrow} alt="arrowimg"  /></a>
                </article>
               </div>

               <div className='News-card'>
                <img src={server} alt="Introimg" />

                <article>
                  <h3 style={{ fontSize: "20px" }}>Introducing Open Patient: Medfinder App Revolutionizes Patient Access to care</h3>
                  <p style={{ fontSize: "16px" }}>We provide remote pharmaceutical care and consultations, 
                    ensuring access to expert advice and medication management from
                    the comfort of your home.
                  </p>
                  <a>learn more <img src={arrow} alt="arrowimg"  /></a>
                </article>
               </div>

               </div>

           
           
           
           </div>

           {/*    End of news  */}


    </div>
  )
}

export default NewsCard;
