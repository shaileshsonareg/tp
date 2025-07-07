import React, { useState } from 'react'

export default function Add() {

    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(1)

    var [msg, setMsg] = useState('initial message')

    var getAdd = () => {
        // alert("i am from get Add")
        setNum1(2000)
        setMsg(`${num1} + ${num2} = ${num1 + num2}`)
    } 

  return (
    <div>
        Value of num1 is {num1}
        <br />
        <input type="text" placeholder='Enter num1' value={num1} onChange={(e) => {setNum1(e.target.value)}}/>
        <input type="text" placeholder='Enter num2' value={num2} onChange={(e) => {setNum2(e.target.value)}}/>

        <button onClick={getAdd}>Add 2 nums</button>
        <h1>
        {Number(num1) + Number(num2)}

        </h1>
    </div>
  )
}
