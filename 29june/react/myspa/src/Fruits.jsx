import React from 'react'

export default function Fruits() {

    var arr = ['apple', 'banana', 'chiku']

  return (
    <div>
        {arr}

        <fieldset>
            <legend>Aaam Zindagi</legend>
            <ul>
                <li>{arr[0]}</li>
                <li>{arr[1]}</li>
                <li>{arr[2]}</li>
            </ul>
        </fieldset>

        <fieldset>
            <legend>Mentos Zindagi</legend>
            <ul>
                {arr.map(x => <li>{x}</li>)}
            </ul>
        </fieldset>
    </div>
  )
}
