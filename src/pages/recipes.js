import React from "react"
import Layout from "../components/Layout.js"
import AllRecipes from "../components/AllRecipes.js"

function Recipes() {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
