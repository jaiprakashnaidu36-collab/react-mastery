import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/jaiprakashnaidu36-collab')
        .then(resopnse => resopnse.json())
        .then(data =>{
            console.log(data);
            setdata(data)
        })
    },[])
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white
            p-4 text-3x'>Github Followers : {data.followers}</div>
        </>
    )
}

export default Github
