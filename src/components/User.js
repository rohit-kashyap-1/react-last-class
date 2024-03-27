import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function User() {
    const [user,setUser] = useState({})
    const {id} = useParams()
   
    useEffect(function(){
        fetch('https://dummyjson.com/users/'+id).then(response => response.json()).then((data) => {

        setUser(data)
        console.log(data)

    })
    },[])

  return (
    <div>
        <h1>User Details</h1>
        <div className='card'>
            <div className='card-body'>
            <h1 className='display-4'>{user.firstName}</h1>
            <img src={user.image} />
            </div>
        </div>
    </div>
  )
}
