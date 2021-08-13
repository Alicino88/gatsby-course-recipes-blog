import React from "react"
import Layout from "../components/Layout.js"
//to use styled components install plugin https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/?=style-com
//also add the plugin in the gatsby-config.js file
//"styled is a convention name"
import styled from "styled-components"

function Contact() {
  return (
    <Layout>
      <Wrapper>
        <h1>contact page</h1>
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
  h2 {
    color: green;
  }
`

export default Contact
