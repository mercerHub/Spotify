import React, { useState } from 'react'
import axios from 'axios'

function Home() {
    const [data, setData] = useState("kya hua!!!");
    useState(() => {
        axios.get('/api/home')
        .then((response) => {
            setData(response.data)
            console.log(response.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])
    return (
        <>
            <div className='bg-stone-100'>
                {data} ye hai
            </div>
        
        </>
    )
}

export default Home
