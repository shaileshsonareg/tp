import React, { useEffect, useState } from 'react'

function Users() {

    var records = [
        {name: "Romit", age: 21},
        {name: "Jayesh", age: 21},
        {name: "ANil", age: 16},
        {name: "Farhan", age: 23}
    ]

    const [users, setUsers] = useState(records)

    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users")

    useEffect(() => {

        fetch(url).then(res => res.json()).then(result => {
            setUsers(result)
        })

    }, [url])

  return (
    <div>
        <button onClick={() => { setUrl("https://jsonplaceholder.typicode.com/users") }}>Users</button>
        <button onClick={() => { setUrl("https://jsonplaceholder.typicode.com/posts") }}>Posts</button>
        <br />
        {JSON.stringify(users)}
        {/* <h1>Total users:</h1>
        {users.map(x => <div>{x.name}</div>)}
        <h1>Pub me jane ke liye eligible users</h1>
        <ol>
            {
                users.filter(x => x.age > 18).map(x => <li>{x.name}</li>)
            }

        </ol> */}
    </div>
  )
}

export default Users;