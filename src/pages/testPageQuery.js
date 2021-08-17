//Example of page Query
import React from "react"
import { graphql } from "gatsby"
//when we export our query as a constant and our component has props,
//the data retrieved from the query are listed automatically inside the props
export const data = graphql`
  {
    site {
      siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`
const testPageQuery = props => {
  console.log(props)
  return (
    <div>
      <h2>testing {props.data.site.siteMetadata.author}</h2>
    </div>
  )
}

export default testPageQuery
