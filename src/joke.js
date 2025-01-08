import React from 'react';





function Joke(props) {
return ( 
<div className='joke'>
<p> Question : { props.question}</p>
<p> Punchline : {props.punchline} </p>
<p> Upvotes : {props.Upvotes} </p>
<p> Downvotes : {props.Downvotes} </p>
<div></div>
<hr></hr>


</div>
)

}

function Jokes() {
    return (
        <div>
            <Joke 
                question="Why don't scientists trust atoms?" 
                punchline="Because they make up everything!" 
                Upvotes={5}
                Downvotes={1}
                comments={[
                    {author: "Mounira", text: "Classic science humor!"},
                    {author: "Bilal", text: "Heard this one before, but still good."}
                ]}
            />
            <Joke 
                question="What do you call fake spaghetti?" 
                punchline="An impasta!" 
                Upvotes={9}
                Downvotes={4}
                comments={[
                    {author: "Katia", text: "ma9aroun ta3 li9ama"},
                    {author: "Lamis", text: "haha j'aime les pates"}
                ]}
            />
            <Joke 
                question="Why did the scarecrow win an award?" 
                punchline="Because he was outstanding in his field!" 
                Upvotes={8}
                Downvotes={3}
                comments={[
                    {author: "Moha", text: "A clever play on words!"},
                    {author: "BADIS", text: "Perfect for farm-themed jokes."}
                ]}
            />
            <Joke 
                question="Why don't skeletons fight each other?" 
                punchline="They don't have the guts." 
                Upvotes={15}
                Downvotes={2}
                comments={[
                    {author: "Zoulikha", text: "funny!"},
                    {author: "Hamid", text: "Alger 16"}
                ]}
            />
            <Joke 
                question="What do you call cheese that isn't yours?" 
                punchline="Nacho cheese!" 
                Upvotes={10}
                Downvotes={5}
                comments={[
                    {author: "soumoum", text: "dja3t!"},
                    {author: "Mina", text: "t3ayi had la blague."}
                ]}
            />
        </div>
    )
}


export default Jokes;
