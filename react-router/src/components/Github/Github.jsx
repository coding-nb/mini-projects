import React, { useEffect, useState } from 'react'

export default function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/NamanBharsakale')
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github Followers: {data.followers} 
    <img className='text-center' src={data.awatar_url} alt='Git picture' width={300}/>
    </div>
  )
}
