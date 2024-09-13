import React from 'react'



const PageHero: React.FC<{section: string}> = ({section} ) => {
  return (
    <div className='main'  style={{ width: "100%", background: "rgb(249, 249, 249)"}}>
      {/* Hero section  */}

      <div className='hero' style={{ width: "80%" }}>
         <img style={{  width: "125%", height: "100%", margin: "0 auto" }} src={`${section}`} />
       </div>

      
    </div>
  )
}

export default PageHero;
