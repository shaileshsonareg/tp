import React, { useEffect, useState } from 'react'

export default function Users() {

    const [data, setData] = useState([{"name":"Amit"}]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(result => {
            console.log(result)
            setData(result)
        })
        
    }, [])

  return (

    <>
    <table className='table table-dark table-hover table-striped-columns'>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map( u => (
                    <tr>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                    </tr>
                ))
            }
            

        </tbody>
        <tfoot></tfoot>
    </table>
    {/* <div>{JSON.stringify(data)}</div> */}
    </>
  )
}
