import React from 'react'

export default function Cube(props) {
    var x = props.num
  return (
    <div>{props.name} Cube of {x} is {x * x * x}</div>
  )
}
