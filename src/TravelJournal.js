import React from 'react'; 
import Header from './Header';
import './TravelJournal.css'



function Country(props) {
    console.log(props)
    return (
        <>
        <div className='Card'>
            <div className='Image'>
            <img src={props.imageSrc} alt={props.imageAlt} />
            </div>
            <div className='Content'>
                <div className='Location'> 
                    <img src='\Fill 219.png' alt=''/>
                    <h6>{props.CountryName}</h6>
                    <a href={props.mapLink}>
                    View on Google Maps</a>
                </div > 
            <h1>{props.title}</h1>
            <h2>{props.dates}</h2>
            <p>{props.p}</p>


            </div>

            
        </div>


        <hr></hr>

        </>
    )
}

function TravelJournal() {

    return ( <>        
        <Header />
        <Country
    imageSrc='\Rectangle 77.png'
    imageAlt="Mount Fuji"
    CountryName="Japan"
    mapLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
    title="Mount Fuji"
    dates="12 Jan, 2021 - 24 Jan, 2021"
    p="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                 Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
/>
<Country
    imageSrc='\Rectangle 77.png'
    imageAlt="Mount Fuji"
    CountryName="Japan"
    mapLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
    title="Mount Fuji"
    dates="12 Jan, 2021 - 24 Jan, 2021"
    p="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                 Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
/>
<Country
    imageSrc='\Rectangle 77.png'
    imageAlt="Mount Fuji"
    CountryName="Japan"
    mapLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
    title="Mount Fuji"
    dates="12 Jan, 2021 - 24 Jan, 2021"
    p="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                 Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
/>

</>

    )
}
export default TravelJournal ; 


