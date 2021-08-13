import React from "react"

function footer() {
  return (
    <div className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span> built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank">
          Gatsby
        </a>
      </p>
    </div>
  )
}

export default footer
