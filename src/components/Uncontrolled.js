import React, { useRef } from 'react'

export default function Uncontrolled() {
    const name =  useRef('')
    function handleSubmit(e){
        e.preventDefault()

        let n = name.current.value
        console.log(n)
        name.current.value =''

    }
  return (
    <div>
        <h1>Un Controlld Component</h1>
        <form action='' onSubmit={handleSubmit}>
        <input type='text'
        placeholder='Enter name'
        ref={name}
        />
        <button>Submit</button>
        </form>
    </div>
  )
}
