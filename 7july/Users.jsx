import React, { useEffect, useState } from 'react'

export const Users = () => {

    const [data, setData] = useState([])

    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users")

    const [endpoint, setEndpoint] = useState("users")

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(result => {            
            setData(result)
        })
    }, [url, endpoint])
    
    return (
        <div>

        <input type="text" onChange={(e) => { 
            setEndpoint(e.target.value);
            setUrl(`https://jsonplaceholder.typicode.com/${endpoint}`)  
        } } />
        <br />
        <label htmlFor="">Endpoint: </label>{endpoint}

        <br />

        <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/users") }>Users</button>
        <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts") }>Posts</button>

        <br />

        {JSON.stringify(data)}
        {/* <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>

                {data.map(u => (
                    <tr>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                    </tr>
                ))}

            </tbody>
        </table> */}
    </div>
  )
}
