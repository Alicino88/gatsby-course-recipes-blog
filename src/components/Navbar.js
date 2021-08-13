import React from "react"
import { Link } from "gatsby"

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/tags">tags</Link>
        </li>
        <li>
          <Link to="/recipes">recipes</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
