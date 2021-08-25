import React from "react"
import Layout from "../components/Layout.js"
//to use styled components install plugin https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/?=style-com
//also add the plugin in the gatsby-config.js file
//"styled is a convention name"
import styled from "styled-components"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO.js"

function Contact({ data }) {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main class="page">
        <section class="contact-page">
          <article class="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum."
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum."
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/mjvjpzda"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesome recipes!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`
export default Contact
