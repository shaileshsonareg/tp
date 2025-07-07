import React from 'react'

export const Sqr = (props) => {

    // var x = 7
    var x = props.num
    //x is state (mutable)
    //num is property (immutable)

  return (
    <div>Square of {x} is {x * x}</div>
  )
}
