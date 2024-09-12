import React from 'react'



const PageHero: React.FC<{section: string}> = ({section} ) => {
  return (
    <div className='main'  style={{ width: "100%", background: "rgb(249, 249, 249)"}}>
      {/* Hero section  */}

      <div className='hero' style={{ width: "100%", background: `url(${section})`,  backgroundRepeat: "no-repeat", backgroundPosition: "left",  }}>
         
       </div>

      
    </div>
  )
}

export default PageHero;
