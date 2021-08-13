/*Layout component is the one that wraps all the others*/
/*children props represents the actual content of the page*/
import React from "react"
import Navbar from "./Navbar.js"
import Footer from "./footer.js"
import "normalize.css"
//it makes sense to import the css file in the layout component as this one wraps all the other components
//import "./layout.css"
import "../assets/css/main.css"

function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
