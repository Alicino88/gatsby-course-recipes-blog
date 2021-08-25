//Index is the hp
/*the hp, index.js, like the other pages, are wrapped around the Layout component
The Layout component contains the elements that are always visible, such as the navbar, and the actual
content of the page (in this case the h1Content of the homepageH1) that is passed using children prop
to the Layout component*/
/*example of inline styling:
 <Layout>
        {style: the first bracket is to access javascript and the second to access the object }
        <h1 style={{ color: "blue", textTransform: "uppercase" }}></h1>

*/
import React from "react"
import Layout from "../components/Layout.js"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO.js"
import AllRecipes from "../components/AllRecipes.js"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply recipes</h1>
              <h4>Delicious recipes for everiday life</h4>
            </div>
          </div>
        </header>

        <AllRecipes />
      </main>
    </Layout>
  )
}
