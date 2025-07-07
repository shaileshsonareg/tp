import React, { useState } from 'react'

export default function Add() {

    const [num1, setNum1] = useState(5)
    const [num2, setNum2] = useState(6)

    const handleNum1 = (e) => {
        setNum1(Number(e.target.value))
    }

  return (
    <div>
        <input type="text" placeholder='Enter num1' onChange={handleNum1}/>
        <input type="text" placeholder='Enter num2' onChange={(e) => {setNum2(Number(e.target.value))}} />
        <h1>{num1} + {num2} = {num1 + num2}</h1>
    </div>
  )
}
