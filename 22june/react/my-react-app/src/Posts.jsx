import React, { useEffect, useState } from 'react'
import axios from "axios";  //npm install axios

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            setPosts(response);
        })
    }, [])

  return (
    <div>
        {JSON.stringify(posts)}
    </div>
  )
}
