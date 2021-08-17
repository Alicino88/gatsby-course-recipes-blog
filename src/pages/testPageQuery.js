//Example of Page Query
import React from "react"
import { graphql } from "gatsby"
/*when we export our query as a constant and our component has props,
the data retrieved from the query are listed automatically inside the props
and thus we can access them*/
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
/*
const testPageQuery = (props) => {
  console.log(data)
  return (
    <div>
      <h2>testing {props.data.site.siteMetadata.author}</h2>
    </div>
  )
}*/

//this is the same as above using prop
//we can destructure the prop and access the data:
const testPageQuery = ({ data }) => {
  console.log(data)
  //we can define a variable so that is easier to reuse across the html
  const author = data.site.siteMetadata.author
  return (
    <div>
      <h2>testing {author}</h2>
    </div>
  )
}

export default testPageQuery
