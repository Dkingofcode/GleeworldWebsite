import React from 'react'
import "../../App.css";
import Linkedin from "../../assets/Linkedin.png"; 
import twitter from "../../assets/Twitter.png";
import instagram from "../../assets/Instagram.png";
import facebook from "../../assets/facebook.png";
import googleplay from "../../assets/Googleplay.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {


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
    <div>            
              
             {/*  NewsLetter  */}

           <footer>
          
          <div className='NewsLetter'>
              <h1>Subscribe to our newsletter</h1>

              <p>Subscribe to our newsletter and join a community of health-concious individuals on a journey towards better well-being.</p>

               <div className='subscribe'>
              <input type='text' name='email' placeholder='Email'  />
              <button>Submit</button>
               </div>
          </div>
            
            {/*  NewsLetter   */}


            {/*  Footer   */}
            <div className='FooterSection'>

            <div className='left-footer'>
             <h4>Need help?</h4>
             <p>Call or send a message on Whatsapp: <span>+2348187456856</span></p>
             <p>Send a mail: <span>hello@gleeworld.com.ng</span></p>
             <p>Address: <span>Centigrade Mall, 7, Fola Osibo, Lekki Phase 1, Lagos Nigeria.</span></p>
             </div> 
          

            <div style={{ display: 'block'}} className='right-footer'>
              <h4>Social Media</h4>
              <div className='images'>
                <a><img src={Linkedin} width={15} />  </a> 
                <a> <img src={twitter} width={15} /></a>
                <a> <img src={instagram} width={15} /> </a>
                <a> <img src={facebook} width={15} /> </a>
              </div>
              <p>Download the Medfinder App</p>
              <div className='googleplaybtn'>
                <a onClick={notifySuccess}> <img width={90} src={googleplay}  /> </a> 
              </div>
              <p>2024 Gleeworld Pharmacy</p>
              <p className='footer-links'><a>Terms of Service</a> | <a>Privacy Policy</a></p>
            </div>

            </div>
          
           </footer>
           <ToastContainer />
           {/*  Footer  */}

    </div>
  
      
  
  )
}

export default Footer;
