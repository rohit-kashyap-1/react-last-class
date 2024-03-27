import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function Query() {


    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }

      const query = useQuery();
      const name = query.get('name')
      const email = query.get('email')
      const age = query.get('age')

      console.log(email)

      const navigate = useNavigate();

      function setQueryParam(key, value) {
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set(key, value);
        navigate(`?${queryParams.toString()}`);
      }
      function deleteQueryParam(key) {
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.delete(key);
        navigate(`?${queryParams.toString()}`);
      }

      

 function handleClick(){
    setQueryParam('name','Rohit')
    setQueryParam('email','rohit@gmail.com')
    setQueryParam('age',100)
 }

 function removeName(){
    deleteQueryParam('name')
 }
  return (
    <div>
        <h1>Query Page</h1>
        <h6>Parameter passed</h6>
        <p>{name}</p>
        <p>{email}</p>
        
        <button onClick={handleClick}>Update Params</button>
        <button onClick={removeName}>Remove Name</button>
    </div>
  )
}
