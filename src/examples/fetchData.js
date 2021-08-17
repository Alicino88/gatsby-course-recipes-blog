//this is the code copied from the code exporter of the GraphiQL IDE
//example of query using StaticQuery hook
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//useStaticQuery needs to be used inside a react component that starts with capital letter

const ComponentName = () => {
  const data = useStaticQuery(graphql`
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
  `)
  //the original code createsa json string from a  javascript object by using the stringify method
  //return <pre>{JSON.stringify(data, null, 4)}</pre>
  //below code modified to access only certain data and rener them with the HTML elements I want
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {data.site.siteMetadata.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name}:{item.age}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default ComponentName
