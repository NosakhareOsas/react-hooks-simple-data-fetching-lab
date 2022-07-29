import React, {useState, useEffect} from "react";


function App(){
    const [image, setimage] = useState('');
    const [loading, setloading] = useState(false)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(Response=>Response.json())
        .then(data=>{
            setimage((img)=>img=data.message);
            setloading(true);
        })
    }, [])

    if (!loading) return <p>Loading...</p>

    return(
        <div>
            <img src={image} alt="A Random Dog"/>
        </div>
    );
}





export default App;
