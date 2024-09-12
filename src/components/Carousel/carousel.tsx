import React from 'react';
import techCabal from "../../assets/techCabal.png";
import techhawk from "../../assets/techhawk.png";
import Te from "../../assets/te.png";
import VC4A from "../../assets/vc4a.png";
import wimbart from "../../assets/wimbart.png";
import technext from "../../assets/techNext.png";
import "../../App.css";
import "./carousel.css";


const Carousel = () => {
  return (
    <div>
      {/* Carousel  */}
      <div className='carousell'>
            <img src={wimbart} />
            <img src={techCabal} />
            <img src={techhawk} />
            <img src={Te} />
            <img src={VC4A} />
            <img src={technext} />
           </div>
           {/*  Carousel  */}
           
    </div>
  )
}

export default Carousel;
