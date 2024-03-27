import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([])

    //it runs every time a component state changes
    useEffect(function () {
        //https://dummyjson.com/users
        fetch('https://dummyjson.com/users').then(response => response.json()).then((data) => {

            setUsers(data.users)

        })
        console.log('hello')
    }, [])
    return (
        <div>
            <h1>Users</h1>
            <div className='container'>

                <div className='row'>
                    {users.map((item, key) => {
                        return <div key={key} className='col-md-3 mb-3'>
                                    <Link to={'/users/'+item.id}>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <img src={item.image} className='img-fluid' />
                                                <h5>{item.firstName} {item.lastName}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                    })}

                </div>
                
            </div>
        </div>
    )
}
