import React from 'react';





function Joke(props) {
return ( 
<div className='joke'>
<p> Question : { props.question}</p>
<p> Punchline : {props.punchline} </p>
<hr></hr>


</div>
)

}

function Jokes() {
    return(
        <div>
            <Joke 
                question="Why don't scientists trust atoms?" 
                punchline="Because they make up everything!" 
            />
            <Joke 
                question="What do you call fake spaghetti?" 
                punchline="An impasta!" 
            />
            <Joke 
                question="Why did the scarecrow win an award?" 
                punchline="Because he was outstanding in his field!" 
            />
            <Joke 
                question="Why don't skeletons fight each other?" 
                punchline="They don't have the guts." 
            />
            <Joke 
                question="What do you call cheese that isn't yours?" 
                punchline="Nacho cheese!" 
            />
        </div>


)
}

export default Jokes;
