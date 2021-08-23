import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
//To setup this component we have created the setupTags.js file inside the utils folder.
//With this function we can access the tags, create an array and sort their values according to alphabetical order
const TagList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  console.log(newTags)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          //what we are saying here is that each tag array has a text and a value
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
