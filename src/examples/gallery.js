import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//getImage helper function https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#getimage
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
//the code below is copied from the code exporter-->page query even though we will use the useStaticQuery hook
//it is a way to separate the query from the component itself.
const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)

  //nodes is the array containing all the pics
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        console.log(image)
        //image is the path to the image, the function getImage returns undefined
        //if the object passed, or any intermediate children are undefined.
        const pathToImage = getImage(image)
        // with array destructuring const {name} = image
        return (
          <article key={index} className="item">
            {/*<p>{name}</p>*/}
            <GatsbyImage
              image={pathToImage}
              alt={image.name}
              className="gallery-img"
            />
            <p>{image.name}</p>
          </article>
        )
        console.log(image)
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
