


function City({element}){

    console.log(element);


    
    


return (

    <>
    <div style={{
    }} >
        <div className="Card">
        <div className='Image'>
                <img src={element.img.src} alt={element.img.alt} />
        </div>
        <div className='Content'>
                <div className='Location'> 
                    <img src='\Fill 219.png' alt=''/>
                    <h6>{element.CountryName}</h6>
                    <a href={element.mapLink}>
                    View on Google Maps</a>
                </div > 
                    <h1>{element.title}</h1>
                    <h2>{element.dates}</h2>
                    <p>{element.text}</p>
        </div>
        </div>
        <hr />
    </div>

</>
)

}



export default City;