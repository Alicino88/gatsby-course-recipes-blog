import React from "react"
import Layout from "../components/Layout.js"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I am the title of the page</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum."
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl"
            placeholder="tracedSVG"
            className="about-img"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
