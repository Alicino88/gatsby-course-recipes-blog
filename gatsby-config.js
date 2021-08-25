/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        //name: `pages`,
        /*"images" is the name for the resources we are providing. You can choose whatever you want for it
        It doesn't need to match the directory name*/
        name: `images`,
        //path: `${__dirname}/src/pages/`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    /*whenever we need to access a new file/resource we set up a new instance and we add the name we want
    we then use the name for the query
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/css`,
      },
    },*/
    /*I can also get all the assets:
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src/assets`,
      },
    },*/
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `84n65e4pnby0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "500"],
            },
            {
              family: "Inconsolata",
              variants: ["300", "400", "500", "700"],
            },
          ],
        },
      },
    },
  ],
}
