import React, { useState } from 'react'

export const Sqr = () => {

    const [num, setNum] = useState(1)
    const [output, setOutput] = useState("")

    const getSquare = () => {
        setOutput(`Square of ${num} is ${num * num}`)
    }

  return (
    <div>
        <input type="text" onChange={(e) => setNum(e.target.value) } />

        <button onClick={() => getSquare() }>Get Square</button>

        <h1>
        {/* Square of {num} is {num * num} */}
        {output}
        </h1>

        {/* CW: Create Add component to read 2 numbers in 2 text boxes and print addition */}
    </div>
  )
}
