import React from 'react';
import "../../App.css";


interface contactData  {
  question: String,
  message: String,
  text: String,
  formtext: String,
  btntext: String,
  font: String
}

const Contact: React.FC<contactData> = ({ question, message, text, formtext, btntext, font })  => {
  return (
    <div>
         {/* Contact  */}

         <div className='Contact'>
              <h5>{question}</h5>

              <h1>{message}</h1>

              <h3 style={{ fontSize: font }}>{text}</h3>

           
              <form>
                <label>Enter your name</label>
                <input type='text' name='name' placeholder='Type your first name here' />
              
                <label>Enter your email address</label>
                <input type='text' name='email' placeholder='Type your email address here' />

                <label>Drop a message</label>
                <textarea rows={10} cols={10}  name='message' placeholder={`Write your ${formtext}  here`}></textarea>
              </form>
                
                <button>{btntext}</button>
           
           </div>

             {/* End of contact  */}

    </div>
  )
}

export default Contact;
