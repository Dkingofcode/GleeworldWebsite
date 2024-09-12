import React, { useState } from 'react';
import mainLogo from '../../assets/gleeworldlogo.png';
import whatsapp from '../../assets/logowhatsappicon.png';
import './header.css';
import '../../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (index: number) => {
    setCurrentIndex(index); // Update the selected index to trigger color change
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className='navigation'>
        <div className='Navlogo'>
          <img src={mainLogo} alt='logo' />
        </div>

        {/* Hamburger Button */}
        <button  className='hamburger' onClick={toggleMenu}>
          &#9776;
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link 
                onClick={() => handleChange(0)} 
                style={{ textDecoration: "none" }} 
                to="/">Home</Link>
            </li>
            <li>
              <Link 
                onClick={() => handleChange(1)} 
                style={{  textDecoration: "none" }} 
                to="/services">Services</Link>
            </li>
            <li>
              <Link 
                onClick={() => handleChange(2)} 
                style={{  textDecoration: "none" }} 
                to="/medfinder-app">Medfinder App</Link>
            </li>
            <li>
              <Link 
                onClick={() => handleChange(3)} 
                style={{  textDecoration: "none" }} 
                to="/news">News</Link>
            </li>
            <li>
              <Link 
                onClick={() => handleChange(4)} 
                style={{  textDecoration: "none" }} 
                to="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>

        <div className='chatBtn'>
          Chat with a pharmacist <img src={whatsapp} alt='whatsapp icon' />
        </div>
      </div>
    </div>
  );
}

export default Header;
