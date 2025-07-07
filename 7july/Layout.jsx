import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <nav>
            <a href="/add">Add | </a>
            <a href="/sqr">SQR | </a>

            <Link to="/add">Add SPA | </Link>
            <Link to="/sqr">Sqr SPA </Link>
            
        </nav>

        <Outlet />
        
        Ad

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quasi hic amet, reprehenderit asperiores ratione placeat praesentium excepturi ad, voluptatibus incidunt distinctio dolorem facilis quis provident iure fugit alias vel.
    </div>
  )
}
