import React, { useState } from 'react'

export const Add = () => {

    const [num1, setNum1] = useState(1);    
    const [num2, setNum2] = useState(1);
    const [output, setOutput] = useState("")

    const getAdd = () => {
        setOutput(`${num1} + ${num2} = ${num1 + num2}`)
    }

  return (
    <div>

        <input type="text" onChange={(e) => setNum1(Number(e.target.value))} />                  
        <input type="text" onChange={(e) => setNum2(Number(e.target.value))} />          
        <button onClick={() => getAdd() }>Get Addition</button>

        <h1>
            {output}
        </h1>
    </div>
  )
}
