import React from 'react'; 
import Header from './Header';
import './TravelJournal.css'



function Country(props) {
    console.log(props)
    return (
        <>
        <div className='Card'>
            <div className='Image'>
                <img src='\Rectangle 77.png' alt=''/>
            </div>
            <div className='Content'>
                <div className='Location'> 
                    <img src='\Fill 219.png' alt=''/>
                    <h6>JAPAN</h6>
                    <a href='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'>
                    View on Google Maps</a>
                </div > 
            <h1>Mount Fuji</h1>
            <h2>12 Jan, 2021 - 24 Jan, 2021</h2>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
            Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>


            </div>

            
        </div>


        <hr></hr>

        </>
    )
}

function TravelJournal() {

    return ( <>        
        <Header />
        <Country />
</>

    )
}
export default TravelJournal ; 
/*  <img 
src={props.img.src} 
alt={props.img.alt}
/>
<div className="info">
<img 
src="../images/marker.png" 
alt="map marker icon"
/>
<span className="country">{props.country}</span>
<a href={props.googleMapsLink}>View on Google Maps</a>
<h2 className="entry-title">{props.title}</h2>
<p className="trip-dates">{props.dates}</p>
<p className="entry-text">{props.text}</p>
</div>**/ 
