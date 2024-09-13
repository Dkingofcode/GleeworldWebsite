import React, { useState, useEffect } from 'react';
import mainLogo from '../../assets/gleeworldlogo.png';
import whatsapp from '../../assets/logowhatsappicon.png';
import './header.css';
import '../../App.css';
import { Link, useLocation } from 'react-router-dom';



const Header = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [color, setColor] = useState('orange');
  const [defaultColor, setDefaultColor] = useState('black');


  const location = useLocation();
  const phoneNumber = '08033875224'; //     
  const num = 5;
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert('Phone number copied to clipboard');
      console.log("Copy Phone Number")
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    })
  }

  const handleChange = (index: number) => {
    setCurrentIndex(index); // Update the selected index to trigger color change
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };
//  let index;

  // const handleColorChange = () => {
  //   for(let i = 1; i < num; i++){
  //     if ( === 1){
  //       setDefaultColor(color);
  //     }
  //     if(index === 2){

  //     }
  //     if(index === 3){

  //     }
  //     if(index === 4){

  //     }
  //   }
  // }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Open menu");
  };

  // useEffect(() => {
  //    setCurrentIndex(currentIndex);
  // })

  return (
    <div className='header'>
      <div className='navigation'>
        <div className='Navlogo'>
         <a href='/'><img  src={mainLogo} alt='logo' /></a> 
        </div>



        {/* Hamburger Button */}
        <button  className='hamburger' onClick={toggleMenu}>
          &#9776;
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link
                         
                onClick={() => { handleChange(0);  }} 
                style={{ textDecoration: "none",   }} 
                to="/">Home</Link>
            </li>
            
            <li>
              <Link
                 
                onClick={() => { handleChange(1); }} 
                style={{  textDecoration: "none", color: currentIndex === 1 && location.pathname === '/services' ? color : defaultColor }} 
                to="/services">Services</Link>
            </li>
            <li>
              <Link 
              
                onClick={() => {handleChange(2) }} 
                style={{  textDecoration: "none", color: currentIndex === 2 && location.pathname === '/medfinder-app' ? color : defaultColor }} 
                to="/medfinder-app">Medfinder App</Link>
            </li>
            <li>
              <Link 
              
                onClick={() => { handleChange(3)}} 
                style={{  textDecoration: "none", color: currentIndex === 3 && location.pathname === '/news' ? color : defaultColor }} 
                to="/news">News</Link>
            </li>
            <li>
              <Link 
              
                onClick={() => { handleChange(4)}} 
                style={{  textDecoration: "none", color: currentIndex === 4 && location.pathname === '/about-us' ? color : defaultColor }} 
                to="/about-us">About Us</Link>
            </li>

        <div className='chatBtn-mobile' onClick={copyPhoneNumber} style={{ cursor: 'pointer'}}>
          <img src={whatsapp} alt='whatsapp icon' /> Chat
        </div>
          </ul>
        </nav>

        <div className='chatBtn' onClick={copyPhoneNumber}>
          Chat with a pharmacist <img src={whatsapp} alt='whatsapp icon' />
        </div> 
      </div>
    </div>
  );
}

export default Header;
