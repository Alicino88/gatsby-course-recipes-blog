/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  /*below metadata to practice GraphQL */
  siteMetadata: {
    title: "Simply recipes",
    description: "Nice and clean recipes site",
    author: "Alice Moretti",
    person: { name: "John", age: 33 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "John", age: 33 },
      { name: "Susan", age: 35 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic
  ],
}
