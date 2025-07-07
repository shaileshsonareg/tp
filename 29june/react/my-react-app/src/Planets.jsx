import React from 'react'

export default function Planets() {
    var arr = ["Earth", "Mars", "Pluto"]
  return (
    <div>
        {arr}
        {JSON.stringify(arr)}

        <ol>
            {arr.map(p => <li>{p}</li>)}
        </ol>

        <ul>
            <li>Earth</li>
            <li>Mars</li>
        </ul>
    </div>
  )
}
