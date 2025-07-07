import React, { useEffect, useState } from 'react'

export default function Users() {

    const [data, setData] = useState([])

    useEffect(() => {
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(result => {
            setData(result)
        })
        
    }, [])
  return (
    <div>
        {JSON.stringify(data)}
    </div>
  )
}
