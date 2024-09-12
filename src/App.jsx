//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Header from './components/header/header';
// import line from './assets/line.png';
// import heroimg from './assets/heroimg.png';
// import Group from "./assets/GroupPic.png";
// import hospital from "./assets/hospital.png";
// import courier from "./assets/Courier.png";
// import delivery from "./assets/Pic.png";
// import mobile from "./assets/Mobile.png";
// import agreement from "./assets/cooperate.png";
// import server from "./assets/Serverpic.png";
// import arrow from "./assets/Vector.png";
// import blackArrow from "./assets/blackVector.png";
// import techCabal from "./assets/techCabal.png";
// import techhawk from "./assets/techhawk.png";
// import Te from "./assets/te.png";
// import VC4A from "./assets/vc4a.png";
// import wimbart from "./assets/wimbart.png";
// import technext from "./assets/techNext.png";
// import smile from "./assets/smile.svg.png";
// import star from "./assets/star.svg.png";
// import users from "./assets/users.svg.png";
// import Phone from "./assets/Phonepic.png"
// import UkNigeriaTech from "./assets/UkTechHub.png";
// import ThinkMD from "./assets/ThinkMD.png";
// import wellaHealth from "./assets/wellahealth.png";
// import Medicare from "./assets/VenusMedicare.png";
// import Ventures from "./assets/V.png";
// import Elipse from "./assets/Elipse.png";
// import rectangle from "./assets/Rectangle.png";
//import { useState } from 'react';
import {  Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Mdefinder from './pages/Mdefinder';
import News from './pages/News';
import Services from './pages/Services';



function App() {
//  const [count, setCount] = useState(0);
 //  const [color, setColor] = useState('grey');
   
  //  const handleClick = () => {
  //     setColor('yellow');
  //  }

  return (
    
     
      
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/medfinder-app' element={<Mdefinder />} />
        <Route path='/news' element={<News />} />
        <Route path='/about-us' element={<About />} />
       </Routes>

 )
}
    // <>



    //   <div className='main'>
    //      <div className='container'>
           
         
           
              // {/* Hero Section   */}
{/* 
              <div className='Hero'>
                <div className='hero-text'>
                  <img src={line} alt='heroline' />
                  <h1>Medication Access<br /> Made Easy</h1>
                <p>Empowering Independent Pharmacies, Connecting communities, <br /> we are committed to strengthening the bonds between local Pharmacies
                 and the areas they serve.</p>

                 <button>
                  <a>Order Medications Now </a> <img src={blackArrow} alt='arrow button' />
                 </button>
                </div>

                <div className='hero-image'>   
                    <img src={heroimg} alt='heroimage'/>
                </div>
              </div>
 */}


     {/* Introduction  */}
          

           {/* <div className='Intro'>
               <p>Brief Introduction</p>
               <h1>Welcome to Gleeworld</h1>

               <div className='Intro-block'>
                <img src={Group} alt="Introimg" />

                <article className='intro-text'>
                  <p>As a telepharmacy and delivery startup, we dedicated
                    to enhancing access to affordable medicines and primary care, 
                    making it easier for individuals and organizations to order Medications
                    directly from our pharmacy. We also patner with small independent pharmacies,
                    empowering them with top-quality pharmaceutical products and innovative technology
                    solutions.
                  </p>
                </article>
               </div>


           </div> */}

           {/* End of Introduction  */}
           

           {/*  Services   */}

           {/* <div className='Services'>
           <p>Our Services</p>
            <h1>How can we help</h1>

               <div className='serviceGroup'>

               <div className='Service-card'>
                <img src={hospital}  alt="Introimg" />

                <article>
                  <h3>Telepharmacy Services</h3>
                  <p>We provide remote pharmaceutical care and consultations, 
                    ensuring access to expert advice and medication management from
                    the comfort of your home.
                  </p>
                  <a><p>learn more</p> <img  src={arrow} alt="arrowimg"  /></a>
                </article>
               </div>

               <div className='Service-card'>
                <img src={courier} alt="Introimg" />

                <article>
                  <h3>Delivery Services</h3>
                  <p>We provide remote pharmaceutical care and consultations, 
                    ensuring access to expert advice and medication management from
                    the comfort of your home.
                  </p>
                  <a><p>learn more</p> <img src={arrow} alt="arrowimg"  /></a>
                </article>
               </div>

               <div className='Service-card'>
                <img src={delivery} alt="Introimg" />

                <article>
                  <h3>Pharmaceutical Distribution</h3>
                  <p>We provide remote pharmaceutical care and consultations, 
                    ensuring access to expert advice and medication management from
                    the comfort of your home.
                  </p>
                  <a><p>learn more</p> <img src={arrow} alt="arrowimg"  /></a>
                </article>
               </div>

               </div>

               <button className='Servicebtn'>
                <p>Check all services <img /></p>
               </button>

           </div> */}

           {/*  End of service   */}

            
           {/*  News     */} 
           {/* <div className='News'>
               <p>Latest Developments</p>
                  <h1>News</h1>

            <div className='Newscontainer'>

           <div className='News-card'>
                <img src={mobile} alt="Introimg" />

                <article>
                  <h3>Gleeworld Pharmacy launches Medfinder app to connect users with local pharmacies.</h3>

                  <p>We provide remote pharmaceutical care and consultations, 
                    ensuring access to expert advice and medication management from
                    the comfort of your home.
                  </p>
                  <a>learn more <img src={arrow} alt="arrowimg"  /></a>
                </article>
               </div>

               <div className='News-card'>
                <img src={agreement} alt="Introimg" />

                <article>
                  <h3>Innovative technology tools by Gleeworld are transforming small independent pharmacies.</h3>
                  
                  <p>We provide remote pharmaceutical care and consultations, 
                    ensuring access to expert advice and medication management from
                    the comfort of your home.
                  </p>
                  <a>learn more <img src={arrow} alt="arrowimg"  /></a>
                </article>
               </div>

               <div className='News-card'>
                <img src={server} alt="Introimg" />

                <article>
                  <h3>Introducing Open Patient: Medfinder App Revolutionizes Patient Access to care</h3>
                  <p>We provide remote pharmaceutical care and consultations, 
                    ensuring access to expert advice and medication management from
                    the comfort of your home.
                  </p>
                  <a>learn more <img src={arrow} alt="arrowimg"  /></a>
                </article>
               </div>

               </div>

           
           <div className='Newsbtn'>
            Read news
            <img src={blackArrow} alt="news" />
            </div>
           
           </div> */}

           {/*    End of news  */}

           {/* Carousel  */}
           {/* <div className='carousell'>
            <img src={wimbart} />
            <img src={techCabal} />
            <img src={techhawk} />
            <img src={Te} />
            <img src={VC4A} />
            <img src={technext} />
           </div>
            Carousel  */}
            
           
           {/*  Achievements  */}
{/* 
           <div className='Achievements'>
              <div className='Stats'>
                <h1>Heres why we are better</h1>

                 <p>Discover the unique advantages that set Gleeworld apart. From innovative
                  solutions to exceptional customer service, we deliver a superior experience
                  that exceeds expectations.
                 </p>

                  <div className='Numbers'>

                 <div>
                 <span>100k+</span>
                 <p>Pescription Delivered</p>
                 </div>

                 
                 <div>
                 <span>15k+</span>
                 <p>Patients Treated</p>
                 </div>

                 
                 <div>
                 <span>150+</span>
                 <p>Pharmacies & Hospital Supplied</p>
                 </div>
                
                </div>

              </div>

              <div className='history'>

               <div className='col1'>
                  <img src={star} alt={history} />

                  <article>
                    <h2>5+ years experience</h2>
                    <p>Our system facilitates seamless collaborations and information sharing for healthcare professionals.</p>
                  </article>
              </div>

              <div className='col2'>
              <img src={smile} />

              <article>
              <h2>Efficient process, Optimal result </h2>
              <p>Our streamlined approach guarantees swift, efficient and ensures rapid delivery.</p>
              </article>
              </div>   

              <div className='col3'>
                <img src={users} /> 
               
               <article>
              <h2>Professional medical team</h2>
              <p>Our team of highly qualified medical experts is dedicated to providing top-tier care.</p>
              </article>
              </div>
               

              </div>
           </div>
             */}

            {/* End of achievements */}


           
           {/* Patners   */}

{/* 
           <div className='Patners'>
              <p>Business Patners</p>

              <h1>Collaborations</h1>

              <div className='carousel'>

                <img src={UkNigeriaTech} />
                <img src={ThinkMD}  />
                <img src={wellaHealth}  />
                <img src={Medicare}  />
                <img src={Ventures}  />

              </div> */}

              {/*  Advertisement  */}

              {/* <div className='Advert'>
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
        */}
       {/*  End of patners */}


         

         {/*  Testimonials  */}

           {/* <div className='Testimonials'>
             <h5>Customers Reviews</h5>

             <h1>Testimonial</h1>
                  
              <div className='slider'>
                <img src={rectangle} alt='picture of a broken rectangle'  />
               <span>&#8221;</span>   */}
                {/* <q className='Quotation'>Gleeworld Pharmacy has transformed our operations.
                   Their technology tools are a game-changer for small
                   pharmacies like ours.
                </q> */}
                {/* <span>&#8221;</span> */}
                {/* <p>Customer Name</p>
              </div>

              <div className='buttons'>
                <button onClick={handleClick} style={{ color: color}}> &gt; </button>

                <button onClick={handleClick} style={{ color: color}}> &lt; </button>
              </div>
           </div> */}

           {/* End of testimonials */}


             {/* Contact  */}
{/* 
           <div className='Contact'>
              <h5>Get in Touch</h5>

              <h1>Contact Us</h1>

              <h3>Ready to Elevate your Pharmacys Operation?</h3>

              <p>Contact us today to explore our diverse range of products and discover how our innovative solutions can meet your specific needs.</p>
           
              <form>
                <label>Enter your name</label>
                <input type='text' name='name' placeholder='Type your first name here' />
              
                <label>Enter your email address</label>
                <input type='text' name='email' placeholder='Type your email address here' />

                <label>Drop a message</label>
                <textarea rows={10} cols={10} type='text' name='message' placeholder='Write your message here'></textarea>
              </form>
                
                <button>Send message now</button>
           
           </div> */}

             {/* End of contact  */}

             
             
             {/*  NewsLetter  */}
{/* 
           <footer>
          
           <div className='NewsLetter'>
               <h1>Subscribe to our newsletter</h1>

               <p>Subscribe to our newsletter and join a community of health-concious individuals on a journey towards better well-being.</p>

                <div>
               <input type='text' name='email' placeholder='Email'  />
               <button>Submit</button>
                </div>
           </div> */}
             
             {/*  NewsLetter   */}


             {/*  Footer   */}
             {/* <div>

             <div className='left-footer'>
              <h4>Need help?</h4>
              <p>Call or send a message on Whatsapp: <span>+2348187456856</span></p>
              <p>Send a mail: <span>hello@gleeworld.com.ng</span></p>
              <p>Address: Centigrade Mall, 7, Fola Osibo, Lekki Phase 1, Lagos Nigeria.</p>
              </div> 
           

             <div style={{ display: 'block'}} className='right-footer'>
               <h4>Social Media</h4>
               <div className='images'>

               </div>
               <p>Download the Medfinder App</p>
               <div className='googleplaybtn'>

               </div>
               <p>2024 Gleeworld Pharmacy</p>
               <p className='footer-links'><a>Terms of Service</a> | <a>Privacy Policy</a></p>
             </div>

             </div>
           
            </footer>
 */}
            {/*  Footer  */}

    //  </div>
    //  </div>
         
    // </>
 

export default App;
