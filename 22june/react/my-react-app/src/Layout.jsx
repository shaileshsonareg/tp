import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <a href="/home">Home</a>
        <Link to="/users">Users Link</Link>
        <Link to="/posts">Posts Link</Link>
        <a href="/users">Users</a>
        <a href="/posts">Posts</a>
        <Outlet />
    </div>
  )
}
