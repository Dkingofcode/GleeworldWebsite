import { useState } from 'react';
import Header from '../components/header/header';
import PageHero from '../components/Hero/pageHero';
import IntroPic from "../assets/FrameAbout.png";
import IntroText from "../assets/FrameTextAB.png";
import HeroPic from "../assets/HeroSectionabout.png";
import missionImg from "../assets/aboutMissionPic.png";
//import historyImg from "../assets/HISTORY.png";
import Bidemi from "../assets/FrameBidemi.png";
import Bimpe from "../assets/FrameBimpe.png";
import LinkedIn from "../assets/FrameLinkedIn.png";
import historyOne from "../assets/Frame2019.png";
import historyTwo from "../assets/Frame2020.png";
import historyThree from "../assets/Frame2021.png";
import historyFour from "../assets/Frame2022.png";
import historyFive from "../assets/Frame2023.png";
import historySix from "../assets/Frame2024.png";
import bus from "../assets/hugeiconsdeliverytruck.png";
import heart from "../assets/fluentheartcircleregular.png";
import lightbulb from "../assets/systemlightbulb.png";
import settings from "../assets/phgearlight.png";
import Advert from '../components/Advert/Advert';
import "./about.css";
import "../App.css";
import Footer from '../components/Footer/footer';




const About = () => {
//  const [frame, setFrame] = useState();
//  const [active, setActive] = useState('inactive');
  //const [btnactive, setBtnActive] = useState('Btninactive');
  //const [left, setLeft] = useState('-20px');
  //const [right, setRight] = useState('-9000px');
   const [selectedYear, setSelectedYear] = useState('2019');

// Array to store the year and corresponding image
   const historyData = [
     {year: '2019', image: historyOne, achievement: "We founded Gleeworld in 2019, our ambition was clear, which is to expand rapidly to major cities across Nigeria, Africa and other parts of the world. We started with one store in Lekki phase 1, a high brow area of Lagos. And it doubles as ou business office and inventory location"},
     {year: '2020', image: historyTwo},
     {year: '2021', image: historyThree},  
     {year: '2022', image: historyFour},
     {year: '2023', image: historyFive},
     {year: '2024', image: historySix},
     
    ];

    const currentHistory = historyData.find(item => item.year === selectedYear);

  // const List = [
  //   {img: "", btn: },
  //   {img: "", btn: },
  //   {img: "", btn: },
  //   {img: "", btn: },
  //   {img: "", btn: },
  // ]

  // const handleChange = () => {
  //   setActive('active');
     
  //   // for(let i = 0; i < ){
       
  //   // }
      
  //   setBtnActive('Btnactive');
  //   if(active === "active"){
  //     setLeft("150px");
  //     setRight("20px");
  //   }
  //   if(active === "inactive"){
  //     setLeft("10px");
  //     setRight("300px");
  //   }
  // };


  return (
    <div>
      <Header  />

      <PageHero section={HeroPic} />

      <div className='Intro'>
        <h5>Gleeworld</h5>

        <h1>We are a New Kind of Pharmacy</h1>

        <img src={IntroPic} />

        <p><img src={IntroText} /></p>
      </div>  

    <div className='mission'>
       <div className='missionText'>
           <p>What drives us</p>
           <h1>Mission Statement</h1> 
           <p>We are reinventing pharmacy from a <q>shop</q> to a <q>primary care centre</q>. By improving access to affordable 
            medicines and primary care for all in Nigeria, regardless of income levels and where they live, through Artificial Intelligence
            (AI) technology and patient centered care approach.
           </p>
       </div>

       <div className='missionImg'>
        <img src={missionImg} />
       </div>


    </div>
    
    
    <div className='Stakeholders'>
        <div className='Card'>
          <img src={Bidemi} />
           <h3>BIDEMI OJO</h3>
           <p>CO-FOUNDER/CEO Software Engineer for 13 years, Winner
            2022 Mandela Washington Fellowship - a US Government P...
           </p>

           <a><img src={LinkedIn}  /></a>
        </div>

        <div className='Card'>
          <img src={Bimpe} />
           <h3>BIMPE OJO</h3>
           <p>CO-FOUNDER/Chief Pharmacist, Pharmacist for 12 years, Former
            District Manager at HealthPlus, managed 20 pharmacies...
           </p>
           <a><img src={LinkedIn} /></a>
        </div>
    </div>
    

    <div className='Timeline'>
       <p>The journey so far</p>

       <div style={{ position: 'relative' }} className='Group'>   
         <div>
         <img  className={`active`} src={currentHistory?.image} />
        
         </div>
         
       <div className='TimeLink'>
         {historyData.map((item, index) => (
          <div key={index} onClick={() => setSelectedYear(item.year)}>
              <p>{item.year}</p>
              <span className={selectedYear === item.year ? 'Btnactive' : 'Btninactive'}></span>
           </div>
         ))}
         
         
         {/* <span></span> */}
       </div>
       
       </div>
    </div>


    <div className='Operation'>
       <p>Gleeworld Pharmacy</p>

       <h1>How We Do Healthcare Differently</h1>

       <div className='List'>

       <div className='block'>
         <img src={bus} />
         <h3>Faster</h3>
         <p>Skip tha pharmacy lines! Order your meds with a tap and get them delivered to
          your door. We patner with independent pharmacies to ensure theyre well-equipped to serve you.
         </p>
       </div>
        
       <div className='block'>
         <img src={heart} />
         <h3>Kinder</h3>
         <p>We care about you and the planet. Talk to our friendly pharmacists via  text,
          call, email, or chat. We use eco-friendly packaging to minimize our environmental impact.
         </p>
       </div>
        
       <div className='block'>
         <img src={lightbulb} />
         <h3>Smarter</h3>
         <p>Never miss a refill again. Gleeworld keeps track so you dont have to. </p>
       </div>
       
       <div className='block'>
         <img src={settings} />
         <h3>Efficient</h3>
         <p>Fast response for insurance! We work seamlessly with insurance patners to ensure 
          speedy processing of your medication orders.
         </p>
       </div>
    </div>
   </div>
    

     <Advert  />

     <Footer  />
    </div>


  );
};

export default About;
