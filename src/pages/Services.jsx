import  { useState } from 'react';
import Header from '../components/header/header';
import PageHero from '../components/Hero/pageHero';
import HeroPic from "../assets/HeroSectionservices.png";
import Advert from '../components/Advert/Advert';
import Footer from '../components/Footer/footer';
import Nurse from "../assets/Nurse.png";
import MedfinderApp from "../assets/MedfinderApp.png";
import TestAd from "../assets/TestAd.png";
import DrugStore from "../assets/DrugStore.png";
import Prescriptions from "../assets/Prescriptions.png";
import downIcon from "../assets/IconDown.png";
import arrow from "../assets/Vector.png";
import "./services.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);  

   // Function to toggle the dropdown
   const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if clicked again, open if not
   };

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


   const faqData = [
    { question: "What are Telepharmacy Services?", answer: "Telepharmacy services allow remote consultation and prescription dispensing."},
    { question: "What do Delivery Services Cover?", answer: "Delivery services cover the transport of medications and healthcare products." },
    { question: "What is Pharmaceutical Distribution?", answer: "Pharmaceutical distribution is the process of transporting medications from manufacturers to pharmacies." },
    { question: "What is the Medfinder App?", answer: "Medfinder is an app that helps you locate pharmacies and track medications." },
    { question: "How long does it take to deliver?", answer: "Delivery times vary, typically between 1 to 3 days depending on location." },
   ]

  return (
    <div>
      <Header  />

      <PageHero section={HeroPic} />

       <div className='services'>
         
         <div className='article'>
           <img src={Nurse} />
           <p>01.</p>
           <h3>Telepharmacy Services</h3>
           <p>Recieve expert healthcare advice from the comfort of your home.
            Consult remotely with our licensed pharmacists to get the medications and 
            guidance you need, skipping the wait times at traditional pharmacies. 
            Schedule a Telepharmacy Consultation Today!
           </p>

           <button onClick={notifySuccess}>
            Chat Now <img src={arrow} />
           </button>
         </div>

         <div className='article'>
           <img src={Prescriptions} />
           <p>02.</p>
           <h3>Telepharmacy Services</h3>
           <p>Order medications for yourself, your family, or your employees
            with ease. Never miss a dose again. Our reliable delivery service 
            ensures your medications arrive safely and promptly at your doorstep.
           </p>

           <button onClick={notifySuccess}>
            Submit Order <img src={arrow} />
           </button>
         </div>
            
         <div className='article'>
           <img src={DrugStore} />
           <p>03.</p>
           <h3>Pharmaceutical Distribution</h3>
           <p>We are a trusted patner for independent pharmacies across
            Nigeria. Our comprehensive range of pharmaceutical products
            ensures they have the supplies needed to serve their communities
            effectively. Are you a pharmacy owner? Learn how Gleeworld can improve
            your business!
           </p>

           <button onClick={notifySuccess}>
            Submit Order <img src={arrow} />
           </button>
         </div>

         <div className='article'>
           <img src={TestAd} />
           <p>04.</p>
           <h3>Technology Tools</h3>
           <p>Elevate your pharmacys operations. Our innovative technology solutions
            streamline tasks, optimize inventory management, and enhance customer engagement
            for small pharmacies. Boost your pharmacys efficiency with Gleeworlds Technology Tools!
           </p>

           <button onClick={notifySuccess}>
            Check Now <img src={arrow} />
           </button>
         </div>

         <div className='article'>
           <img src={MedfinderApp} />
           <p>05.</p>
           <h3>Medfinder App (Coming Soon!)</h3>
           <p>Find what you need, conveniently. Our upcoming Medfinder App connects
            you with local pharmacies, providing real-time inventory and directions,
            making it easy to locate and order medications. Sign up to be notified when
            Medfinder launches!
           </p>

           <button onClick={notifySuccess}>
            Sign Up <img src={arrow} />
           </button>
         </div>

    </div>
          
          <div className='FAQ'>
            <h5>Do you have questions?</h5>

            <h1>FAQ</h1>

            {faqData.map((item, index) => (
              <div className='dropdown' key={index}>  
                <div className='dropdown-header' onClick={() => toggleDropdown(index)}>
                  <h4>{item.question}</h4>
                  <img src={downIcon} alt='dropdown icon' className={`icon ${openIndex === index ? 'open' : ''}`} />
                  </div>

                  {openIndex === index && (
                    <div className='dropdown-content'>
                     <p>{item.answer}</p>
                    </div>
                  )}
              </div>
            ))}


            {/* <div className='dropdown'>
              <h4>What are Telepharmacy Services?</h4>
               <img src={downIcon} />
            </div>
             
            <div className='dropdown'>
              <h4>What do Delivery Services Cover? </h4>
              <img src={downIcon} />
            </div>
            
            <div className='dropdown'>
              <h4>What is Pharmaceutical Distribution?</h4>
              <img src={downIcon} />
            </div>
            
            <div className='dropdown'>
              <h4>What is the Medfinder App?</h4>
              <img src={downIcon} />
            </div>
            
            <div className='dropdown'>
              <h4>How long does it take to deliver?</h4>
              <img src={downIcon} />
            </div> */}
            
          
       </div>

       <Advert  />

       <Footer />

       <ToastContainer  />
    </div>
  )
}

export default Services;
