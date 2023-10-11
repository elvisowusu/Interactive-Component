import React from 'react'
import '../styles/Submitted.css'
import image from '../assets/thankyou.svg'


export const Submitted =({rated})=>{
    
    return(
        <div className='mainPage'>
            
           <img className='thankYouIcon' src={image} alt="" />

           <div className='selectMessage'>
            <p className='message'>
                You selected {rated} out of 5
            </p>
           </div>

           <div className='thankYouMessage'>
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time to give a rating.<br/>
                If you ever need more support, don't hesitate to get in touch!
            </p>
           </div>

        </div>
    );
};