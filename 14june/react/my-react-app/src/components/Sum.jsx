import React from 'react'

export default function Sum(props) {
var x = props.num1
var y = props.num2
  return (
    <div style={{color: "blue"}}>{x} + {y} = {x + y}</div>
  )
}
