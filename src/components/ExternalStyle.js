import React from 'react';
import fontawesome from 'fontawesome-4.7';
const book="assets/images/booking.gif";

function External()
{
    return (
        <>
        <section id='main-section'>
         <div className='content1'>
            <h1>Book Your Appointment with Us</h1>
            <hr align="left" />
            <p><b><span className='fa fa-map-marker'></span>&nbsp; Hospitals Address :</b>Kalawad Road Near St. Mary's High School, <br /> Rajkot, Gujarat 360007</p>
            
            <p><b><span className='fa fa-inbox'></span>&nbsp;Email us :</b><a href='mailto:info@wookard.com'>info@wookard.com</a></p>

            <p><b><span className='fa fa-phone'></span>&nbsp; Contact us :</b>(+91)9998003879</p>
            
            <img src={book} alt='bookimg' title='book appointment' />
         </div>
         <div className='content2'>
         <h1>Booking Form</h1>
            
            <form>
                <input type="text" name='name' placeholder='Name *' required />
                <br/><br/> 
                <input type="email" name='name' placeholder='Email *' required />
                <br/><br/> 
                <input type="text" name='name' placeholder='Phone *' required />
                <br/><br/> 
                <textarea type="message" name='name' placeholder='Message *' required ></textarea>
                <br/><br/> 
                <input type="submit" name='book' value="Book Appointment" />
                <input type="Reset" name='reset' value="Reset" />
                <br/><br/> 

                   
             </form>
         </div>
        </section>
        </>
    )
}

export default External;