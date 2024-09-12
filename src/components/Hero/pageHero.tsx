import React from 'react'



const PageHero: React.FC<{section: string}> = ({section} ) => {
  return (
    <div className='main' style={{ background: "rgb(249, 249, 249)"}}>
      {/* Hero section  */}

      <div className='hero' style={{ background: `url(${section})`,  backgroundRepeat: "no-repeat", backgroundPosition: "left",  }}>
         
       </div>

      
    </div>
  )
}

export default PageHero;
