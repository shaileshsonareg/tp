import React from 'react'

export default function Fruits() {

    var arr = ["apple", "banana", "chiku", "dangru"]
        // var arr = ["<li>apple</li>", "<li>banana</li>", "<li>chiku</li>", "<li>dangru</li>"]

  return (
    <div>
        <ul>
            {arr.map(x => <li> {x} </li> )}
        </ul>

    </div>
  )
}
