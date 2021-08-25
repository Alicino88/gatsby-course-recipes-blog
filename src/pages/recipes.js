import React from "react"
import Layout from "../components/Layout.js"
import AllRecipes from "../components/AllRecipes.js"
import SEO from "../components/SEO.js"

function Recipes() {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
